// trek-add.component.ts - Redesigned with Multi-Batch & Captain Management

import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TrekAdd } from './trek-add';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExcelUploadService } from 'src/app/services/excel-upload.service';
import { DropdownManagerService } from 'src/app/dropdown-manager/dropdown-manager.service';
import { debounceTime, take } from 'rxjs';
import { AdminShellComponent } from 'src/app/shared/admin-shell/admin-shell.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { optimizeImageForUpload } from 'src/app/core/utils/image-optimizer.util';

export type TrekFormSection = 'basic' | 'batches' | 'itinerary' | 'gear' | 'media' | 'promotions';

@Component({
  selector: 'app-trek-add',
  templateUrl: './trek-add.component.html',
  styleUrls: ['./trek-add.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminShellComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrekAddComponent implements OnInit, OnDestroy {
  addTrekForm!: FormGroup;
  submitted = false;
  isSaving = false;
  lastAutoSavedAt: string | null = null;
  activeSection: TrekFormSection = 'basic';
  private autosaveTimer: any;
  private draftStorageKey = 'trek-add-draft';

  // Images
  coverImage: File | null = null;
  coverPreview: string | null = null;
  galleryFiles: File[] = [];
  galleryPreviews: string[] = [];

  // Excel upload
  isUploadingExcel = false;
  excelFileName = '';
  uploadedBatchCount = 0;
  statusMessage: string | null = null;
  statusTone: 'success' | 'warning' | 'danger' | null = null;

  difficulties: string[] = ['Easy', 'Moderate', 'Difficult', 'Extreme', 'Challenging'];
  categories: string[] = ['Hill Trek', 'Peak Trek', 'Mountain Trek', 'Forest Trek', 'Desert Trek', 'Snow Trek', 'Western Ghats'];
  collections: string[] = ['Western Ghats Peaks', 'Monsoon Specials', 'Heritage & Trails', 'Weekend Escapes', 'Family Friendly'];
  fitnessLevels: string[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  batchStatuses: string[] = ['active', 'inactive', 'full', 'cancelled', 'completed'];

  readonly sections: Array<{ id: TrekFormSection; label: string; icon: string; badge?: string }> = [
    { id: 'basic', label: '1. Trek Basics', icon: 'bi-geo-alt-fill' },
    { id: 'batches', label: '2. Batches & Captains', icon: 'bi-people-fill' },
    { id: 'itinerary', label: '3. Itinerary & Elevation', icon: 'bi-map-fill' },
    { id: 'gear', label: '4. Checklist & Inclusions', icon: 'bi-backpack-fill' },
    { id: 'media', label: '5. Gallery & Media', icon: 'bi-images' },
    { id: 'promotions', label: '6. Coupons & Discounts', icon: 'bi-tag-fill' },
  ];

  constructor(
    private fb: FormBuilder,
    private trekService: TrekAdd,
    private router: Router,
    private excelService: ExcelUploadService,
    private dropdownService: DropdownManagerService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.addTrekForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      difficulty: ['', Validators.required],
      category: ['', Validators.required],
      collection: [''],
      fitnessLevel: [''],
      description: [''],
      highlights: this.fb.array([this.fb.control('')]),
      batches: this.fb.array([this.createBatch()]),
      thingsToCarry: this.fb.array([]),
      importantNotes: this.fb.array([]),
      elevationWaypoints: this.fb.array([
        this.createWaypoint(0, 950, 'Basecamp (0km)', 'bi bi-signpost-2', 'Permit & ID Verification'),
        this.createWaypoint(3.8, 1280, 'Water Point (3.8km)', 'bi bi-droplet-fill', 'Natural spring water refill point'),
        this.createWaypoint(7.2, 1620, 'Ridge Saddle (7.2km)', 'bi bi-flag-fill', 'Scenic cloud valley panoramic viewpoint'),
        this.createWaypoint(11.5, 1894, 'Peak Summit (11.5km)', 'bi bi-triangle-fill', 'Highest summit milestone & photo point'),
        this.createWaypoint(22.0, 950, 'Return (22km)', 'bi bi-check2-circle', 'Summit debrief & certificate handover')
      ]),
      coupon: this.fb.group({
        enabled: [false],
        code: [''],
        discountType: ['percentage'],
        discountValue: [10],
        minBookingAmount: [0],
        maxDiscountAmount: [null],
        startDate: [''],
        endDate: [''],
        usageLimit: [null],
        isActive: [true],
      })
    });
    this.loadDropdownOptions();
    this.restoreDraft();
    this.setupAutosave();
  }

  ngOnDestroy(): void {
    this.autosaveTimer?.unsubscribe?.();
  }

  setActiveSection(section: TrekFormSection) {
    this.activeSection = section;
  }

  nextSection() {
    const order: TrekFormSection[] = ['basic', 'batches', 'itinerary', 'gear', 'media', 'promotions'];
    const idx = order.indexOf(this.activeSection);
    if (idx < order.length - 1) {
      this.activeSection = order[idx + 1];
    }
  }

  prevSection() {
    const order: TrekFormSection[] = ['basic', 'batches', 'itinerary', 'gear', 'media', 'promotions'];
    const idx = order.indexOf(this.activeSection);
    if (idx > 0) {
      this.activeSection = order[idx - 1];
    }
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

  /* ----------------- EXCEL UPLOAD ----------------- */

  async onExcelFileSelect(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const validTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel'
    ];

    if (!validTypes.includes(file.type)) {
      this.setStatus('Please upload a valid Excel file (.xlsx or .xls)', 'warning');
      this.notificationService.show('Please upload a valid Excel file (.xlsx or .xls)');
      return;
    }

    this.isUploadingExcel = true;
    this.excelFileName = file.name;

    try {
      const result = await this.excelService.readExcelFile(file);

      if (result.success && result.data.length > 0) {
        const parsedData = this.excelService.parseTrekData(result.data);
        const formData = this.excelService.convertToFormData(parsedData);
        this.populateFormFromExcel(formData);
        this.uploadedBatchCount = formData.batches.length;
        this.setStatus(`Excel file imported! ${this.uploadedBatchCount} batch(es) loaded with Captain information.`, 'success');
        this.notificationService.show(`Loaded ${this.uploadedBatchCount} batch(es) from Excel`, 3000);
      } else {
        this.setStatus('No data found in Excel file', 'warning');
        this.notificationService.show('No data found in Excel file', 3000);
      }
    } catch (error) {
      this.setStatus('Failed to read Excel file. Please check the format and try again.', 'danger');
      this.notificationService.show('Failed to read Excel file. Please check format.', 3500);
    } finally {
      this.isUploadingExcel = false;
      event.target.value = '';
    }
  }

  populateFormFromExcel(data: any) {
    this.clearFormArrays();

    this.addTrekForm.patchValue({
      name: data.trekInfo.name,
      location: data.trekInfo.location,
      difficulty: data.trekInfo.difficulty,
      category: data.trekInfo.category,
      collection: data.trekInfo.collection || '',
      fitnessLevel: data.trekInfo.fitnessLevel,
      description: data.trekInfo.description
    });

    if (data.trekInfo.highlights && data.trekInfo.highlights.length > 0) {
      data.trekInfo.highlights.forEach((highlight: string) => {
        if (highlight) this.highlights.push(this.fb.control(highlight));
      });
    } else {
      this.highlights.push(this.fb.control(''));
    }

    if (data.trekInfo.thingsToCarry && data.trekInfo.thingsToCarry.length > 0) {
      data.trekInfo.thingsToCarry.forEach((item: string) => {
        if (item) this.thingsToCarry.push(this.fb.control(item));
      });
    }

    if (data.trekInfo.importantNotes && data.trekInfo.importantNotes.length > 0) {
      data.trekInfo.importantNotes.forEach((note: string) => {
        if (note) this.importantNotes.push(this.fb.control(note));
      });
    }

    if (data.batches && data.batches.length > 0) {
      while (this.batches.length > 0) {
        this.batches.removeAt(0);
      }

      data.batches.forEach((batch: any) => {
        const batchGroup = this.createBatch();

        batchGroup.patchValue({
          startDate: batch.startDate,
          endDate: batch.endDate,
          availableSlots: batch.availableSlots,
          price: batch.price,
          minAge: batch.minAge,
          maxAge: batch.maxAge,
          duration: batch.duration,
          minParticipants: batch.minParticipants,
          maxParticipants: batch.maxParticipants,
          batchStatus: batch.batchStatus,
          captainName: batch.captainName || '',
          captainPhone: batch.captainPhone || '',
          captainEmail: batch.captainEmail || '',
        });

        const inclusionsArray = batchGroup.get('inclusions') as FormArray;
        inclusionsArray.clear();
        if (batch.inclusions && batch.inclusions.length > 0) {
          batch.inclusions.forEach((inc: string) => {
            if (inc) inclusionsArray.push(this.fb.control(inc));
          });
        } else {
          inclusionsArray.push(this.fb.control(''));
        }

        const exclusionsArray = batchGroup.get('exclusions') as FormArray;
        exclusionsArray.clear();
        if (batch.exclusions && batch.exclusions.length > 0) {
          batch.exclusions.forEach((exc: string) => {
            if (exc) exclusionsArray.push(this.fb.control(exc));
          });
        } else {
          exclusionsArray.push(this.fb.control(''));
        }

        const itineraryArray = batchGroup.get('itineraryDays') as FormArray;
        itineraryArray.clear();
        if (batch.itineraryDays && batch.itineraryDays.length > 0) {
          batch.itineraryDays.forEach((day: any) => {
            const dayGroup = this.createDay(day.dayNumber);
            dayGroup.patchValue({
              dayNumber: day.dayNumber,
              title: day.title
            });

            const activitiesArray = dayGroup.get('activities') as FormArray;
            if (day.activities && day.activities.length > 0) {
              day.activities.forEach((activity: any) => {
                activitiesArray.push(this.fb.group({
                  activityTime: [activity.activityTime, Validators.required],
                  activityText: [activity.activityText, Validators.required]
                }));
              });
            }
            itineraryArray.push(dayGroup);
          });
        } else {
          itineraryArray.push(this.createDay(1));
        }

        this.batches.push(batchGroup);
      });
    }
  }

  clearFormArrays() {
    while (this.highlights.length > 0) this.highlights.removeAt(0);
    while (this.thingsToCarry.length > 0) this.thingsToCarry.removeAt(0);
    while (this.importantNotes.length > 0) this.importantNotes.removeAt(0);
    while (this.batches.length > 0) this.batches.removeAt(0);
  }

  downloadTemplate() {
    this.excelService.downloadTemplate();
  }

  downloadSingleBatchTemplate() {
    this.excelService.downloadSingleBatchTemplate();
  }

  /* ----------------- BATCHES ----------------- */

  get batches(): FormArray {
    return this.addTrekForm.get('batches') as FormArray;
  }

  createBatch(): FormGroup {
    return this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      availableSlots: ['', Validators.required],
      minAge: [''],
      maxAge: [''],
      minParticipants: [''],
      maxParticipants: [''],
      duration: [''],
      batchStatus: ['', Validators.required],
      price: ['', Validators.required],
      captainName: [''],
      captainPhone: [''],
      captainEmail: [''],
      inclusions: this.fb.array([this.fb.control('')]),
      exclusions: this.fb.array([this.fb.control('')]),
      itineraryDays: this.fb.array([this.createDay(1)]),
    });
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

  /* ----------------- ARRAYS ----------------- */

  get highlights(): FormArray {
    return this.addTrekForm.get('highlights') as FormArray;
  }

  addHighlight() {
    this.highlights.push(this.fb.control(''));
  }

  removeHighlight(index: number) {
    if (this.highlights.length > 1) {
      this.highlights.removeAt(index);
    }
  }

  getInclusions(i: number): FormArray {
    return this.batches.at(i).get('inclusions') as FormArray;
  }

  addInclusion(i: number) {
    this.getInclusions(i).push(this.fb.control(''));
  }

  removeInclusion(i: number, ii: number) {
    const inclusions = this.getInclusions(i);
    if (inclusions.length > 1) {
      inclusions.removeAt(ii);
    }
  }

  getExclusions(i: number): FormArray {
    return this.batches.at(i).get('exclusions') as FormArray;
  }

  addExclusion(i: number) {
    this.getExclusions(i).push(this.fb.control(''));
  }

  removeExclusion(i: number, ei: number) {
    const exclusions = this.getExclusions(i);
    if (exclusions.length > 1) {
      exclusions.removeAt(ei);
    }
  }

  /* ---------- ITINERARY ---------- */

  getItineraryDays(batchIndex: number): FormArray {
    return this.batches.at(batchIndex).get('itineraryDays') as FormArray;
  }

  createDay(dayNumber: number): FormGroup {
    return this.fb.group({
      dayNumber: [dayNumber, Validators.required],
      title: ['', Validators.required],
      activities: this.fb.array([])
    });
  }

  addItineraryDay(batchIndex: number) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    const dayNumber = itineraryDays.length + 1;
    itineraryDays.push(this.createDay(dayNumber));
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

  getActivities(batchIndex: number, dayIndex: number): FormArray {
    return this.getItineraryDays(batchIndex).at(dayIndex).get('activities') as FormArray;
  }

  addActivity(batchIndex: number, dayIndex: number) {
    const activities = this.getActivities(batchIndex, dayIndex);
    activities.push(this.fb.group({
      activityTime: ['', Validators.required],
      activityText: ['', Validators.required]
    }));
  }

  removeActivity(batchIndex: number, dayIndex: number, actIndex: number) {
    this.getActivities(batchIndex, dayIndex).removeAt(actIndex);
  }

  /* ---------- THINGS TO CARRY ---------- */

  get thingsToCarry(): FormArray {
    return this.addTrekForm.get('thingsToCarry') as FormArray;
  }

  addThingToCarry() {
    this.thingsToCarry.push(this.fb.control(''));
  }

  removeThingToCarry(index: number) {
    this.thingsToCarry.removeAt(index);
  }

  /* ---------- IMPORTANT NOTES ---------- */

  get importantNotes(): FormArray {
    return this.addTrekForm.get('importantNotes') as FormArray;
  }

  addImportantNote() {
    this.importantNotes.push(this.fb.control(''));
  }

  removeImportantNote(index: number) {
    this.importantNotes.removeAt(index);
  }

  /* ---------- ELEVATION WAYPOINTS ---------- */

  get elevationWaypoints(): FormArray {
    return this.addTrekForm.get('elevationWaypoints') as FormArray;
  }

  createWaypoint(km: number, elevation: number, name: string, icon: string, note: string): FormGroup {
    return this.fb.group({
      km: [km, [Validators.required, Validators.min(0)]],
      elevation: [elevation, [Validators.required, Validators.min(0)]],
      name: [name, Validators.required],
      icon: [icon || 'bi bi-geo-alt-fill'],
      note: [note || '']
    });
  }

  addWaypoint() {
    const current = this.elevationWaypoints.length;
    const lastKm = current > 0 ? (this.elevationWaypoints.at(current - 1).get('km')?.value || 0) + 2 : 0;
    const lastElev = current > 0 ? (this.elevationWaypoints.at(current - 1).get('elevation')?.value || 1000) + 100 : 1000;
    this.elevationWaypoints.push(this.createWaypoint(lastKm, lastElev, `Checkpoint ${current + 1}`, 'bi bi-signpost-2', ''));
  }

  removeWaypoint(index: number) {
    if (this.elevationWaypoints.length > 2) {
      this.elevationWaypoints.removeAt(index);
    } else {
      this.notificationService.show('At least 2 checkpoints are recommended for elevation profile');
    }
  }

  asFormControl(ctrl: any): any {
    return ctrl;
  }

  /* ---------- IMAGES ---------- */

  async onCoverImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!this.isAcceptedImage(file)) {
        this.setStatus('Please select a valid image file (PNG, JPG, WEBP, etc.)', 'warning');
        return;
      }
      try {
        const optimized = await optimizeImageForUpload(file, 1920, 0.85);
        this.coverImage = optimized;
        const reader = new FileReader();
        reader.onload = () => {
          this.coverPreview = reader.result as string;
        };
        reader.readAsDataURL(optimized);
      } catch {
        this.coverImage = file;
        const reader = new FileReader();
        reader.onload = () => {
          this.coverPreview = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeCoverImage() {
    this.coverImage = null;
    this.coverPreview = null;
  }

  async onGalleryImagesChange(event: any) {
    const files: FileList = event.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.isAcceptedImage(file)) {
        try {
          const optimized = await optimizeImageForUpload(file, 1600, 0.82);
          this.galleryFiles.push(optimized);
          const reader = new FileReader();
          reader.onload = () => {
            this.galleryPreviews.push(reader.result as string);
          };
          reader.readAsDataURL(optimized);
        } catch {
          this.galleryFiles.push(file);
          const reader = new FileReader();
          reader.onload = () => {
            this.galleryPreviews.push(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removeGalleryImage(index: number) {
    this.galleryFiles.splice(index, 1);
    this.galleryPreviews.splice(index, 1);
  }

  private isAcceptedImage(file: File): boolean {
    const mime = String(file?.type || '').toLowerCase();
    if (mime.startsWith('image/')) return true;

    const name = String(file?.name || '').toLowerCase();
    const ext = name.includes('.') ? name.split('.').pop() || '' : '';
    const imageExt = new Set([
      'jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'bmp', 'svg',
      'tif', 'tiff', 'ico', 'heic', 'heif', 'jfif'
    ]);
    return imageExt.has(ext);
  }

  /* ---------- METRIC GETTERS FOR LIVE SIDEBAR/SUMMARY ---------- */

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

  get isBasicSectionComplete(): boolean {
    return !!(
      this.addTrekForm.get('name')?.valid &&
      this.addTrekForm.get('location')?.valid &&
      this.addTrekForm.get('difficulty')?.valid &&
      this.addTrekForm.get('category')?.valid
    );
  }

  /* ---------- SAVE ---------- */

  saveTrek() {
    this.submitted = true;
    if (this.addTrekForm.invalid) {
      this.addTrekForm.markAllAsTouched();
      this.setStatus('Please fill in all required fields marked in red.', 'danger');
      this.notificationService.show('Please complete all required fields.', 3500);
      return;
    }

    this.isSaving = true;
    const formVal = this.addTrekForm.value;

    this.trekService
      .createTrek(formVal, {
        coverImage: this.coverImage,
        gallery: this.galleryFiles
      })
      .subscribe({
        next: (response: any) => {
          this.isSaving = false;
          if (response?.success === true) {
            this.clearDraft();
            this.setStatus('Trek added successfully!', 'success');
            this.notificationService.show('Trek added successfully!');
            this.router.navigate(['/admin/treks/list']);
          } else {
            const message = response?.data?.message || 'Failed to create trek';
            this.setStatus(message, 'danger');
            this.notificationService.show(message, 3500);
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.setStatus('Server error while creating trek. Please check network and try again.', 'danger');
          this.notificationService.show('Server error. Please try again.', 3500);
        }
      });
  }

  private setupAutosave() {
    this.autosaveTimer?.unsubscribe?.();
    this.autosaveTimer = this.addTrekForm.valueChanges
      .pipe(debounceTime(900))
      .subscribe(() => this.saveDraft());
  }

  private saveDraft() {
    const draft = {
      formValue: this.addTrekForm.getRawValue(),
      savedAt: new Date().toISOString(),
    };
    sessionStorage.setItem(this.draftStorageKey, JSON.stringify(draft));
    this.lastAutoSavedAt = draft.savedAt;
  }

  private restoreDraft() {
    const raw = sessionStorage.getItem(this.draftStorageKey);
    if (!raw) return;
    try {
      const draft = JSON.parse(raw);
      if (draft?.formValue) {
        this.addTrekForm.patchValue(draft.formValue, { emitEvent: false });
      }
      this.lastAutoSavedAt = draft?.savedAt || null;
    } catch {
      sessionStorage.removeItem(this.draftStorageKey);
    }
  }

  private clearDraft() {
    sessionStorage.removeItem(this.draftStorageKey);
    this.lastAutoSavedAt = null;
  }

  isInvalid(controlName: string): boolean {
    const control = this.addTrekForm.get(controlName);
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
