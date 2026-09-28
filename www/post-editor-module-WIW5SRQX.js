import {
  PostEditor
} from "./chunk-SOBAQ654.js";
import {
  MediaService
} from "./chunk-BXPKFK6Z.js";
import {
  optimizeImageForUpload
} from "./chunk-3C62WDQD.js";
import {
  NotificationService
} from "./chunk-SAB4OUIS.js";
import {
  DropdownManagerService
} from "./chunk-2AIND2RX.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import {
  ActivatedRoute,
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  __async,
  __spreadValues,
  environment,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KQE4QDNK.js";

// src/app/blog/post-editor/post-editor.component.ts
function PostEditorComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, " Title is required ");
    \u0275\u0275elementEnd();
  }
}
function PostEditorComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, " Excerpt is required ");
    \u0275\u0275elementEnd();
  }
}
function PostEditorComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "button", 70);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("**", "**"));
    });
    \u0275\u0275element(3, "i", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("*", "*"));
    });
    \u0275\u0275element(5, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("~~", "~~"));
    });
    \u0275\u0275element(7, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "span", 76);
    \u0275\u0275elementStart(9, "div", 69)(10, "button", 77);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("## "));
    });
    \u0275\u0275element(11, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 79);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("### "));
    });
    \u0275\u0275element(13, "i", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "span", 76);
    \u0275\u0275elementStart(15, "div", 69)(16, "button", 81);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("- "));
    });
    \u0275\u0275element(17, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 83);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("1. "));
    });
    \u0275\u0275element(19, "i", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 85);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("> "));
    });
    \u0275\u0275element(21, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 87);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("```\n", "\n```"));
    });
    \u0275\u0275element(23, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "span", 76);
    \u0275\u0275elementStart(25, "div", 69)(26, "button", 89);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("[", "](https://)"));
    });
    \u0275\u0275element(27, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 91);
    \u0275\u0275listener("click", function PostEditorComponent_div_64_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.insertFormat("![Alt text](", ")"));
    });
    \u0275\u0275element(29, "i", 92);
    \u0275\u0275elementEnd()()();
  }
}
function PostEditorComponent_textarea_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "textarea", 93);
    \u0275\u0275text(1, "          ");
    \u0275\u0275elementEnd();
  }
}
function PostEditorComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "div", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ((tmp_3_0 = ctx_r2.postForm.get("content")) == null ? null : tmp_3_0.value) || "<em>No article content written yet...</em>", \u0275\u0275sanitizeHtml);
  }
}
function PostEditorComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275text(2, " Story content is required ");
    \u0275\u0275elementEnd();
  }
}
function PostEditorComponent_option_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275property("value", cat_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r4);
  }
}
function PostEditorComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "small");
    \u0275\u0275text(2, "Category is required");
    \u0275\u0275elementEnd()();
  }
}
function PostEditorComponent_ng_container_87_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    \u0275\u0275property("value", opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r5.label);
  }
}
function PostEditorComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PostEditorComponent_ng_container_87_option_1_Template, 2, 2, "option", 46);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.statusOptions);
  }
}
function PostEditorComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 97);
    \u0275\u0275text(1, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "option", 98);
    \u0275\u0275text(3, "Pending Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 99);
    \u0275\u0275text(5, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 100);
    \u0275\u0275text(7, "Archived");
    \u0275\u0275elementEnd();
  }
}
function PostEditorComponent_div_103_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function PostEditorComponent_div_103_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeTag(i_r7));
    });
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementEnd();
  }
}
function PostEditorComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "span", 102);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 103);
    \u0275\u0275template(4, PostEditorComponent_div_103_button_4_Template, 2, 0, "button", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", i_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tags.length > 1);
  }
}
function PostEditorComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "img", 108);
    \u0275\u0275elementStart(2, "div", 109)(3, "button", 110);
    \u0275\u0275listener("click", function PostEditorComponent_div_108_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      \u0275\u0275nextContext();
      const fileInput_r9 = \u0275\u0275reference(111);
      return \u0275\u0275resetView(fileInput_r9.click());
    });
    \u0275\u0275element(4, "i", 111);
    \u0275\u0275text(5, " Replace ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 112);
    \u0275\u0275listener("click", function PostEditorComponent_div_108_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(7, "i", 113);
    \u0275\u0275text(8, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getImageSrc(ctx_r2.imagePreview), \u0275\u0275sanitizeUrl);
  }
}
function PostEditorComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275listener("click", function PostEditorComponent_div_109_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      \u0275\u0275nextContext();
      const fileInput_r9 = \u0275\u0275reference(111);
      return \u0275\u0275resetView(fileInput_r9.click());
    });
    \u0275\u0275elementStart(1, "div", 115);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Upload Cover Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Click to browse JPG, PNG, WEBP up to 25MB");
    \u0275\u0275elementEnd()();
  }
}
var _PostEditorComponent = class _PostEditorComponent {
  constructor(fb, route, router, postEditorService, dropdownService, notify, media) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.postEditorService = postEditorService;
    this.dropdownService = dropdownService;
    this.notify = notify;
    this.media = media;
    this.postId = null;
    this.isEditMode = false;
    this.selectedFile = null;
    this.imagePreview = null;
    this.imageBaseUrl = (environment.mediaBaseUrl || "").replace(/\/?$/, "/");
    this.existingImageUrl = null;
    this.categories = [];
    this.statusOptions = [];
    this.isContentPreview = false;
    this.isLoading = false;
  }
  toggleContentPreview() {
    this.isContentPreview = !this.isContentPreview;
  }
  insertFormat(prefix, suffix = "") {
    const current = this.postForm.get("content")?.value || "";
    const updated = current ? `${current}
${prefix}sample text${suffix}` : `${prefix}sample text${suffix}`;
    this.postForm.patchValue({ content: updated });
  }
  ngOnInit() {
    this.initForm();
    this.loadManagedCategories();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.postId = String(params["id"]);
        this.isEditMode = true;
        this.loadPost(this.postId);
      }
    });
  }
  loadManagedCategories() {
    this.dropdownService.getGroupOptions("blogCategory").pipe(take(1)).subscribe((options) => {
      if (options.length > 0) {
        this.categories = options.map((o) => o.label);
      }
    });
    this.dropdownService.getGroupOptions("blogStatus").pipe(take(1)).subscribe((options) => {
      if (options.length > 0) {
        this.statusOptions = options;
      }
    });
  }
  initForm() {
    this.postForm = this.fb.group({
      title: ["", Validators.required],
      excerpt: ["", Validators.required],
      content: ["", Validators.required],
      category: ["", Validators.required],
      tags: this.fb.array([this.createTagControl()]),
      status: ["pending"],
      publishDate: [(/* @__PURE__ */ new Date()).toISOString(), Validators.required],
      author: ["Admin", Validators.required]
    });
  }
  get tags() {
    return this.postForm.get("tags");
  }
  createTagControl(value = "") {
    return this.fb.control(value);
  }
  addTag() {
    this.tags.push(this.createTagControl());
  }
  removeTag(index) {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
    }
  }
  loadPost(id) {
    this.postEditorService.getPost(id).subscribe({
      next: (post) => {
        while (this.tags.length) {
          this.tags.removeAt(0);
        }
        if (post.tags && post.tags.length > 0) {
          post.tags.forEach((tag) => {
            this.tags.push(this.createTagControl(tag));
          });
        } else {
          this.tags.push(this.createTagControl());
        }
        if (post.featured_image) {
          this.existingImageUrl = post.featured_image;
          this.imagePreview = post.featured_image;
        }
        this.postForm.patchValue({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          status: post.status,
          publishDate: post.published_at || (/* @__PURE__ */ new Date()).toISOString(),
          author: post.author_id || "Admin"
        });
      },
      error: (err) => {
        this.showToast("Failed to load post", "danger");
      }
    });
  }
  loadCategories() {
    this.postEditorService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats.map((c) => c.name);
      },
      error: (err) => {
      }
    });
  }
  onImageSelect(event) {
    return __async(this, null, function* () {
      const file = event.target.files[0];
      if (file) {
        if (!this.isAcceptedImage(file)) {
          this.showToast("Please select an image file", "warning");
          return;
        }
        const maxSize = 25 * 1024 * 1024;
        if (file.size > maxSize) {
          this.showToast("Image size should be less than 25MB", "warning");
          return;
        }
        const optimized = yield optimizeImageForUpload(file);
        this.selectedFile = optimized;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(optimized);
        this.showToast("HD Image optimized and selected", "success");
      }
    });
  }
  isAcceptedImage(file) {
    const mime = String(file?.type || "").toLowerCase();
    if (mime.startsWith("image/"))
      return true;
    const name = String(file?.name || "").toLowerCase();
    const ext = name.includes(".") ? name.split(".").pop() || "" : "";
    const imageExt = /* @__PURE__ */ new Set([
      "jpg",
      "jpeg",
      "png",
      "gif",
      "webp",
      "avif",
      "bmp",
      "svg",
      "tif",
      "tiff",
      "ico",
      "heic",
      "heif",
      "jfif"
    ]);
    return imageExt.has(ext);
  }
  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.existingImageUrl = null;
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = "";
    }
    this.showToast("Image removed", "success");
  }
  getImageSrc(src) {
    if (!src)
      return "";
    return this.media.resolve(src);
  }
  publish() {
    return __async(this, null, function* () {
      if (this.postForm.invalid) {
        Object.keys(this.postForm.controls).forEach((key) => {
          this.postForm.get(key)?.markAsTouched();
        });
        this.showToast("Please fill all required fields", "warning");
        return;
      }
      this.postForm.patchValue({ status: "published" });
      yield this.savePost();
    });
  }
  savePost() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const formValue = __spreadValues({}, this.postForm.value);
      formValue.tags = formValue.tags.filter((tag) => tag && tag.trim() !== "");
      const formData = new FormData();
      formData.append("title", formValue.title);
      formData.append("excerpt", formValue.excerpt);
      formData.append("content", formValue.content);
      formData.append("category", formValue.category);
      formData.append("status", formValue.status);
      formData.append("publishDate", formValue.publishDate);
      formData.append("author", formValue.author);
      formData.append("tags", JSON.stringify(formValue.tags));
      if (this.selectedFile) {
        formData.append("image", this.selectedFile, this.selectedFile.name);
      } else if (this.existingImageUrl && this.imagePreview) {
        formData.append("existingImageUrl", this.existingImageUrl);
      }
      this.postEditorService.savePost(this.postId, formData).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.showToast("Post saved successfully!", "success");
          this.router.navigate(["/admin/blog/posts"]);
        },
        error: (err) => {
          this.isLoading = false;
          this.showToast("Failed to save post", "danger");
        }
      });
    });
  }
  showToast(message, color = "success") {
    return __async(this, null, function* () {
      const toast = this.notify.show("Operation completed.");
    });
  }
};
_PostEditorComponent.\u0275fac = function PostEditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostEditorComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PostEditor), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MediaService));
};
_PostEditorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostEditorComponent, selectors: [["app-post-editor"]], decls: 124, vars: 22, consts: [["defaultBlogStatuses", ""], ["fileInput", ""], [1, "editor-page"], [1, "editor-container"], [1, "editor-hero"], [1, "hero-left"], [1, "crumb-row"], ["routerLink", "/admin/blog/posts", 1, "crumb-link"], [1, "bi", "bi-arrow-left"], [1, "crumb-sep"], [1, "crumb-curr"], [1, "page-title"], [1, "page-subtitle"], [1, "hero-actions"], ["type", "button", "routerLink", "/admin/blog/posts", 1, "btn-app", "secondary"], [1, "bi", "bi-x-lg"], ["type", "button", 1, "btn-app", "primary", 3, "click"], [1, "bi", "bi-cloud-arrow-up"], [1, "editor-layout", 3, "formGroup"], [1, "editor-main"], [1, "editor-card"], [1, "field-head"], [1, "field-title"], [1, "req"], [1, "char-count"], ["type", "text", "formControlName", "title", "placeholder", "e.g. 10 Essential Safety Tips for Monsoon Trekking in Western Ghats", 1, "app-input", "title-input"], ["class", "field-error", 4, "ngIf"], ["formControlName", "excerpt", "rows", "3", "placeholder", "Write a concise, engaging summary to appear on search results, cards, and social shares...", 1, "app-textarea"], [1, "editor-card", "story-card"], [1, "card-head-row"], [1, "field-head-inline"], [1, "field-hint"], [1, "editor-mode-toggle"], ["type", "button", 1, "editor-mode-btn", 3, "click"], [1, "bi", "bi-code-square"], [1, "bi", "bi-eye"], ["class", "rich-toolbar", 4, "ngIf"], ["formControlName", "content", "rows", "18", "class", "app-textarea story-textarea", "placeholder", "Write your article narrative here. Use headers, bullet points, quotes, and images to make it engaging...", 4, "ngIf"], ["class", "content-preview-pane", 4, "ngIf"], [1, "editor-side"], [1, "editor-card", "side-card"], [1, "card-section-title"], [1, "bi", "bi-sliders2"], [1, "field-group"], ["formControlName", "category", 1, "app-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "status", 1, "app-select"], [4, "ngIf", "ngIfElse"], ["type", "text", "formControlName", "author", "placeholder", "e.g. Lead Guide Jagadish", 1, "app-input"], [1, "bi", "bi-tags"], ["type", "button", 1, "btn-text-sm", 3, "click"], [1, "bi", "bi-plus-circle"], ["formArrayName", "tags", 1, "tags-manager"], ["class", "tag-input-row", 4, "ngFor", "ngForOf"], [1, "bi", "bi-image"], ["class", "image-preview-box", 4, "ngIf"], ["class", "upload-dropzone", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "img-rec-note"], [1, "bi", "bi-info-circle"], [1, "side-actions-card"], ["type", "button", 1, "btn-app", "primary", "publish-btn", 3, "click"], [1, "bi", "bi-send-fill"], ["type", "button", 1, "btn-app", "secondary", "draft-btn", 3, "click"], [1, "bi", "bi-file-earmark-arrow-up"], [1, "field-error"], [1, "bi", "bi-exclamation-circle"], [1, "rich-toolbar"], [1, "tool-btn-group"], ["type", "button", "title", "Bold", 1, "rt-btn", 3, "click"], [1, "bi", "bi-type-bold"], ["type", "button", "title", "Italic", 1, "rt-btn", 3, "click"], [1, "bi", "bi-type-italic"], ["type", "button", "title", "Strikethrough", 1, "rt-btn", 3, "click"], [1, "bi", "bi-type-strikethrough"], [1, "rt-divider"], ["type", "button", "title", "Heading 2", 1, "rt-btn", 3, "click"], [1, "bi", "bi-type-h2"], ["type", "button", "title", "Heading 3", 1, "rt-btn", 3, "click"], [1, "bi", "bi-type-h3"], ["type", "button", "title", "Bullet List", 1, "rt-btn", 3, "click"], [1, "bi", "bi-list-ul"], ["type", "button", "title", "Numbered List", 1, "rt-btn", 3, "click"], [1, "bi", "bi-list-ol"], ["type", "button", "title", "Quote", 1, "rt-btn", 3, "click"], [1, "bi", "bi-quote"], ["type", "button", "title", "Code Block", 1, "rt-btn", 3, "click"], [1, "bi", "bi-code-slash"], ["type", "button", "title", "Insert Link", 1, "rt-btn", 3, "click"], [1, "bi", "bi-link-45deg"], ["type", "button", "title", "Insert Image Link", 1, "rt-btn", 3, "click"], [1, "bi", "bi-card-image"], ["formControlName", "content", "rows", "18", "placeholder", "Write your article narrative here. Use headers, bullet points, quotes, and images to make it engaging...", 1, "app-textarea", "story-textarea"], [1, "content-preview-pane"], [1, "preview-story-body", 3, "innerHTML"], [3, "value"], ["value", "draft"], ["value", "pending"], ["value", "published"], ["value", "archived"], [1, "tag-input-row"], [1, "tag-hash"], ["type", "text", "placeholder", "Tag name", 1, "app-input", "tag-field", 3, "formControlName"], ["type", "button", "class", "tag-del-btn", "title", "Remove tag", 3, "click", 4, "ngIf"], ["type", "button", "title", "Remove tag", 1, "tag-del-btn", 3, "click"], [1, "bi", "bi-x"], [1, "image-preview-box"], ["loading", "lazy", "decoding", "async", "alt", "Preview", 3, "src"], [1, "img-preview-actions"], ["type", "button", 1, "btn-app", "secondary", "sm", 3, "click"], [1, "bi", "bi-arrow-repeat"], ["type", "button", 1, "btn-app", "danger", "sm", 3, "click"], [1, "bi", "bi-trash3"], [1, "upload-dropzone", 3, "click"], [1, "upload-icon"]], template: function PostEditorComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "header", 4)(3, "div", 5)(4, "div", 6)(5, "a", 7);
    \u0275\u0275element(6, "i", 8);
    \u0275\u0275text(7, " Blog Posts ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h1", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 12);
    \u0275\u0275text(15, "Craft compelling trek experiences, nature guides, and updates for travelers.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 16);
    \u0275\u0275listener("click", function PostEditorComponent_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.savePost());
    });
    \u0275\u0275element(22, "i", 17);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Save Changes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "form", 18)(26, "section", 19)(27, "div", 20)(28, "div", 21)(29, "label", 22);
    \u0275\u0275text(30, "Article Title ");
    \u0275\u0275elementStart(31, "span", 23);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "span", 24);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 25);
    \u0275\u0275template(36, PostEditorComponent_div_36_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20)(38, "div", 21)(39, "label", 22);
    \u0275\u0275text(40, "Summary & Excerpt ");
    \u0275\u0275elementStart(41, "span", 23);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "span", 24);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "textarea", 27);
    \u0275\u0275text(46, "          ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, PostEditorComponent_div_47_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "label", 22);
    \u0275\u0275text(52, "Full Story Content ");
    \u0275\u0275elementStart(53, "span", 23);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "span", 31);
    \u0275\u0275text(56, "Supports Markdown & HTML");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 32)(58, "button", 33);
    \u0275\u0275listener("click", function PostEditorComponent_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.isContentPreview = false);
    });
    \u0275\u0275element(59, "i", 34);
    \u0275\u0275text(60, " Editor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 33);
    \u0275\u0275listener("click", function PostEditorComponent_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.isContentPreview = true);
    });
    \u0275\u0275element(62, "i", 35);
    \u0275\u0275text(63, " Live Preview ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(64, PostEditorComponent_div_64_Template, 30, 0, "div", 36)(65, PostEditorComponent_textarea_65_Template, 2, 0, "textarea", 37)(66, PostEditorComponent_div_66_Template, 2, 1, "div", 38)(67, PostEditorComponent_div_67_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "aside", 39)(69, "div", 40)(70, "h3", 41);
    \u0275\u0275element(71, "i", 42);
    \u0275\u0275text(72, " Settings & Taxonomy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 43)(74, "label");
    \u0275\u0275text(75, "Category ");
    \u0275\u0275elementStart(76, "span", 23);
    \u0275\u0275text(77, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "select", 44)(79, "option", 45);
    \u0275\u0275text(80, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, PostEditorComponent_option_81_Template, 2, 2, "option", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, PostEditorComponent_div_82_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 43)(84, "label");
    \u0275\u0275text(85, "Publication Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "select", 47);
    \u0275\u0275template(87, PostEditorComponent_ng_container_87_Template, 2, 1, "ng-container", 48)(88, PostEditorComponent_ng_template_88_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 43)(91, "label");
    \u0275\u0275text(92, "Author Display");
    \u0275\u0275elementEnd();
    \u0275\u0275element(93, "input", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 40)(95, "div", 29)(96, "h3", 41);
    \u0275\u0275element(97, "i", 50);
    \u0275\u0275text(98, " Tags ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 51);
    \u0275\u0275listener("click", function PostEditorComponent_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addTag());
    });
    \u0275\u0275element(100, "i", 52);
    \u0275\u0275text(101, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 53);
    \u0275\u0275template(103, PostEditorComponent_div_103_Template, 5, 2, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 40)(105, "h3", 41);
    \u0275\u0275element(106, "i", 55);
    \u0275\u0275text(107, " Featured Image ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(108, PostEditorComponent_div_108_Template, 9, 1, "div", 56)(109, PostEditorComponent_div_109_Template, 7, 0, "div", 57);
    \u0275\u0275elementStart(110, "input", 58, 1);
    \u0275\u0275listener("change", function PostEditorComponent_Template_input_change_110_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "p", 59);
    \u0275\u0275element(113, "i", 60);
    \u0275\u0275text(114, " Recommended aspect ratio: 16:9 (1200x675px) for sharp social cards. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 61)(116, "button", 62);
    \u0275\u0275listener("click", function PostEditorComponent_Template_button_click_116_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.publish());
    });
    \u0275\u0275element(117, "i", 63);
    \u0275\u0275elementStart(118, "span");
    \u0275\u0275text(119, "Publish Now");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "button", 64);
    \u0275\u0275listener("click", function PostEditorComponent_Template_button_click_120_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.savePost());
    });
    \u0275\u0275element(121, "i", 65);
    \u0275\u0275elementStart(122, "span");
    \u0275\u0275text(123, "Save as Draft");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_14_0;
    let tmp_16_0;
    const defaultBlogStatuses_r11 = \u0275\u0275reference(89);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Story" : "New Story");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Article" : "Draft New Article");
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx.postForm);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (((tmp_5_0 = ctx.postForm.get("title")) == null ? null : tmp_5_0.value) || "").length, "/120");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.postForm.get("title")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.postForm.get("title")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (((tmp_7_0 = ctx.postForm.get("excerpt")) == null ? null : tmp_7_0.value) || "").length, "/300");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.postForm.get("excerpt")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.postForm.get("excerpt")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275classProp("active", !ctx.isContentPreview);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.isContentPreview);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx.isContentPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isContentPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isContentPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.postForm.get("content")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.postForm.get("content")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx.postForm.get("category")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.postForm.get("category")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.statusOptions.length > 0)("ngIfElse", defaultBlogStatuses_r11);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx.tags.controls);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.imagePreview);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, FormArrayName, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.editor-page[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.editor-container[_ngcontent-%COMP%] {\n  padding: 20px 24px 60px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.editor-hero[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  margin-bottom: 24px;\n}\n.editor-hero[_ngcontent-%COMP%]   .crumb-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  margin-bottom: 6px;\n}\n.editor-hero[_ngcontent-%COMP%]   .crumb-row[_ngcontent-%COMP%]   .crumb-link[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.editor-hero[_ngcontent-%COMP%]   .crumb-row[_ngcontent-%COMP%]   .crumb-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.editor-hero[_ngcontent-%COMP%]   .crumb-row[_ngcontent-%COMP%]   .crumb-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.editor-hero[_ngcontent-%COMP%]   .crumb-row[_ngcontent-%COMP%]   .crumb-curr[_ngcontent-%COMP%] {\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-hero[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  letter-spacing: -0.02em;\n}\n.editor-hero[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.88rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.editor-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 24px;\n  align-items: start;\n}\n.editor-main[_ngcontent-%COMP%], \n.editor-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.editor-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 20px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.editor-card[_ngcontent-%COMP%]   .field-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-card[_ngcontent-%COMP%]   .field-head[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-card[_ngcontent-%COMP%]   .field-title[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.editor-card[_ngcontent-%COMP%]   .field-title[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.editor-card[_ngcontent-%COMP%]   .card-section-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.editor-card[_ngcontent-%COMP%]   .card-section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--app-accent, #1d7a6d);\n}\n.app-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n  background: #f8fafc;\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-input.title-input[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  padding: 12px 16px;\n}\n.app-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: var(--app-ink, #0f172a);\n  background: #f8fafc;\n  outline: none;\n  resize: vertical;\n  transition: all 0.15s ease;\n}\n.app-textarea[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-textarea.story-textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  min-height: 380px;\n}\n.app-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  background: #f8fafc;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.app-select[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #dc2626;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.card-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.field-head-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.field-head-inline[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 2px;\n}\n.editor-mode-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  transition: all 0.15s ease;\n}\n.editor-mode-btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.rich-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 6px 10px;\n  flex-wrap: wrap;\n}\n.rich-toolbar[_ngcontent-%COMP%]   .tool-btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.rt-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #334155;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rt-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: var(--app-accent, #1d7a6d);\n}\n.rt-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 18px;\n  background: #cbd5e1;\n  margin: 0 6px;\n}\n.content-preview-pane[_ngcontent-%COMP%] {\n  min-height: 380px;\n  background: #fdfbf8;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 20px;\n  font-size: 0.95rem;\n  line-height: 1.7;\n  overflow-y: auto;\n}\n.preview-story-body[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  color: var(--app-ink, #0f172a);\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.field-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.btn-text-sm[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: var(--app-accent, #1d7a6d);\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n}\n.btn-text-sm[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tags-manager[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tag-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tag-input-row[_ngcontent-%COMP%]   .tag-hash[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--app-ink-muted, #64748b);\n}\n.tag-input-row[_ngcontent-%COMP%]   .tag-del-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.tag-input-row[_ngcontent-%COMP%]   .tag-del-btn[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.image-preview-box[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--app-border, #e2e8f0);\n  display: flex;\n  flex-direction: column;\n}\n.image-preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n}\n.image-preview-box[_ngcontent-%COMP%]   .img-preview-actions[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.upload-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 24px 16px;\n  text-align: center;\n  background: #f8fafc;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s ease;\n}\n.upload-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.04);\n}\n.upload-dropzone[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--app-accent, #1d7a6d);\n}\n.upload-dropzone[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n}\n.upload-dropzone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.img-rec-note[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #64748b);\n  line-height: 1.4;\n}\n.side-actions-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.side-actions-card[_ngcontent-%COMP%]   .publish-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 12px;\n  font-size: 0.95rem;\n}\n.side-actions-card[_ngcontent-%COMP%]   .draft-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 10px;\n}\n@media (max-width: 1024px) {\n  .editor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .editor-container[_ngcontent-%COMP%] {\n    padding: 14px 12px 40px;\n  }\n  .editor-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n/*# sourceMappingURL=post-editor.component.css.map */"] });
var PostEditorComponent = _PostEditorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostEditorComponent, [{
    type: Component,
    args: [{ selector: "app-post-editor", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="editor-page">
  <div class="editor-container">
    <!-- HERO BAR -->
    <header class="editor-hero">
      <div class="hero-left">
        <div class="crumb-row">
          <a routerLink="/admin/blog/posts" class="crumb-link">
            <i class="bi bi-arrow-left"></i> Blog Posts
          </a>
          <span class="crumb-sep">/</span>
          <span class="crumb-curr">{{ isEditMode ? 'Edit Story' : 'New Story' }}</span>
        </div>
        <h1 class="page-title">{{ isEditMode ? 'Edit Article' : 'Draft New Article' }}</h1>
        <p class="page-subtitle">Craft compelling trek experiences, nature guides, and updates for travelers.</p>
      </div>

      <div class="hero-actions">
        <button type="button" class="btn-app secondary" routerLink="/admin/blog/posts">
          <i class="bi bi-x-lg"></i>
          <span>Cancel</span>
        </button>
        <button type="button" class="btn-app primary" (click)="savePost()">
          <i class="bi bi-cloud-arrow-up"></i>
          <span>Save Changes</span>
        </button>
      </div>
    </header>

    <!-- MAIN FORM -->
    <form [formGroup]="postForm" class="editor-layout">
      <!-- LEFT / MAIN CONTENT AREA -->
      <section class="editor-main">
        <!-- TITLE CARD -->
        <div class="editor-card">
          <div class="field-head">
            <label class="field-title">Article Title <span class="req">*</span></label>
            <span class="char-count">{{ (postForm.get('title')?.value || '').length }}/120</span>
          </div>
          <input 
            type="text" 
            formControlName="title" 
            class="app-input title-input" 
            placeholder="e.g. 10 Essential Safety Tips for Monsoon Trekking in Western Ghats" 
          />
          <div class="field-error" *ngIf="postForm.get('title')?.invalid && postForm.get('title')?.touched">
            <i class="bi bi-exclamation-circle"></i> Title is required
          </div>
        </div>

        <!-- EXCERPT CARD -->
        <div class="editor-card">
          <div class="field-head">
            <label class="field-title">Summary & Excerpt <span class="req">*</span></label>
            <span class="char-count">{{ (postForm.get('excerpt')?.value || '').length }}/300</span>
          </div>
          <textarea 
            formControlName="excerpt" 
            rows="3" 
            class="app-textarea" 
            placeholder="Write a concise, engaging summary to appear on search results, cards, and social shares...">
          </textarea>
          <div class="field-error" *ngIf="postForm.get('excerpt')?.invalid && postForm.get('excerpt')?.touched">
            <i class="bi bi-exclamation-circle"></i> Excerpt is required
          </div>
        </div>

        <!-- RICH STORY BODY -->
        <div class="editor-card story-card">
          <div class="card-head-row">
            <div class="field-head-inline">
              <label class="field-title">Full Story Content <span class="req">*</span></label>
              <span class="field-hint">Supports Markdown & HTML</span>
            </div>
            
            <div class="editor-mode-toggle">
              <button class="editor-mode-btn" [class.active]="!isContentPreview" type="button" (click)="isContentPreview = false">
                <i class="bi bi-code-square"></i> Editor
              </button>
              <button class="editor-mode-btn" [class.active]="isContentPreview" type="button" (click)="isContentPreview = true">
                <i class="bi bi-eye"></i> Live Preview
              </button>
            </div>
          </div>

          <!-- Formatting Toolbar -->
          <div class="rich-toolbar" *ngIf="!isContentPreview">
            <div class="tool-btn-group">
              <button type="button" class="rt-btn" (click)="insertFormat('**', '**')" title="Bold"><i class="bi bi-type-bold"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('*', '*')" title="Italic"><i class="bi bi-type-italic"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('~~', '~~')" title="Strikethrough"><i class="bi bi-type-strikethrough"></i></button>
            </div>
            <span class="rt-divider"></span>
            <div class="tool-btn-group">
              <button type="button" class="rt-btn" (click)="insertFormat('## ')" title="Heading 2"><i class="bi bi-type-h2"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('### ')" title="Heading 3"><i class="bi bi-type-h3"></i></button>
            </div>
            <span class="rt-divider"></span>
            <div class="tool-btn-group">
              <button type="button" class="rt-btn" (click)="insertFormat('- ')" title="Bullet List"><i class="bi bi-list-ul"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('1. ')" title="Numbered List"><i class="bi bi-list-ol"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('> ')" title="Quote"><i class="bi bi-quote"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('\`\`\`\\n', '\\n\`\`\`')" title="Code Block"><i class="bi bi-code-slash"></i></button>
            </div>
            <span class="rt-divider"></span>
            <div class="tool-btn-group">
              <button type="button" class="rt-btn" (click)="insertFormat('[', '](https://)')" title="Insert Link"><i class="bi bi-link-45deg"></i></button>
              <button type="button" class="rt-btn" (click)="insertFormat('![Alt text](', ')')" title="Insert Image Link"><i class="bi bi-card-image"></i></button>
            </div>
          </div>

          <!-- Write Mode -->
          <textarea
            *ngIf="!isContentPreview"
            formControlName="content"
            rows="18"
            class="app-textarea story-textarea"
            placeholder="Write your article narrative here. Use headers, bullet points, quotes, and images to make it engaging...">
          </textarea>

          <!-- Live Preview Mode -->
          <div *ngIf="isContentPreview" class="content-preview-pane">
            <div class="preview-story-body" [innerHTML]="postForm.get('content')?.value || '<em>No article content written yet...</em>'"></div>
          </div>

          <div class="field-error" *ngIf="postForm.get('content')?.invalid && postForm.get('content')?.touched">
            <i class="bi bi-exclamation-circle"></i> Story content is required
          </div>
        </div>
      </section>

      <!-- RIGHT / SIDEBAR SETTINGS -->
      <aside class="editor-side">
        <!-- PUBLISH STATUS & CATEGORY -->
        <div class="editor-card side-card">
          <h3 class="card-section-title">
            <i class="bi bi-sliders2"></i> Settings & Taxonomy
          </h3>

          <div class="field-group">
            <label>Category <span class="req">*</span></label>
            <select formControlName="category" class="app-select">
              <option value="" disabled>Select category</option>
              <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
            </select>
            <div class="field-error" *ngIf="postForm.get('category')?.invalid && postForm.get('category')?.touched">
              <small>Category is required</small>
            </div>
          </div>

          <div class="field-group">
            <label>Publication Status</label>
            <select formControlName="status" class="app-select">
              <ng-container *ngIf="statusOptions.length > 0; else defaultBlogStatuses">
                <option *ngFor="let opt of statusOptions" [value]="opt.value">{{ opt.label }}</option>
              </ng-container>
              <ng-template #defaultBlogStatuses>
                <option value="draft">Draft</option>
                <option value="pending">Pending Approval</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </ng-template>
            </select>
          </div>

          <div class="field-group">
            <label>Author Display</label>
            <input type="text" formControlName="author" class="app-input" placeholder="e.g. Lead Guide Jagadish" />
          </div>
        </div>

        <!-- TAGS MANAGER -->
        <div class="editor-card side-card">
          <div class="card-head-row">
            <h3 class="card-section-title">
              <i class="bi bi-tags"></i> Tags
            </h3>
            <button type="button" class="btn-text-sm" (click)="addTag()">
              <i class="bi bi-plus-circle"></i> Add
            </button>
          </div>

          <div formArrayName="tags" class="tags-manager">
            <div *ngFor="let tag of tags.controls; let i = index" class="tag-input-row">
              <span class="tag-hash">#</span>
              <input type="text" [formControlName]="i" class="app-input tag-field" placeholder="Tag name" />
              <button type="button" class="tag-del-btn" (click)="removeTag(i)" *ngIf="tags.length > 1" title="Remove tag">
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- FEATURED IMAGE UPLOAD -->
        <div class="editor-card side-card">
          <h3 class="card-section-title">
            <i class="bi bi-image"></i> Featured Image
          </h3>

          <div *ngIf="imagePreview" class="image-preview-box">
            <img loading="lazy" decoding="async" [src]="getImageSrc(imagePreview)" alt="Preview" />
            <div class="img-preview-actions">
              <button class="btn-app secondary sm" type="button" (click)="fileInput.click()">
                <i class="bi bi-arrow-repeat"></i> Replace
              </button>
              <button class="btn-app danger sm" type="button" (click)="removeImage()">
                <i class="bi bi-trash3"></i> Remove
              </button>
            </div>
          </div>

          <div *ngIf="!imagePreview" class="upload-dropzone" (click)="fileInput.click()">
            <div class="upload-icon">
              <i class="bi bi-cloud-arrow-up"></i>
            </div>
            <strong>Upload Cover Image</strong>
            <span>Click to browse JPG, PNG, WEBP up to 25MB</span>
          </div>

          <input #fileInput type="file" accept="image/*" hidden (change)="onImageSelect($event)" />

          <p class="img-rec-note">
            <i class="bi bi-info-circle"></i> Recommended aspect ratio: 16:9 (1200x675px) for sharp social cards.
          </p>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="side-actions-card">
          <button class="btn-app primary publish-btn" type="button" (click)="publish()">
            <i class="bi bi-send-fill"></i>
            <span>Publish Now</span>
          </button>
          <button class="btn-app secondary draft-btn" type="button" (click)="savePost()">
            <i class="bi bi-file-earmark-arrow-up"></i>
            <span>Save as Draft</span>
          </button>
        </div>
      </aside>
    </form>
  </div>
</div>`, styles: ["/* src/app/blog/post-editor/post-editor.component.scss */\n:host {\n  display: block;\n}\n.editor-page {\n  --background: transparent;\n}\n.editor-container {\n  padding: 20px 24px 60px;\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.editor-hero {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  margin-bottom: 24px;\n}\n.editor-hero .crumb-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  margin-bottom: 6px;\n}\n.editor-hero .crumb-row .crumb-link {\n  color: var(--app-accent, #1d7a6d);\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.editor-hero .crumb-row .crumb-link:hover {\n  text-decoration: underline;\n}\n.editor-hero .crumb-row .crumb-sep {\n  color: #cbd5e1;\n}\n.editor-hero .crumb-row .crumb-curr {\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-hero .page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--app-ink, #0f172a);\n  letter-spacing: -0.02em;\n}\n.editor-hero .page-subtitle {\n  margin: 4px 0 0;\n  font-size: 0.88rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-hero .hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.editor-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 24px;\n  align-items: start;\n}\n.editor-main,\n.editor-side {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.editor-card {\n  background: #ffffff;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: var(--app-radius-lg, 16px);\n  padding: 20px;\n  box-shadow: var(--app-shadow-soft, 0 4px 16px rgba(0, 0, 0, 0.04));\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.editor-card .field-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.editor-card .field-head .char-count {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-card .field-title {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.editor-card .field-title .req {\n  color: #dc2626;\n}\n.editor-card .card-section-title {\n  margin: 0 0 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.editor-card .card-section-title i {\n  color: var(--app-accent, #1d7a6d);\n}\n.app-input {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: var(--app-ink, #0f172a);\n  background: #f8fafc;\n  outline: none;\n  transition: all 0.15s ease;\n}\n.app-input:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-input.title-input {\n  font-size: 1.15rem;\n  font-weight: 700;\n  padding: 12px 16px;\n}\n.app-textarea {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 12px 14px;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: var(--app-ink, #0f172a);\n  background: #f8fafc;\n  outline: none;\n  resize: vertical;\n  transition: all 0.15s ease;\n}\n.app-textarea:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.12);\n}\n.app-textarea.story-textarea {\n  font-family: inherit;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  min-height: 380px;\n}\n.app-select {\n  width: 100%;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n  background: #f8fafc;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.app-select:focus {\n  background: #ffffff;\n  border-color: var(--app-accent, #1d7a6d);\n}\n.field-error {\n  font-size: 0.78rem;\n  color: #dc2626;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.card-head-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.field-head-inline {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.field-head-inline .field-hint {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.editor-mode-toggle {\n  display: flex;\n  background: #f1f5f9;\n  border-radius: 8px;\n  padding: 2px;\n}\n.editor-mode-btn {\n  border: none;\n  background: transparent;\n  padding: 4px 12px;\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #64748b;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  transition: all 0.15s ease;\n}\n.editor-mode-btn.active {\n  background: #ffffff;\n  color: var(--app-accent, #1d7a6d);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.rich-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #f8fafc;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 6px 10px;\n  flex-wrap: wrap;\n}\n.rich-toolbar .tool-btn-group {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.rt-btn {\n  background: transparent;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #334155;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rt-btn:hover {\n  background: #e2e8f0;\n  color: var(--app-accent, #1d7a6d);\n}\n.rt-divider {\n  width: 1px;\n  height: 18px;\n  background: #cbd5e1;\n  margin: 0 6px;\n}\n.content-preview-pane {\n  min-height: 380px;\n  background: #fdfbf8;\n  border: 1px solid var(--app-border, #e2e8f0);\n  border-radius: 10px;\n  padding: 20px;\n  font-size: 0.95rem;\n  line-height: 1.7;\n  overflow-y: auto;\n}\n.preview-story-body {\n  white-space: pre-wrap;\n  color: var(--app-ink, #0f172a);\n}\n.field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.field-group label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--app-ink, #0f172a);\n}\n.field-group label .req {\n  color: #dc2626;\n}\n.btn-text-sm {\n  border: none;\n  background: transparent;\n  color: var(--app-accent, #1d7a6d);\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 0;\n}\n.btn-text-sm:hover {\n  text-decoration: underline;\n}\n.tags-manager {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tag-input-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tag-input-row .tag-hash {\n  font-weight: 800;\n  color: var(--app-ink-muted, #64748b);\n}\n.tag-input-row .tag-del-btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: #fee2e2;\n  color: #dc2626;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.tag-input-row .tag-del-btn:hover {\n  background: #fecaca;\n}\n.image-preview-box {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid var(--app-border, #e2e8f0);\n  display: flex;\n  flex-direction: column;\n}\n.image-preview-box img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n}\n.image-preview-box .img-preview-actions {\n  padding: 10px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.upload-dropzone {\n  border: 2px dashed #cbd5e1;\n  border-radius: 12px;\n  padding: 24px 16px;\n  text-align: center;\n  background: #f8fafc;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.15s ease;\n}\n.upload-dropzone:hover {\n  border-color: var(--app-accent, #1d7a6d);\n  background: rgba(29, 122, 109, 0.04);\n}\n.upload-dropzone .upload-icon {\n  font-size: 2rem;\n  color: var(--app-accent, #1d7a6d);\n}\n.upload-dropzone strong {\n  font-size: 0.88rem;\n  color: var(--app-ink, #0f172a);\n}\n.upload-dropzone span {\n  font-size: 0.75rem;\n  color: var(--app-ink-muted, #64748b);\n}\n.img-rec-note {\n  margin: 4px 0 0;\n  font-size: 0.74rem;\n  color: var(--app-ink-muted, #64748b);\n  line-height: 1.4;\n}\n.side-actions-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.side-actions-card .publish-btn {\n  width: 100%;\n  justify-content: center;\n  padding: 12px;\n  font-size: 0.95rem;\n}\n.side-actions-card .draft-btn {\n  width: 100%;\n  justify-content: center;\n  padding: 10px;\n}\n@media (max-width: 1024px) {\n  .editor-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .editor-container {\n    padding: 14px 12px 40px;\n  }\n  .editor-hero {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n/*# sourceMappingURL=post-editor.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: PostEditor }, { type: DropdownManagerService }, { type: NotificationService }, { type: MediaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostEditorComponent, { className: "PostEditorComponent", filePath: "src/app/blog/post-editor/post-editor.component.ts", lineNumber: 22 });
})();

// src/app/blog/post-editor/post-editor-module.ts
var routes = [
  {
    path: "",
    // For creating new posts: /admin/blog/editor
    component: PostEditorComponent
  },
  {
    path: ":id",
    // For editing posts: /admin/blog/editor/123
    component: PostEditorComponent
  }
];
var _PostEditorModule = class _PostEditorModule {
};
_PostEditorModule.\u0275fac = function PostEditorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostEditorModule)();
};
_PostEditorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PostEditorModule });
_PostEditorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, PostEditorComponent, RouterModule.forChild(routes)] });
var PostEditorModule = _PostEditorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostEditorModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        PostEditorComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  PostEditorModule
};
//# sourceMappingURL=post-editor-module-WIW5SRQX.js.map
