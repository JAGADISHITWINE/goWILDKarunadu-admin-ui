import {
  EncryptionService,
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  environment,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KQE4QDNK.js";

// src/app/blog/post-editor.ts
var _PostEditor = class _PostEditor {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = environment.baseUrl;
  }
  // Get single post by ID
  getPost(id) {
    return this.http.get(`${this.API}/postEditor/${id}`).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
  // Get all posts
  getAllPosts() {
    return this.http.get(`${this.API}/postEditor`).pipe(map((res) => {
      return this.crypto.decrypt(res.data);
    }));
  }
  // Create new post with FormData
  createPost(formData) {
    return this.http.post(`${this.API}/postEditor`, formData);
  }
  // Update existing post with FormData
  updatePost(id, formData) {
    return this.http.post(`${this.API}/postEditor/${id}`, formData);
  }
  // Save post (create or update)
  savePost(id, formData) {
    if (id) {
      return this.updatePost(id, formData);
    } else {
      return this.createPost(formData);
    }
  }
  // Delete post
  deletePost(id) {
    return this.http.delete(`${this.API}/postEditor/${id}`);
  }
  // Get categories
  getCategories() {
    return this.http.get(`${this.API}/categories`);
  }
};
_PostEditor.\u0275fac = function PostEditor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostEditor)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_PostEditor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PostEditor, factory: _PostEditor.\u0275fac, providedIn: "root" });
var PostEditor = _PostEditor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostEditor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

export {
  PostEditor
};
//# sourceMappingURL=chunk-SOBAQ654.js.map
