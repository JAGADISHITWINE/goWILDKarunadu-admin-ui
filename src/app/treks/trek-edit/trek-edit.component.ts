// trek-edit.component.ts - Redesigned with Multi-Batch & Captain Management

import { Component, OnDestroy, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrekEdit } from './trek-edit';
import { DropdownManagerService } from 'src/app/dropdown-manager/dropdown-manager.service';
import { debounceTime, finalize, take } from 'rxjs';
import { AdminShellComponent } from 'src/app/shared/admin-shell/admin-shell.component';
import { environment } from 'src/environments/environment';
import { optimizeImageForUpload } from 'src/app/core/utils/image-optimizer.util';
import { NotificationService } from 'src/app/core/services/notification.service';

export type TrekEditSection = 'basic' | 'batches' | 'itinerary' | 'gear' | 'media';

@Component({
  standalone: true,
  selector: 'app-trek-edit',
  templateUrl: './trek-edit.component.html',
  styleUrls: ['./trek-edit.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AdminShellComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrekEditComponent implements OnInit, OnDestroy {
  readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  @ViewChild('coverFileInput') coverFileInput!: any;
  @ViewChild('galleryFileInput') galleryFileInput!: any;

  editTrekForm!: FormGroup;
  trekId!: string;
  isLoading = true;
  isSaving = false;
  submitted = false;
  activeSection: TrekEditSection = 'basic';
  lastAutoSavedAt: string | null = null;
  statusMessage: string | null = null;
  statusTone: 'success' | 'warning' | 'danger' | null = null;
  private autosaveTimer: any;
  private draftStorageKey = '';

  // Dropdown options
  difficulties: string[] = ['Easy', 'Moderate', 'Difficult', 'Extreme', 'Challenging'];
  categories: string[] = ['Hill Trek', 'Peak Trek', 'Mountain Trek', 'Forest Trek', 'Desert Trek', 'Snow Trek', 'Western Ghats'];
  collections: string[] = ['Western Ghats Peaks', 'Monsoon Specials', 'Heritage & Trails', 'Weekend Escapes', 'Family Friendly'];
  fitnessLevels: string[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  batchStatuses: string[] = ['active', 'inactive', 'full', 'cancelled', 'completed'];

  // Image previews
  coverPreview: string | null = null;
  galleryPreviews: string[] = [];

  // Image files
  coverImageFile: File | null = null;
  galleryImageFiles: File[] = [];

  // Existing images
  existingCoverFilename: string | null = null;
  existingGalleryFilenames: string[] = [];
  deletedGalleryFilenames: string[] = [];
  coverDeleted = false;

  readonly sections: Array<{ id: TrekEditSection; label: string; icon: string }> = [
    { id: 'basic', label: '1. Trek Basics', icon: 'bi-geo-alt-fill' },
    { id: 'batches', label: '2. Batches & Captains', icon: 'bi-people-fill' },
    { id: 'itinerary', label: '3. Itinerary & Elevation', icon: 'bi-map-fill' },
    { id: 'gear', label: '4. Checklist & Inclusions', icon: 'bi-backpack-fill' },
    { id: 'media', label: '5. Media & Gallery', icon: 'bi-images' },
  ];

  constructor(
    private fb: FormBuilder,
    private trekService: TrekEdit,
    private router: Router,
    private route: ActivatedRoute,
    private dropdownService: DropdownManagerService,
    private notify: NotificationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDropdownOptions();

    this.route.paramMap.subscribe((params) => {
      const id = String(params.get('id') || '').trim();
      if (!id) {
        this.isLoading = false;
        return;
      }
      this.trekId = id;
      this.draftStorageKey = `trek-edit-draft-${this.trekId}`;
      this.fetchTrek();
    });
  }

  ngOnDestroy(): void {
    this.autosaveTimer?.unsubscribe?.();
  }

  setActiveSection(section: TrekEditSection) {
    this.activeSection = section;
  }

  private loadDropdownOptions() {
    this.dropdownService.getGroupOptions('trekDifficulty').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.difficulties = opts.map((o) => o.label);
    });

    this.dropdownService.getGroupOptions('trekCategory').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.categories = opts.map((o) => o.label);
    });

    this.dropdownService.getGroupOptions('trekCollection').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.collections = opts.map((o) => o.label);
    });

    this.dropdownService.getGroupOptions('trekFitnessLevel').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.fitnessLevels = opts.map((o) => o.label);
    });

    this.dropdownService.getGroupOptions('batchStatus').pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0) this.batchStatuses = opts.map((o) => o.label);
    });
  }

  initForm() {
    this.editTrekForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      collection: [''],
      difficulty: ['', Validators.required],
      fitnessLevel: [''],
      description: [''],
      highlights: this.fb.array([]),
      batches: this.fb.array([]),
      thingsToCarry: this.fb.array([]),
      importantNotes: this.fb.array([]),
      elevationWaypoints: this.fb.array([])
    });
  }

  // ===== GETTERS =====
  get highlights(): FormArray {
    return this.editTrekForm.get('highlights') as FormArray;
  }

  get batches(): FormArray {
    return this.editTrekForm.get('batches') as FormArray;
  }

  get thingsToCarry(): FormArray {
    return this.editTrekForm.get('thingsToCarry') as FormArray;
  }

  get importantNotes(): FormArray {
    return this.editTrekForm.get('importantNotes') as FormArray;
  }

  get elevationWaypoints(): FormArray {
    return this.editTrekForm.get('elevationWaypoints') as FormArray;
  }

  getInclusions(batchIndex: number): FormArray {
    return this.batches.at(batchIndex).get('inclusions') as FormArray;
  }

  getExclusions(batchIndex: number): FormArray {
    return this.batches.at(batchIndex).get('exclusions') as FormArray;
  }

  getItineraryDays(batchIndex: number): FormArray {
    return this.batches.at(batchIndex).get('itineraryDays') as FormArray;
  }

  getActivities(batchIndex: number, dayIndex: number): FormArray {
    return this.getItineraryDays(batchIndex).at(dayIndex).get('activities') as FormArray;
  }

  // ===== FETCH TREK DATA =====
  fetchTrek() {
    this.isLoading = true;

    this.trekService.editTrek(this.trekId).subscribe({
      next: (res: any) => {
        if (!res?.success || !res?.data) {
          this.isLoading = false;
          this.setStatus('Trek details could not be loaded.', 'danger');
          return;
        }

        const trek = res.data;

        // Patch basic fields
        this.editTrekForm.patchValue({
          name: trek.name,
          location: trek.location,
          category: trek.category,
          collection: trek.collection || '',
          difficulty: trek.difficulty,
          fitnessLevel: trek.fitnessLevel || '',
          description: trek.description || ''
        });

        // Set highlights
        this.setFormArray(this.highlights, trek.highlights || []);

        // Set things to carry
        this.setFormArray(this.thingsToCarry, trek.thingsToCarry || []);

        // Set important notes
        this.setFormArray(this.importantNotes, trek.importantNotes || []);

        // Set elevation waypoints
        this.setElevationWaypoints(trek.elevationWaypoints || []);

        // Set batches (including captain details)
        this.setBatches(trek.batches || []);

        // Set cover image
        if (trek.coverImage) {
          this.existingCoverFilename = trek.coverImage;
          this.coverPreview = this.getImageUrl(trek.coverImage, trek.updatedAt || trek.createdAt);
        }

        // Set gallery images
        if (trek.galleryImages && Array.isArray(trek.galleryImages)) {
          this.existingGalleryFilenames = trek.galleryImages;
        }

        this.restoreDraft();
        this.setupAutosave();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.setStatus('Server error while loading trek details.', 'danger');
      }
    });
  }

  // ===== BATCH METHODS =====
  createBatch(data?: any): FormGroup {
    return this.fb.group({
      id: [data?.id || ''],
      startDate: [data?.startDate || '', Validators.required],
      endDate: [data?.endDate || '', Validators.required],
      availableSlots: [data?.availableSlots || '', Validators.required],
      price: [data?.price || '', Validators.required],
      minAge: [data?.minAge || ''],
      maxAge: [data?.maxAge || ''],
      minParticipants: [data?.minParticipants || ''],
      maxParticipants: [data?.maxParticipants || ''],
      duration: [data?.duration || ''],
      batchStatus: [data?.batchStatus || 'active', Validators.required],
      captainName: [data?.captainName || data?.captain_name || ''],
      captainPhone: [data?.captainPhone || data?.captain_phone || ''],
      captainEmail: [data?.captainEmail || data?.captain_email || ''],
      inclusions: this.fb.array(data?.inclusions?.map((inc: string) => this.fb.control(inc)) || [this.fb.control('')]),
      exclusions: this.fb.array(data?.exclusions?.map((exc: string) => this.fb.control(exc)) || [this.fb.control('')]),
      itineraryDays: this.fb.array(data?.itineraryDays?.map((day: any) => this.createDay(day)) || [this.createDay({ dayNumber: 1, title: 'Arrival & Trek Start' })])
    });
  }

  createDay(data?: any): FormGroup {
    return this.fb.group({
      dayNumber: [data?.dayNumber || 1, Validators.required],
      title: [data?.title || '', Validators.required],
      activities: this.fb.array(data?.activities?.map((act: any) => this.createActivity(act)) || [])
    });
  }

  createActivity(data?: any): FormGroup {
    return this.fb.group({
      activityTime: [data?.activityTime || '', Validators.required],
      activityText: [data?.activityText || '', Validators.required]
    });
  }

  setBatches(batches: any[]) {
    this.batches.clear();
    if (batches && batches.length > 0) {
      batches.forEach((batch) => {
        this.batches.push(this.createBatch(batch));
      });
    } else {
      this.batches.push(this.createBatch());
    }
  }

  addBatch() {
    this.batches.push(this.createBatch());
    this.notificationService.show('New batch created');
  }

  removeBatch(index: number) {
    if (this.batches.length > 1) {
      this.batches.removeAt(index);
      this.notificationService.show('Batch removed');
    } else {
      this.setStatus('At least one batch is required', 'warning');
      this.notificationService.show('At least one batch is required');
    }
  }

  // ===== ARRAY HELPERS =====
  setFormArray(formArray: FormArray, items: string[]) {
    formArray.clear();
    if (items && items.length > 0) {
      items.forEach((item) => formArray.push(this.fb.control(item)));
    } else {
      formArray.push(this.fb.control(''));
    }
  }

  addHighlight() {
    this.highlights.push(this.fb.control(''));
  }

  removeHighlight(index: number) {
    if (this.highlights.length > 1) this.highlights.removeAt(index);
  }

  addThingToCarry() {
    this.thingsToCarry.push(this.fb.control(''));
  }

  removeThingToCarry(index: number) {
    this.thingsToCarry.removeAt(index);
  }

  addImportantNote() {
    this.importantNotes.push(this.fb.control(''));
  }

  removeImportantNote(index: number) {
    this.importantNotes.removeAt(index);
  }

  addInclusion(batchIndex: number) {
    this.getInclusions(batchIndex).push(this.fb.control(''));
  }

  removeInclusion(batchIndex: number, inclusionIndex: number) {
    if (this.getInclusions(batchIndex).length > 1) {
      this.getInclusions(batchIndex).removeAt(inclusionIndex);
    }
  }

  addExclusion(batchIndex: number) {
    this.getExclusions(batchIndex).push(this.fb.control(''));
  }

  removeExclusion(batchIndex: number, exclusionIndex: number) {
    if (this.getExclusions(batchIndex).length > 1) {
      this.getExclusions(batchIndex).removeAt(exclusionIndex);
    }
  }

  addItineraryDay(batchIndex: number) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    const dayNumber = itineraryDays.length + 1;
    itineraryDays.push(this.createDay({ dayNumber, title: `Day ${dayNumber} Schedule` }));
  }

  removeItineraryDay(batchIndex: number, dayIndex: number) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    if (itineraryDays.length > 1) {
      itineraryDays.removeAt(dayIndex);
      this.recalculateDayNumbers(batchIndex);
    }
  }

  private recalculateDayNumbers(batchIndex: number) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    for (let i = 0; i < itineraryDays.length; i++) {
      itineraryDays.at(i).patchValue({ dayNumber: i + 1 });
    }
  }

  addActivity(batchIndex: number, dayIndex: number) {
    this.getActivities(batchIndex, dayIndex).push(this.createActivity());
  }

  removeActivity(batchIndex: number, dayIndex: number, activityIndex: number) {
    this.getActivities(batchIndex, dayIndex).removeAt(activityIndex);
  }

  // ===== WAYPOINTS =====
  setElevationWaypoints(waypoints: any[]) {
    this.elevationWaypoints.clear();
    if (waypoints && waypoints.length > 0) {
      waypoints.forEach((wp) => {
        this.elevationWaypoints.push(this.fb.group({
          km: [wp.km ?? 0, [Validators.required, Validators.min(0)]],
          elevation: [wp.elevation ?? 0, [Validators.required, Validators.min(0)]],
          name: [wp.name || 'Checkpoint', Validators.required],
          icon: [wp.icon || 'bi bi-geo-alt-fill'],
          note: [wp.note || '']
        }));
      });
    } else {
      this.elevationWaypoints.push(this.fb.group({ km: 0, elevation: 950, name: 'Basecamp (0km)', icon: 'bi bi-signpost-2', note: 'Start point' }));
      this.elevationWaypoints.push(this.fb.group({ km: 11.5, elevation: 1894, name: 'Peak Summit (11.5km)', icon: 'bi bi-triangle-fill', note: 'Summit milestone' }));
    }
  }

  addWaypoint() {
    const current = this.elevationWaypoints.length;
    const lastKm = current > 0 ? (this.elevationWaypoints.at(current - 1).get('km')?.value || 0) + 2 : 0;
    const lastElev = current > 0 ? (this.elevationWaypoints.at(current - 1).get('elevation')?.value || 1000) + 100 : 1000;
    this.elevationWaypoints.push(this.fb.group({
      km: [lastKm, [Validators.required, Validators.min(0)]],
      elevation: [lastElev, [Validators.required, Validators.min(0)]],
      name: [`Checkpoint ${current + 1}`, Validators.required],
      icon: ['bi bi-signpost-2'],
      note: ['']
    }));
  }

  removeWaypoint(index: number) {
    if (this.elevationWaypoints.length > 2) {
      this.elevationWaypoints.removeAt(index);
    }
  }

  asFormControl(ctrl: any): any {
    return ctrl;
  }

  // ===== IMAGES =====
  getImageUrl(filename: string, cacheBust?: any): string {
    if (!filename) return '';
    if (filename.startsWith('http://') || filename.startsWith('https://') || filename.startsWith('data:')) {
      return filename;
    }
    const cleanFilename = filename.replace(/^\/+/, '');
    const baseUrl = this.mediaBaseUrl;
    const sep = baseUrl.endsWith('/') ? '' : '/';
    const ts = cacheBust ? new Date(cacheBust).getTime() : '';
    const query = ts ? `?v=${ts}` : '';
    return `${baseUrl}${sep}${cleanFilename}${query}`;
  }

  async onCoverImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      try {
        const optimized = await optimizeImageForUpload(file, 1920, 0.85);
        this.coverImageFile = optimized;
        const reader = new FileReader();
        reader.onload = () => (this.coverPreview = reader.result as string);
        reader.readAsDataURL(optimized);
        this.coverDeleted = false;
      } catch {
        this.coverImageFile = file;
        const reader = new FileReader();
        reader.onload = () => (this.coverPreview = reader.result as string);
        reader.readAsDataURL(file);
        this.coverDeleted = false;
      }
    }
  }

  removeCoverImage() {
    this.coverImageFile = null;
    this.coverPreview = null;
    this.coverDeleted = true;
    this.existingCoverFilename = null;
  }

  async onGalleryImagesSelected(event: any) {
    const files: FileList = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const optimized = await optimizeImageForUpload(file, 1600, 0.82);
        this.galleryImageFiles.push(optimized);
        const reader = new FileReader();
        reader.onload = () => this.galleryPreviews.push(reader.result as string);
        reader.readAsDataURL(optimized);
      } catch {
        this.galleryImageFiles.push(file);
        const reader = new FileReader();
        reader.onload = () => this.galleryPreviews.push(reader.result as string);
        reader.readAsDataURL(file);
      }
    }
  }

  removeNewGalleryImage(index: number) {
    this.galleryImageFiles.splice(index, 1);
    this.galleryPreviews.splice(index, 1);
  }

  removeExistingGalleryImage(filename: string) {
    this.deletedGalleryFilenames.push(filename);
    this.existingGalleryFilenames = this.existingGalleryFilenames.filter(f => f !== filename);
  }

  // ===== METRIC GETTERS =====
  get totalBatchesCount(): number {
    return this.batches.length;
  }

  get totalCaptainsAssigned(): number {
    return this.batches.controls.filter(b => !!b.get('captainName')?.value?.trim()).length;
  }

  get minTrekPrice(): number {
    const prices = this.batches.controls
      .map(b => Number(b.get('price')?.value || 0))
      .filter(p => p > 0);
    return prices.length ? Math.min(...prices) : 0;
  }

  // ===== SUBMIT FORM =====
  saveTrek() {
    this.submitted = true;
    if (this.editTrekForm.invalid) {
      this.editTrekForm.markAllAsTouched();
      this.setStatus('Please complete all required fields marked in red.', 'danger');
      this.notificationService.show('Please complete all required fields.', 3500);
      return;
    }

    this.isSaving = true;
    const formValue = this.editTrekForm.value;

    const updatePayload = {
      ...formValue,
      coverDeleted: this.coverDeleted,
      deletedGallery: this.deletedGalleryFilenames
    };

    const formData = new FormData();
    Object.keys(updatePayload).forEach(key => {
      const value = updatePayload[key];
      if (typeof value === 'object' && !(value instanceof File)) {
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    if (this.coverImageFile) {
      formData.append('coverImage', this.coverImageFile);
    }

    this.galleryImageFiles.forEach(file => {
      formData.append('gallery', file);
    });

    this.trekService.updateTrek(this.trekId, formData)
      .pipe(finalize(() => (this.isSaving = false)))
      .subscribe({
        next: (res: any) => {
          if (res?.success === true) {
            this.clearDraft();
            this.setStatus('Trek updated successfully!', 'success');
            this.notificationService.show('Trek updated successfully!');
            this.router.navigate(['/admin/treks/list']);
          } else {
            const message = res?.data?.message || 'Failed to update trek';
            this.setStatus(message, 'danger');
            this.notificationService.show(message, 3500);
          }
        },
        error: (err) => {
          this.setStatus('Server error while saving trek changes.', 'danger');
          this.notificationService.show('Server error while saving changes.', 3500);
        }
      });
  }

  private setupAutosave() {
    this.autosaveTimer?.unsubscribe?.();
    this.autosaveTimer = this.editTrekForm.valueChanges
      .pipe(debounceTime(900))
      .subscribe(() => this.saveDraft());
  }

  private saveDraft() {
    if (!this.draftStorageKey) return;
    const draft = {
      formValue: this.editTrekForm.getRawValue(),
      savedAt: new Date().toISOString(),
    };
    sessionStorage.setItem(this.draftStorageKey, JSON.stringify(draft));
    this.lastAutoSavedAt = draft.savedAt;
  }

  private restoreDraft() {
    if (!this.draftStorageKey) return;
    const raw = sessionStorage.getItem(this.draftStorageKey);
    if (!raw) return;
    try {
      const draft = JSON.parse(raw);
      if (draft?.formValue) {
        this.editTrekForm.patchValue(draft.formValue, { emitEvent: false });
      }
      this.lastAutoSavedAt = draft?.savedAt || null;
    } catch {
      sessionStorage.removeItem(this.draftStorageKey);
    }
  }

  private clearDraft() {
    if (!this.draftStorageKey) return;
    sessionStorage.removeItem(this.draftStorageKey);
    this.lastAutoSavedAt = null;
  }

  isInvalid(controlName: string): boolean {
    const control = this.editTrekForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }

  isBatchFieldInvalid(batchIndex: number, fieldName: string): boolean {
    const control = this.batches.at(batchIndex).get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }

  private setStatus(message: string, tone: 'success' | 'warning' | 'danger') {
    this.statusMessage = message;
    this.statusTone = tone;
  }

  cancel(): void {
    this.router.navigate(['/admin/treks/list']);
  }
}
