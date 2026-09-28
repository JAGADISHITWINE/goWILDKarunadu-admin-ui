import {
  readSync,
  utils,
  writeFileSync
} from "./chunk-XZDBCH3C.js";
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
  AdminShellComponent
} from "./chunk-GLAFLAWJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QNEZ2FH5.js";
import "./chunk-D4XXJJII.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EncryptionService,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  __async,
  __spreadProps,
  __spreadValues,
  debounceTime,
  environment,
  map,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KQE4QDNK.js";

// src/app/treks/trek-add/trek-add.ts
var _TrekAdd = class _TrekAdd {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${environment.baseUrl}`;
  }
  createTrek(trekData, files) {
    const encryptedPayload = this.crypto.encrypt({
      name: trekData.name,
      location: trekData.location,
      category: trekData.category,
      collection: trekData.collection || null,
      difficulty: trekData.difficulty,
      fitnessLevel: trekData.fitnessLevel,
      description: trekData.description,
      highlights: trekData.highlights,
      thingsToCarry: trekData.thingsToCarry,
      importantNotes: trekData.importantNotes,
      batches: trekData.batches,
      coupon: trekData.coupon || null
    });
    const formData = new FormData();
    formData.append("encryptedPayload", encryptedPayload);
    if (files.coverImage) {
      formData.append("coverImage", files.coverImage);
    }
    if (files.gallery?.length) {
      files.gallery.forEach((img) => {
        formData.append("gallery", img);
      });
    }
    return this.http.post(`${this.API}/createTrek`, formData).pipe(map((res) => {
      const decrypted = this.crypto.decrypt(res.data);
      return __spreadProps(__spreadValues({}, res), {
        data: decrypted
      });
    }));
  }
};
_TrekAdd.\u0275fac = function TrekAdd_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekAdd)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(EncryptionService));
};
_TrekAdd.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TrekAdd, factory: _TrekAdd.\u0275fac, providedIn: "root" });
var TrekAdd = _TrekAdd;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekAdd, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: EncryptionService }], null);
})();

// src/app/services/excel-upload.service.ts
var _ExcelUploadService = class _ExcelUploadService {
  constructor() {
  }
  /**
   * Read Excel file and convert to JSON
   */
  readExcelFile(file) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = new Uint8Array(e.target.result);
            const workbook = readSync(data, { type: "array" });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = utils.sheet_to_json(worksheet, {
              raw: false,
              defval: ""
            });
            resolve({
              success: true,
              data: jsonData,
              sheetNames: workbook.SheetNames,
              workbook
            });
          } catch (error) {
            reject({
              success: false,
              error: "Failed to parse Excel file",
              details: error
            });
          }
        };
        reader.onerror = (error) => {
          reject({
            success: false,
            error: "Failed to read file",
            details: error
          });
        };
        reader.readAsArrayBuffer(file);
      });
    });
  }
  /**
   * Parse Trek data from Excel (supports multiple batches)
   */
  parseTrekData(excelData) {
    return excelData.map((row) => ({
      trekName: row["Trek Name"] || row["trekName"] || "",
      location: row["Location"] || row["location"] || "",
      difficulty: row["Difficulty"] || row["difficulty"] || "",
      category: row["Category"] || row["category"] || "",
      fitnessLevel: row["Fitness Level"] || row["fitnessLevel"] || "",
      description: row["Description"] || row["description"] || "",
      // Common arrays
      highlights: row["Highlights"] || row["highlights"] || "",
      thingsToCarry: row["Things to Carry"] || row["thingsToCarry"] || "",
      importantNotes: row["Important Notes"] || row["importantNotes"] || "",
      // Batch identification
      batchNumber: parseInt(row["Batch Number"] || row["batchNumber"] || "1"),
      // Batch-specific data
      startDate: row["Start Date"] || row["startDate"] || "",
      endDate: row["End Date"] || row["endDate"] || "",
      availableSlots: parseInt(row["Available Slots"] || row["availableSlots"] || "0"),
      price: parseFloat(row["Price"] || row["price"] || "0"),
      minAge: parseInt(row["Min Age"] || row["minAge"] || ""),
      maxAge: parseInt(row["Max Age"] || row["maxAge"] || ""),
      duration: row["Duration"] || row["duration"] || "",
      minParticipants: parseInt(row["Min Participants"] || row["minParticipants"] || ""),
      maxParticipants: parseInt(row["Max Participants"] || row["maxParticipants"] || ""),
      batchStatus: row["Batch Status"] || row["batchStatus"] || "active",
      captainName: row["Captain Name"] || row["captainName"] || row["Trek Captain"] || "",
      captainPhone: row["Captain Phone"] || row["captainPhone"] || row["Captain Contact"] || "",
      captainEmail: row["Captain Email"] || row["captainEmail"] || "",
      // Batch-specific arrays
      inclusions: row["Inclusions"] || row["inclusions"] || "",
      exclusions: row["Exclusions"] || row["exclusions"] || "",
      itinerary: row["Itinerary"] || row["itinerary"] || ""
    }));
  }
  /**
   * Convert parsed data to form-compatible format (with multiple batches)
   */
  convertToFormData(parsedData) {
    const firstRow = parsedData[0];
    const trekInfo = {
      name: firstRow.trekName,
      location: firstRow.location,
      difficulty: firstRow.difficulty,
      category: firstRow.category,
      fitnessLevel: firstRow.fitnessLevel || "",
      description: firstRow.description || "",
      highlights: this.splitPipeDelimited(firstRow.highlights),
      thingsToCarry: this.splitPipeDelimited(firstRow.thingsToCarry),
      importantNotes: this.splitPipeDelimited(firstRow.importantNotes)
    };
    const batchesMap = /* @__PURE__ */ new Map();
    parsedData.forEach((row) => {
      const batchNum = row.batchNumber || 1;
      if (!batchesMap.has(batchNum)) {
        batchesMap.set(batchNum, []);
      }
      batchesMap.get(batchNum).push(row);
    });
    const batches = Array.from(batchesMap.values()).map((batchRows) => {
      const batchRow = batchRows[0];
      return {
        startDate: this.formatDate(batchRow.startDate),
        endDate: this.formatDate(batchRow.endDate),
        availableSlots: batchRow.availableSlots,
        price: batchRow.price,
        minAge: batchRow.minAge || "",
        maxAge: batchRow.maxAge || "",
        duration: batchRow.duration || "",
        minParticipants: batchRow.minParticipants || "",
        maxParticipants: batchRow.maxParticipants || "",
        batchStatus: batchRow.batchStatus || "active",
        captainName: batchRow.captainName || "",
        captainPhone: batchRow.captainPhone || "",
        captainEmail: batchRow.captainEmail || "",
        inclusions: this.splitPipeDelimited(batchRow.inclusions),
        exclusions: this.splitPipeDelimited(batchRow.exclusions),
        itineraryDays: this.parseItinerary(batchRow.itinerary)
      };
    });
    return {
      trekInfo,
      batches
    };
  }
  /**
   * Split pipe-delimited string into array
   */
  splitPipeDelimited(value) {
    if (!value || value.trim() === "") {
      return [""];
    }
    const items = value.split("|").map((item) => item.trim()).filter((item) => item !== "");
    return items.length > 0 ? items : [""];
  }
  /**
   * Format date to YYYY-MM-DD
   */
  formatDate(dateString) {
    if (!dateString)
      return "";
    try {
      if (!isNaN(Number(dateString))) {
        const excelEpoch = new Date(1899, 11, 30);
        const daysOffset = Number(dateString);
        const date2 = new Date(excelEpoch.getTime() + daysOffset * 864e5);
        return date2.toISOString().split("T")[0];
      }
      if (dateString.includes("/") || dateString.includes("-")) {
        const parts = dateString.split(/[/-]/);
        if (parts.length === 3) {
          if (parts[0].length === 4) {
            return dateString;
          }
          const day = parts[0].padStart(2, "0");
          const month = parts[1].padStart(2, "0");
          const year = parts[2];
          return `${year}-${month}-${day}`;
        }
      }
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split("T")[0];
      }
      return dateString;
    } catch (error) {
      return dateString;
    }
  }
  /**
   * Parse itinerary JSON string
   */
  parseItinerary(itineraryString) {
    if (!itineraryString || itineraryString.trim() === "") {
      return [];
    }
    try {
      const parsed = JSON.parse(itineraryString);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (error) {
      return [];
    }
  }
  /**
   * Download sample Excel template with multiple batch examples
   */
  downloadTemplate() {
    const templateData = [
      // Batch 1
      {
        "Batch Number": 1,
        "Trek Name": "Kudremukh Trek",
        "Location": "Karnataka",
        "Difficulty": "Moderate",
        "Category": "Hill Trek",
        "Fitness Level": "Intermediate",
        "Description": "Beautiful trek through lush green forests and meadows with stunning 360\xB0 views",
        "Start Date": "2026-02-13",
        "End Date": "2026-02-15",
        "Available Slots": 25,
        "Price": 3500,
        "Min Age": 16,
        "Max Age": 60,
        "Duration": "3 Days / 2 Nights",
        "Min Participants": 10,
        "Max Participants": 25,
        "Batch Status": "active",
        "Highlights": "360\xB0 mountain views|Grasslands|Sunset point|Wildlife spotting",
        "Inclusions": "Transportation from Bangalore|All meals|Professional guide|Camping equipment|First aid",
        "Exclusions": "Personal expenses|Travel insurance|Medical expenses|Extra food items",
        "Things to Carry": "Trekking shoes with good grip|Water bottle (2L)|Sunscreen|First aid kit|Warm clothes|Rain jacket|Torch|Power bank",
        "Important Notes": "Minimum age 16 years|Medical fitness certificate required|No smoking or alcohol|Carry valid ID proof|Follow guide instructions",
        "Itinerary": JSON.stringify([
          {
            dayNumber: 1,
            title: "Bangalore to Base Camp",
            activities: [
              { activityTime: "06:00", activityText: "Departure from Bangalore" },
              { activityTime: "12:00", activityText: "Lunch break at Chikmagalur" },
              { activityTime: "18:00", activityText: "Reach base camp and check-in" }
            ]
          },
          {
            dayNumber: 2,
            title: "Trek to Kudremukh Peak",
            activities: [
              { activityTime: "05:00", activityText: "Wake up and breakfast" },
              { activityTime: "06:00", activityText: "Start trek to peak" },
              { activityTime: "12:00", activityText: "Reach summit and lunch" },
              { activityTime: "16:00", activityText: "Descend to base camp" }
            ]
          },
          {
            dayNumber: 3,
            title: "Return to Bangalore",
            activities: [
              { activityTime: "07:00", activityText: "Breakfast and pack up" },
              { activityTime: "09:00", activityText: "Depart for Bangalore" },
              { activityTime: "18:00", activityText: "Reach Bangalore" }
            ]
          }
        ])
      },
      // Batch 2 - Same trek, different dates
      {
        "Batch Number": 2,
        "Trek Name": "Kudremukh Trek",
        "Location": "Karnataka",
        "Difficulty": "Moderate",
        "Category": "Hill Trek",
        "Fitness Level": "Intermediate",
        "Description": "Beautiful trek through lush green forests and meadows with stunning 360\xB0 views",
        "Start Date": "2026-03-20",
        "End Date": "2026-03-22",
        "Available Slots": 30,
        "Price": 3500,
        "Min Age": 16,
        "Max Age": 60,
        "Duration": "3 Days / 2 Nights",
        "Min Participants": 10,
        "Max Participants": 30,
        "Batch Status": "active",
        "Highlights": "360\xB0 mountain views|Grasslands|Sunset point|Wildlife spotting",
        "Inclusions": "Transportation from Bangalore|All meals|Professional guide|Camping equipment|First aid",
        "Exclusions": "Personal expenses|Travel insurance|Medical expenses|Extra food items",
        "Things to Carry": "Trekking shoes with good grip|Water bottle (2L)|Sunscreen|First aid kit|Warm clothes|Rain jacket|Torch|Power bank",
        "Important Notes": "Minimum age 16 years|Medical fitness certificate required|No smoking or alcohol|Carry valid ID proof|Follow guide instructions",
        "Itinerary": JSON.stringify([
          {
            dayNumber: 1,
            title: "Bangalore to Base Camp",
            activities: [
              { activityTime: "06:00", activityText: "Departure from Bangalore" },
              { activityTime: "12:00", activityText: "Lunch break at Chikmagalur" },
              { activityTime: "18:00", activityText: "Reach base camp and check-in" }
            ]
          },
          {
            dayNumber: 2,
            title: "Trek to Kudremukh Peak",
            activities: [
              { activityTime: "05:00", activityText: "Wake up and breakfast" },
              { activityTime: "06:00", activityText: "Start trek to peak" },
              { activityTime: "12:00", activityText: "Reach summit and lunch" },
              { activityTime: "16:00", activityText: "Descend to base camp" }
            ]
          },
          {
            dayNumber: 3,
            title: "Return to Bangalore",
            activities: [
              { activityTime: "07:00", activityText: "Breakfast and pack up" },
              { activityTime: "09:00", activityText: "Depart for Bangalore" },
              { activityTime: "18:00", activityText: "Reach Bangalore" }
            ]
          }
        ])
      },
      // Batch 3 - Weekend batch
      {
        "Batch Number": 3,
        "Trek Name": "Kudremukh Trek",
        "Location": "Karnataka",
        "Difficulty": "Moderate",
        "Category": "Hill Trek",
        "Fitness Level": "Intermediate",
        "Description": "Beautiful trek through lush green forests and meadows with stunning 360\xB0 views",
        "Start Date": "2026-04-10",
        "End Date": "2026-04-12",
        "Available Slots": 20,
        "Price": 3800,
        "Min Age": 16,
        "Max Age": 60,
        "Duration": "3 Days / 2 Nights",
        "Min Participants": 10,
        "Max Participants": 20,
        "Batch Status": "active",
        "Highlights": "360\xB0 mountain views|Grasslands|Sunset point|Wildlife spotting",
        "Inclusions": "Transportation from Bangalore|All meals|Professional guide|Camping equipment|First aid",
        "Exclusions": "Personal expenses|Travel insurance|Medical expenses|Extra food items",
        "Things to Carry": "Trekking shoes with good grip|Water bottle (2L)|Sunscreen|First aid kit|Warm clothes|Rain jacket|Torch|Power bank",
        "Important Notes": "Minimum age 16 years|Medical fitness certificate required|No smoking or alcohol|Carry valid ID proof|Follow guide instructions",
        "Itinerary": JSON.stringify([
          {
            dayNumber: 1,
            title: "Bangalore to Base Camp",
            activities: [
              { activityTime: "06:00", activityText: "Departure from Bangalore" },
              { activityTime: "12:00", activityText: "Lunch break at Chikmagalur" },
              { activityTime: "18:00", activityText: "Reach base camp and check-in" }
            ]
          },
          {
            dayNumber: 2,
            title: "Trek to Kudremukh Peak",
            activities: [
              { activityTime: "05:00", activityText: "Wake up and breakfast" },
              { activityTime: "06:00", activityText: "Start trek to peak" },
              { activityTime: "12:00", activityText: "Reach summit and lunch" },
              { activityTime: "16:00", activityText: "Descend to base camp" }
            ]
          },
          {
            dayNumber: 3,
            title: "Return to Bangalore",
            activities: [
              { activityTime: "07:00", activityText: "Breakfast and pack up" },
              { activityTime: "09:00", activityText: "Depart for Bangalore" },
              { activityTime: "18:00", activityText: "Reach Bangalore" }
            ]
          }
        ])
      }
    ];
    const worksheet = utils.json_to_sheet(templateData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Trek Data");
    const wscols = [
      { wch: 12 },
      // Batch Number
      { wch: 20 },
      // Trek Name
      { wch: 15 },
      // Location
      { wch: 12 },
      // Difficulty
      { wch: 15 },
      // Category
      { wch: 15 },
      // Fitness Level
      { wch: 60 },
      // Description
      { wch: 12 },
      // Start Date
      { wch: 12 },
      // End Date
      { wch: 15 },
      // Available Slots
      { wch: 10 },
      // Price
      { wch: 10 },
      // Min Age
      { wch: 10 },
      // Max Age
      { wch: 18 },
      // Duration
      { wch: 15 },
      // Min Participants
      { wch: 15 },
      // Max Participants
      { wch: 12 },
      // Batch Status
      { wch: 60 },
      // Highlights
      { wch: 70 },
      // Inclusions
      { wch: 60 },
      // Exclusions
      { wch: 70 },
      // Things to Carry
      { wch: 70 },
      // Important Notes
      { wch: 100 }
      // Itinerary
    ];
    worksheet["!cols"] = wscols;
    writeFileSync(workbook, "Trek_Multi_Batch_Template.xlsx");
  }
  /**
   * Download single batch template
   */
  downloadSingleBatchTemplate() {
    const templateData = [
      {
        // 🔹 BASIC TREK INFO
        "Trek Name": "Kudremukh Trek",
        "Location": "Western Ghats,Chikkamagaluru,Karnataka",
        "Difficulty": "Moderate",
        "Category": "Forest Trek",
        "Fitness Level": "Intermediate",
        "Description": "Kudremukh is known for its scenic views, wildlife, and rich biodiversity...",
        "Start Date": "2026-02-13",
        "End Date": "2026-02-15",
        "Available Slots": 25,
        "Price": 3500,
        "Min Age": 16,
        "Max Age": 60,
        "Duration": "3 Days / 2 Nights",
        "Min Participants": 10,
        "Max Participants": 25,
        "Batch Status": "active",
        "Highlights": "Rolling grasslands|Shola forests|Sunrise views|River crossings",
        "Inclusions": "Accommodation|Meals|Trek Guide|Forest Permit|First Aid",
        "Exclusions": "Transport|Personal Expenses|Insurance",
        "Things to Carry": "Trekking Shoes|Rain Jacket|Torch|Water Bottle|Extra Clothes",
        "Important Notes": "No alcohol|Follow guide instructions|Subject to weather conditions",
        "Itinerary": JSON.stringify([
          {
            dayNumber: 1,
            title: "Arrival & Base Camp",
            activities: [
              { activityTime: "06:00", activityText: "Departure from Bangalore" },
              { activityTime: "12:00", activityText: "Lunch break at Chikmagalur" },
              { activityTime: "18:00", activityText: "Reach base camp and check-in" }
            ]
          },
          {
            dayNumber: 2,
            title: "Summit Trek",
            activities: [
              { activityTime: "05:00", activityText: "Wake up and breakfast" },
              { activityTime: "06:00", activityText: "Start trek to peak" },
              { activityTime: "12:00", activityText: "Reach summit and lunch" },
              { activityTime: "16:00", activityText: "Descend to base camp" }
            ]
          },
          {
            dayNumber: 3,
            title: "Departure",
            activities: [
              { activityTime: "07:00", activityText: "Breakfast and pack up" },
              { activityTime: "09:00", activityText: "Depart for Bangalore" },
              { activityTime: "18:00", activityText: "Reach Bangalore" }
            ]
          }
        ]),
        // 🔹 META / STATUS
        "Status": "Active",
        "Created By": "Admin",
        "Batch Type": "Single"
      }
    ];
    const worksheet = utils.json_to_sheet(templateData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Single Batch");
    writeFileSync(workbook, "Trek_Single_Batch_Template.xlsx");
  }
};
_ExcelUploadService.\u0275fac = function ExcelUploadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExcelUploadService)();
};
_ExcelUploadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExcelUploadService, factory: _ExcelUploadService.\u0275fac, providedIn: "root" });
var ExcelUploadService = _ExcelUploadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExcelUploadService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/treks/trek-add/trek-add.component.ts
function TrekAddComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 29);
    \u0275\u0275text(6, "\u26A1 Quick Batch Import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 30);
    \u0275\u0275text(8, "Bulk Create Treks & Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 31);
    \u0275\u0275text(10, "Import multi-batch schedules, itineraries, and assigned Captain contacts from Excel in one click.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 32)(12, "button", 33);
    \u0275\u0275listener("click", function TrekAddComponent_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(13, "i", 34);
    \u0275\u0275text(14, " Multi-Batch Template ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 35);
    \u0275\u0275listener("click", function TrekAddComponent_div_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadSingleBatchTemplate());
    });
    \u0275\u0275element(16, "i", 36);
    \u0275\u0275text(17, " Single Batch ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 37);
    \u0275\u0275listener("click", function TrekAddComponent_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const excelFileInput_r3 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(excelFileInput_r3.click());
    });
    \u0275\u0275element(19, "i", 38);
    \u0275\u0275text(20, " Upload Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 39, 0);
    \u0275\u0275listener("change", function TrekAddComponent_div_2_Template_input_change_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExcelFileSelect($event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function TrekAddComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementStart(2, "div")(3, "h5", 42);
    \u0275\u0275text(4, "Parsing Excel & Generating Batches...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 43);
    \u0275\u0275text(6, "Populating dates, itineraries, and captain assignments.");
    \u0275\u0275elementEnd()()();
  }
}
function TrekAddComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "status-" + ctx_r1.statusTone);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusTone === "success" ? "bi-check-circle-fill" : ctx_r1.statusTone === "warning" ? "bi-exclamation-triangle-fill" : "bi-x-circle-fill");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.statusMessage);
  }
}
function TrekAddComponent_button_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.batches.length);
  }
}
function TrekAddComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function TrekAddComponent_button_7_Template_button_click_0_listener() {
      const sec_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection(sec_r5.id));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TrekAddComponent_button_7_span_4_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeSection === sec_r5.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", sec_r5.icon, " me-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sec_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sec_r5.id === "batches");
  }
}
function TrekAddComponent_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Trek title is required.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_9_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Location is required.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_9_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    \u0275\u0275property("value", d_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r7);
  }
}
function TrekAddComponent_div_9_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Select a difficulty level.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_9_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("value", c_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8);
  }
}
function TrekAddComponent_div_9_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Select a category.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_9_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    \u0275\u0275property("value", col_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r9);
  }
}
function TrekAddComponent_div_9_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r10 = ctx.$implicit;
    \u0275\u0275property("value", f_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r10);
  }
}
function TrekAddComponent_div_9_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 88);
    \u0275\u0275elementStart(4, "button", 89);
    \u0275\u0275listener("click", function TrekAddComponent_div_9_div_72_Template_button_click_4_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeHighlight(i_r12));
    });
    \u0275\u0275element(5, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", i_r12 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", i_r12);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.highlights.length <= 1);
  }
}
function TrekAddComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275element(3, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4", 54);
    \u0275\u0275text(6, "1. Trek Basics & Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8, "Core destination metadata and physical difficulty parameters");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 55)(10, "div", 56)(11, "div", 57)(12, "label", 58);
    \u0275\u0275text(13, "Trek Title ");
    \u0275\u0275elementStart(14, "span", 59);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 60);
    \u0275\u0275template(17, TrekAddComponent_div_9_div_17_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 57)(19, "label", 58);
    \u0275\u0275text(20, "Location / Region ");
    \u0275\u0275elementStart(21, "span", 59);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 62);
    \u0275\u0275template(24, TrekAddComponent_div_9_div_24_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 63)(26, "label", 58);
    \u0275\u0275text(27, "Difficulty ");
    \u0275\u0275elementStart(28, "span", 59);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "select", 64)(31, "option", 65);
    \u0275\u0275text(32, "Select Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, TrekAddComponent_div_9_option_33_Template, 2, 2, "option", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, TrekAddComponent_div_9_div_34_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 63)(36, "label", 58);
    \u0275\u0275text(37, "Category ");
    \u0275\u0275elementStart(38, "span", 59);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "select", 67)(41, "option", 65);
    \u0275\u0275text(42, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, TrekAddComponent_div_9_option_43_Template, 2, 2, "option", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, TrekAddComponent_div_9_div_44_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 63)(46, "label", 58);
    \u0275\u0275text(47, "Collection / Series");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 68)(49, "option", 69);
    \u0275\u0275text(50, "None / Standard");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, TrekAddComponent_div_9_option_51_Template, 2, 2, "option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 63)(53, "label", 58);
    \u0275\u0275text(54, "Fitness Level Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "select", 70)(56, "option", 69);
    \u0275\u0275text(57, "Recommended / Any");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, TrekAddComponent_div_9_option_58_Template, 2, 2, "option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 71)(60, "label", 58);
    \u0275\u0275text(61, "Description & Experience Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "textarea", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 73)(64, "div", 74)(65, "label", 75);
    \u0275\u0275element(66, "i", 76);
    \u0275\u0275text(67, " Key Highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_9_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addHighlight());
    });
    \u0275\u0275element(69, "i", 78);
    \u0275\u0275text(70, " Add Highlight ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 79);
    \u0275\u0275template(72, TrekAddComponent_div_9_div_72_Template, 6, 3, "div", 80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "div", 81)(74, "button", 82);
    \u0275\u0275listener("click", function TrekAddComponent_div_9_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("batches"));
    });
    \u0275\u0275text(75, " Next: Batches & Captains ");
    \u0275\u0275element(76, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("name"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("name"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("location"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("location"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("difficulty"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.difficulties);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("difficulty"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isInvalid("category"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInvalid("category"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.collections);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.fitnessLevels);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.highlights.controls);
  }
}
function TrekAddComponent_div_10_div_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_10_div_14_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1, "Inactive");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_10_div_14_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_10_div_14_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_10_div_14_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_10_div_14_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_10_div_14_option_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275property("value", s_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r16);
  }
}
function TrekAddComponent_div_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "div", 21)(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TrekAddComponent_div_10_div_14_span_5_Template, 2, 0, "span", 103)(6, TrekAddComponent_div_10_div_14_span_6_Template, 2, 0, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275listener("click", function TrekAddComponent_div_10_div_14_Template_button_click_7_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeBatch(i_r15));
    });
    \u0275\u0275element(8, "i", 106);
    \u0275\u0275text(9, " Remove Batch ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 107)(11, "div", 108)(12, "label", 58);
    \u0275\u0275text(13, "Start Date ");
    \u0275\u0275elementStart(14, "span", 59);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 109);
    \u0275\u0275template(17, TrekAddComponent_div_10_div_14_div_17_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 108)(19, "label", 58);
    \u0275\u0275text(20, "End Date ");
    \u0275\u0275elementStart(21, "span", 59);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 110);
    \u0275\u0275template(24, TrekAddComponent_div_10_div_14_div_24_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 108)(26, "label", 58);
    \u0275\u0275text(27, "Available Slots ");
    \u0275\u0275elementStart(28, "span", 59);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 111);
    \u0275\u0275template(31, TrekAddComponent_div_10_div_14_div_31_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 108)(33, "label", 58);
    \u0275\u0275text(34, "Price per Person (\u20B9) ");
    \u0275\u0275elementStart(35, "span", 59);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 86)(38, "span", 112);
    \u0275\u0275text(39, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, TrekAddComponent_div_10_div_14_div_41_Template, 2, 0, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 108)(43, "label", 58);
    \u0275\u0275text(44, "Duration Label");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 108)(47, "label", 58);
    \u0275\u0275text(48, "Batch Status ");
    \u0275\u0275elementStart(49, "span", 59);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "select", 115)(52, "option", 116);
    \u0275\u0275text(53, "Select Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, TrekAddComponent_div_10_div_14_option_54_Template, 2, 2, "option", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 117)(56, "label", 58);
    \u0275\u0275text(57, "Min - Max Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 118);
    \u0275\u0275element(59, "input", 119)(60, "input", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 117)(62, "label", 58);
    \u0275\u0275text(63, "Min - Max Participants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 118);
    \u0275\u0275element(65, "input", 121)(66, "input", 122);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 123)(68, "div", 124)(69, "div", 125);
    \u0275\u0275element(70, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div")(72, "h6", 127);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 128);
    \u0275\u0275text(75, "Assigned leader details shared with booked participants on confirmation & WhatsApp roster.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 56)(77, "div", 129)(78, "label", 58);
    \u0275\u0275text(79, "Captain / Leader Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 86)(81, "span", 112);
    \u0275\u0275element(82, "i", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 131);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 129)(85, "label", 58);
    \u0275\u0275text(86, "Captain Contact / WhatsApp Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 86)(88, "span", 112);
    \u0275\u0275element(89, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 129)(92, "label", 58);
    \u0275\u0275text(93, "Captain Email / Alt Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 86)(95, "span", 112);
    \u0275\u0275element(96, "i", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 135);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const b_r17 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Batch #", i_r15 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = b_r17.get("batchStatus")) == null ? null : tmp_6_0.value) === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = b_r17.get("batchStatus")) == null ? null : tmp_7_0.value) === "inactive");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.batches.length <= 1);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r15, "startDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r15, "startDate"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r15, "endDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r15, "endDate"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r15, "availableSlots"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r15, "availableSlots"));
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r15, "price"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBatchFieldInvalid(i_r15, "price"));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ctx_r1.isBatchFieldInvalid(i_r15, "batchStatus"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.batchStatuses);
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate1("Trek Captain & Emergency Contacts for Batch #", i_r15 + 1);
  }
}
function TrekAddComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 91)(2, "div", 92)(3, "div", 51);
    \u0275\u0275element(4, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "h4", 54);
    \u0275\u0275text(7, "2. Batches & Assigned Captains");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9, "Manage batch dates, slots, pricing, and assign Trek Captains with direct contact details.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 37);
    \u0275\u0275listener("click", function TrekAddComponent_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addBatch());
    });
    \u0275\u0275element(11, "i", 94);
    \u0275\u0275text(12, " Add New Batch ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 95);
    \u0275\u0275template(14, TrekAddComponent_div_10_div_14_Template, 98, 21, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 97)(16, "button", 22);
    \u0275\u0275listener("click", function TrekAddComponent_div_10_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("basic"));
    });
    \u0275\u0275element(17, "i", 98);
    \u0275\u0275text(18, " Back to Basics ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 99);
    \u0275\u0275listener("click", function TrekAddComponent_div_10_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("itinerary"));
    });
    \u0275\u0275text(20, " Next: Itinerary & Waypoints ");
    \u0275\u0275element(21, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.batches.controls);
  }
}
function TrekAddComponent_div_11_div_18_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275element(1, "input", 160)(2, "input", 161);
    \u0275\u0275elementStart(3, "button", 162);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_div_18_div_1_div_13_Template_button_click_3_listener() {
      const aIndex_r22 = \u0275\u0275restoreView(_r21).index;
      const dIndex_r20 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeActivity(0, dIndex_r20, aIndex_r22));
    });
    \u0275\u0275element(4, "i", 163);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const act_r23 = ctx.$implicit;
    \u0275\u0275property("formGroup", act_r23);
  }
}
function TrekAddComponent_div_11_div_18_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275text(1, ' No timestamped activities added yet. Click "+ Activity" above to add time slots. ');
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_11_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 74)(2, "div", 151)(3, "span", 152);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 118)(7, "button", 154);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_div_18_div_1_Template_button_click_7_listener() {
      const dIndex_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addActivity(0, dIndex_r20));
    });
    \u0275\u0275element(8, "i", 94);
    \u0275\u0275text(9, " Activity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 155);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_div_18_div_1_Template_button_click_10_listener() {
      const dIndex_r20 = \u0275\u0275restoreView(_r19).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeItineraryDay(0, dIndex_r20));
    });
    \u0275\u0275element(11, "i", 90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 156);
    \u0275\u0275template(13, TrekAddComponent_div_11_div_18_div_1_div_13_Template, 5, 1, "div", 157)(14, TrekAddComponent_div_11_div_18_div_1_div_14_Template, 2, 0, "div", 158);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r24 = ctx.$implicit;
    const dIndex_r20 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", day_r24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Day ", dIndex_r20 + 1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.getItineraryDays(0).length <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getActivities(0, dIndex_r20).controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getActivities(0, dIndex_r20).length === 0);
  }
}
function TrekAddComponent_div_11_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275template(1, TrekAddComponent_div_11_div_18_div_1_Template, 15, 5, "div", 149);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getItineraryDays(0).controls);
  }
}
function TrekAddComponent_div_11_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "span", 166);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 167)(4, "span", 168);
    \u0275\u0275text(5, "KM");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 170)(8, "span", 168);
    \u0275\u0275text(9, "Elev (m)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 172)(12, "input", 173);
    \u0275\u0275elementStart(13, "button", 155);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_div_32_Template_button_click_13_listener() {
      const wIndex_r26 = \u0275\u0275restoreView(_r25).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeWaypoint(wIndex_r26));
    });
    \u0275\u0275element(14, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wIndex_r26 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", wIndex_r26);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", wIndex_r26 + 1);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.elevationWaypoints.length <= 2);
  }
}
function TrekAddComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275element(3, "i", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4", 54);
    \u0275\u0275text(6, "3. Day-by-Day Itinerary & Elevation Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8, "Schedule activities for each day and establish checkpoint milestones.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 55)(10, "div", 139)(11, "div", 140)(12, "h5", 141);
    \u0275\u0275element(13, "i", 142);
    \u0275\u0275text(14, "Day-by-Day Schedule (Batch #1)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItineraryDay(0));
    });
    \u0275\u0275element(16, "i", 78);
    \u0275\u0275text(17, " Add Day ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, TrekAddComponent_div_11_div_18_Template, 2, 1, "div", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "hr", 144);
    \u0275\u0275elementStart(20, "div")(21, "div", 140)(22, "div")(23, "h5", 141);
    \u0275\u0275element(24, "i", 145);
    \u0275\u0275text(25, "Elevation Profile & Trail Checkpoints");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 128);
    \u0275\u0275text(27, "Renders the interactive SVG elevation chart on user discovery and booking pages.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addWaypoint());
    });
    \u0275\u0275element(29, "i", 78);
    \u0275\u0275text(30, " Add Checkpoint ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 146);
    \u0275\u0275template(32, TrekAddComponent_div_11_div_32_Template, 15, 3, "div", 147);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 97)(34, "button", 22);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("batches"));
    });
    \u0275\u0275element(35, "i", 98);
    \u0275\u0275text(36, " Back to Batches ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 99);
    \u0275\u0275listener("click", function TrekAddComponent_div_11_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("gear"));
    });
    \u0275\u0275text(38, " Next: Checklist & Inclusions ");
    \u0275\u0275element(39, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.batches.length > 0);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.elevationWaypoints.controls);
  }
}
function TrekAddComponent_div_12_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 188);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 189);
    \u0275\u0275elementStart(4, "button", 89);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_div_11_div_9_Template_button_click_4_listener() {
      const ii_r30 = \u0275\u0275restoreView(_r29).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeInclusion(0, ii_r30));
    });
    \u0275\u0275element(5, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ii_r30 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.asFormControl(ctx_r1.getInclusions(0).at(ii_r30)));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.getInclusions(0).length <= 1);
  }
}
function TrekAddComponent_div_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177)(1, "div", 74)(2, "label", 185);
    \u0275\u0275element(3, "i", 186);
    \u0275\u0275text(4, " Inclusions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addInclusion(0));
    });
    \u0275\u0275element(6, "i", 94);
    \u0275\u0275text(7, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 187);
    \u0275\u0275template(9, TrekAddComponent_div_12_div_11_div_9_Template, 6, 2, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getInclusions(0).controls);
  }
}
function TrekAddComponent_div_12_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 192);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 193);
    \u0275\u0275elementStart(4, "button", 89);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_div_12_div_9_Template_button_click_4_listener() {
      const ei_r33 = \u0275\u0275restoreView(_r32).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeExclusion(0, ei_r33));
    });
    \u0275\u0275element(5, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ei_r33 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.asFormControl(ctx_r1.getExclusions(0).at(ei_r33)));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.getExclusions(0).length <= 1);
  }
}
function TrekAddComponent_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177)(1, "div", 74)(2, "label", 190);
    \u0275\u0275element(3, "i", 191);
    \u0275\u0275text(4, " Exclusions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addExclusion(0));
    });
    \u0275\u0275element(6, "i", 94);
    \u0275\u0275text(7, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 187);
    \u0275\u0275template(9, TrekAddComponent_div_12_div_12_div_9_Template, 6, 2, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.getExclusions(0).controls);
  }
}
function TrekAddComponent_div_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 112);
    \u0275\u0275text(2, "\u{1F392}");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 194);
    \u0275\u0275elementStart(4, "button", 195);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_div_22_Template_button_click_4_listener() {
      const ti_r35 = \u0275\u0275restoreView(_r34).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeThingToCarry(ti_r35));
    });
    \u0275\u0275element(5, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ti_r35 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ti_r35);
  }
}
function TrekAddComponent_div_12_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275text(1, 'No custom items added. Click "+ Add Item" above.');
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_12_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 112);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 197);
    \u0275\u0275elementStart(4, "button", 195);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_div_33_Template_button_click_4_listener() {
      const ni_r37 = \u0275\u0275restoreView(_r36).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeImportantNote(ni_r37));
    });
    \u0275\u0275element(5, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ni_r37 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", ni_r37);
  }
}
function TrekAddComponent_div_12_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196);
    \u0275\u0275text(1, 'No advisory notes added. Click "+ Add Note" above.');
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275element(3, "i", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4", 54);
    \u0275\u0275text(6, "4. Inclusions, Things to Carry & Advisory Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8, "Essential gear checklist and transparent package pricing breakdown.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 55)(10, "div", 175);
    \u0275\u0275template(11, TrekAddComponent_div_12_div_11_Template, 10, 1, "div", 176)(12, TrekAddComponent_div_12_div_12_Template, 10, 1, "div", 176);
    \u0275\u0275elementStart(13, "div", 177)(14, "div", 74)(15, "label", 178);
    \u0275\u0275element(16, "i", 179);
    \u0275\u0275text(17, " Things to Carry Checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addThingToCarry());
    });
    \u0275\u0275element(19, "i", 94);
    \u0275\u0275text(20, " Add Item ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 180);
    \u0275\u0275template(22, TrekAddComponent_div_12_div_22_Template, 6, 1, "div", 80)(23, TrekAddComponent_div_12_div_23_Template, 2, 0, "div", 181);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 177)(25, "div", 74)(26, "label", 182);
    \u0275\u0275element(27, "i", 183);
    \u0275\u0275text(28, " Important Guidelines & Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addImportantNote());
    });
    \u0275\u0275element(30, "i", 94);
    \u0275\u0275text(31, " Add Note ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 184);
    \u0275\u0275template(33, TrekAddComponent_div_12_div_33_Template, 6, 1, "div", 80)(34, TrekAddComponent_div_12_div_34_Template, 2, 0, "div", 181);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 97)(36, "button", 22);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("itinerary"));
    });
    \u0275\u0275element(37, "i", 98);
    \u0275\u0275text(38, " Back to Itinerary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 99);
    \u0275\u0275listener("click", function TrekAddComponent_div_12_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("media"));
    });
    \u0275\u0275text(40, " Next: Media & Gallery ");
    \u0275\u0275element(41, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.batches.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.batches.length > 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.thingsToCarry.controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thingsToCarry.length === 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.importantNotes.controls);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importantNotes.length === 0);
  }
}
function TrekAddComponent_div_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 208);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const coverFileInput_r40 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(coverFileInput_r40.click());
    });
    \u0275\u0275element(1, "i", 209);
    \u0275\u0275elementStart(2, "h6", 210);
    \u0275\u0275text(3, "Click to Upload Cover Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 128);
    \u0275\u0275text(5, "Recommended: 1920x1080px (16:9), PNG/JPG/WEBP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 211, 2);
    \u0275\u0275listener("change", function TrekAddComponent_div_13_div_14_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCoverImageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function TrekAddComponent_div_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 212);
    \u0275\u0275element(1, "img", 213);
    \u0275\u0275elementStart(2, "button", 214);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_div_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeCoverImage());
    });
    \u0275\u0275element(3, "i", 215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 216);
    \u0275\u0275text(5, "Featured Cover");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.coverPreview, \u0275\u0275sanitizeUrl);
  }
}
function TrekAddComponent_div_13_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 219);
    \u0275\u0275element(1, "img", 220);
    \u0275\u0275elementStart(2, "button", 221);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_div_25_div_1_Template_button_click_2_listener() {
      const gIndex_r44 = \u0275\u0275restoreView(_r43).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeGalleryImage(gIndex_r44));
    });
    \u0275\u0275element(3, "i", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const preview_r45 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", preview_r45, \u0275\u0275sanitizeUrl);
  }
}
function TrekAddComponent_div_13_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 217);
    \u0275\u0275template(1, TrekAddComponent_div_13_div_25_div_1_Template, 4, 1, "div", 218);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.galleryPreviews);
  }
}
function TrekAddComponent_div_13_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 222);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_div_26_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      \u0275\u0275nextContext();
      const galleryFileInput_r42 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(galleryFileInput_r42.click());
    });
    \u0275\u0275element(1, "i", 223);
    \u0275\u0275elementStart(2, "p", 128);
    \u0275\u0275text(3, "Upload multi-angle trail photos, waterfalls, campsites & summit panoramas.");
    \u0275\u0275elementEnd()();
  }
}
function TrekAddComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275element(3, "i", 198);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h4", 54);
    \u0275\u0275text(6, "5. Cover Image & Gallery Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 54);
    \u0275\u0275text(8, "Upload high-resolution photography for trek card covers and detail sliders.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 55)(10, "div", 175)(11, "div", 199)(12, "label", 200);
    \u0275\u0275text(13, "Featured Cover Image (Hero)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TrekAddComponent_div_13_div_14_Template, 8, 0, "div", 201)(15, TrekAddComponent_div_13_div_15_Template, 6, 1, "div", 202);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 203)(17, "div", 74)(18, "label", 204);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 77);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r38);
      const galleryFileInput_r42 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(galleryFileInput_r42.click());
    });
    \u0275\u0275element(21, "i", 94);
    \u0275\u0275text(22, " Add Images ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 205, 1);
    \u0275\u0275listener("change", function TrekAddComponent_div_13_Template_input_change_23_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGalleryImagesChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, TrekAddComponent_div_13_div_25_Template, 2, 1, "div", 206)(26, TrekAddComponent_div_13_div_26_Template, 4, 0, "div", 207);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 97)(28, "button", 22);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("gear"));
    });
    \u0275\u0275element(29, "i", 98);
    \u0275\u0275text(30, " Back to Checklist ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 99);
    \u0275\u0275listener("click", function TrekAddComponent_div_13_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("promotions"));
    });
    \u0275\u0275text(32, " Next: Coupons & Discounts ");
    \u0275\u0275element(33, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", !ctx_r1.coverPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.coverPreview);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Gallery Visuals (", ctx_r1.galleryPreviews.length, " uploaded)");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.galleryPreviews.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.galleryPreviews.length === 0);
  }
}
function TrekAddComponent_div_14_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 231)(3, "label", 58);
    \u0275\u0275text(4, "Coupon Code ");
    \u0275\u0275elementStart(5, "span", 59);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 232);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 231)(9, "label", 58);
    \u0275\u0275text(10, "Discount Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 233)(12, "option", 234);
    \u0275\u0275text(13, "Percentage (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 235);
    \u0275\u0275text(15, "Flat Cash (\u20B9)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 231)(17, "label", 58);
    \u0275\u0275text(18, "Discount Value");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 236);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 231)(21, "label", 58);
    \u0275\u0275text(22, "Min Booking Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 237);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 231)(25, "label", 58);
    \u0275\u0275text(26, "Max Discount Cap (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 238);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 231)(29, "label", 58);
    \u0275\u0275text(30, "Usage Limit (Seats)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 239);
    \u0275\u0275elementEnd()()();
  }
}
function TrekAddComponent_div_14_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 240);
    \u0275\u0275element(1, "i", 241);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Promotional coupon disabled. Toggle switch above to activate an introductory discount code.");
    \u0275\u0275elementEnd()();
  }
}
function TrekAddComponent_div_14_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 242);
    \u0275\u0275text(2, " Publish Trek & Batches");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_14_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 243);
    \u0275\u0275text(2, " Publishing...");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 91)(2, "div", 92)(3, "div", 51);
    \u0275\u0275element(4, "i", 225);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "h4", 54);
    \u0275\u0275text(7, "6. Trek Launch Promotion & Coupon (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275text(9, "Create an introductory discount or early-bird promotional code for this trek.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 226);
    \u0275\u0275element(11, "input", 227);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, TrekAddComponent_div_14_div_12_Template, 32, 0, "div", 228)(13, TrekAddComponent_div_14_div_13_Template, 4, 0, "div", 229);
    \u0275\u0275elementStart(14, "div", 97)(15, "button", 22);
    \u0275\u0275listener("click", function TrekAddComponent_div_14_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveSection("media"));
    });
    \u0275\u0275element(16, "i", 98);
    \u0275\u0275text(17, " Back to Media ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 230);
    \u0275\u0275template(19, TrekAddComponent_div_14_span_19_Template, 3, 0, "span", 24)(20, TrekAddComponent_div_14_span_20_Template, 3, 0, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r1.addTrekForm.get("coupon.enabled")) == null ? null : tmp_1_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_2_0 = ctx_r1.addTrekForm.get("coupon.enabled")) == null ? null : tmp_2_0.value));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
  }
}
function TrekAddComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 244);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.addTrekForm.get("name")) == null ? null : tmp_1_0.value);
  }
}
function TrekAddComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 245);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("From \u20B9", \u0275\u0275pipeBind1(4, 1, ctx_r1.minTrekPrice));
  }
}
function TrekAddComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 246);
    \u0275\u0275element(1, "i", 247);
    \u0275\u0275elementStart(2, "span", 248);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Autosaved ", \u0275\u0275pipeBind2(4, 1, ctx_r1.lastAutoSavedAt, "shortTime"));
  }
}
function TrekAddComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 242);
    \u0275\u0275text(2, " Save & Publish Trek");
    \u0275\u0275elementEnd();
  }
}
function TrekAddComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 243);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
var _TrekAddComponent = class _TrekAddComponent {
  constructor(fb, trekService, router, excelService, dropdownService, notificationService) {
    this.fb = fb;
    this.trekService = trekService;
    this.router = router;
    this.excelService = excelService;
    this.dropdownService = dropdownService;
    this.notificationService = notificationService;
    this.submitted = false;
    this.isSaving = false;
    this.lastAutoSavedAt = null;
    this.activeSection = "basic";
    this.draftStorageKey = "trek-add-draft";
    this.coverImage = null;
    this.coverPreview = null;
    this.galleryFiles = [];
    this.galleryPreviews = [];
    this.isUploadingExcel = false;
    this.excelFileName = "";
    this.uploadedBatchCount = 0;
    this.statusMessage = null;
    this.statusTone = null;
    this.difficulties = ["Easy", "Moderate", "Difficult", "Extreme", "Challenging"];
    this.categories = ["Hill Trek", "Peak Trek", "Mountain Trek", "Forest Trek", "Desert Trek", "Snow Trek", "Western Ghats"];
    this.collections = ["Western Ghats Peaks", "Monsoon Specials", "Heritage & Trails", "Weekend Escapes", "Family Friendly"];
    this.fitnessLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
    this.batchStatuses = ["active", "inactive", "full", "cancelled", "completed"];
    this.sections = [
      { id: "basic", label: "1. Trek Basics", icon: "bi-geo-alt-fill" },
      { id: "batches", label: "2. Batches & Captains", icon: "bi-people-fill" },
      { id: "itinerary", label: "3. Itinerary & Elevation", icon: "bi-map-fill" },
      { id: "gear", label: "4. Checklist & Inclusions", icon: "bi-backpack-fill" },
      { id: "media", label: "5. Gallery & Media", icon: "bi-images" },
      { id: "promotions", label: "6. Coupons & Discounts", icon: "bi-tag-fill" }
    ];
  }
  ngOnInit() {
    this.addTrekForm = this.fb.group({
      name: ["", Validators.required],
      location: ["", Validators.required],
      difficulty: ["", Validators.required],
      category: ["", Validators.required],
      collection: [""],
      fitnessLevel: [""],
      description: [""],
      highlights: this.fb.array([this.fb.control("")]),
      batches: this.fb.array([this.createBatch()]),
      thingsToCarry: this.fb.array([]),
      importantNotes: this.fb.array([]),
      elevationWaypoints: this.fb.array([
        this.createWaypoint(0, 950, "Basecamp (0km)", "bi bi-signpost-2", "Permit & ID Verification"),
        this.createWaypoint(3.8, 1280, "Water Point (3.8km)", "bi bi-droplet-fill", "Natural spring water refill point"),
        this.createWaypoint(7.2, 1620, "Ridge Saddle (7.2km)", "bi bi-flag-fill", "Scenic cloud valley panoramic viewpoint"),
        this.createWaypoint(11.5, 1894, "Peak Summit (11.5km)", "bi bi-triangle-fill", "Highest summit milestone & photo point"),
        this.createWaypoint(22, 950, "Return (22km)", "bi bi-check2-circle", "Summit debrief & certificate handover")
      ]),
      coupon: this.fb.group({
        enabled: [false],
        code: [""],
        discountType: ["percentage"],
        discountValue: [10],
        minBookingAmount: [0],
        maxDiscountAmount: [null],
        startDate: [""],
        endDate: [""],
        usageLimit: [null],
        isActive: [true]
      })
    });
    this.loadDropdownOptions();
    this.restoreDraft();
    this.setupAutosave();
  }
  ngOnDestroy() {
    this.autosaveTimer?.unsubscribe?.();
  }
  setActiveSection(section) {
    this.activeSection = section;
  }
  nextSection() {
    const order = ["basic", "batches", "itinerary", "gear", "media", "promotions"];
    const idx = order.indexOf(this.activeSection);
    if (idx < order.length - 1) {
      this.activeSection = order[idx + 1];
    }
  }
  prevSection() {
    const order = ["basic", "batches", "itinerary", "gear", "media", "promotions"];
    const idx = order.indexOf(this.activeSection);
    if (idx > 0) {
      this.activeSection = order[idx - 1];
    }
  }
  loadDropdownOptions() {
    this.dropdownService.getGroupOptions("trekDifficulty").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.difficulties = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekCategory").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.categories = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekCollection").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.collections = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("trekFitnessLevel").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.fitnessLevels = opts.map((o) => o.label);
    });
    this.dropdownService.getGroupOptions("batchStatus").pipe(take(1)).subscribe((opts) => {
      if (opts.length > 0)
        this.batchStatuses = opts.map((o) => o.label);
    });
  }
  /* ----------------- EXCEL UPLOAD ----------------- */
  onExcelFileSelect(event) {
    return __async(this, null, function* () {
      const file = event.target.files[0];
      if (!file)
        return;
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel"
      ];
      if (!validTypes.includes(file.type)) {
        this.setStatus("Please upload a valid Excel file (.xlsx or .xls)", "warning");
        this.notificationService.show("Please upload a valid Excel file (.xlsx or .xls)");
        return;
      }
      this.isUploadingExcel = true;
      this.excelFileName = file.name;
      try {
        const result = yield this.excelService.readExcelFile(file);
        if (result.success && result.data.length > 0) {
          const parsedData = this.excelService.parseTrekData(result.data);
          const formData = this.excelService.convertToFormData(parsedData);
          this.populateFormFromExcel(formData);
          this.uploadedBatchCount = formData.batches.length;
          this.setStatus(`Excel file imported! ${this.uploadedBatchCount} batch(es) loaded with Captain information.`, "success");
          this.notificationService.show(`Loaded ${this.uploadedBatchCount} batch(es) from Excel`, 3e3);
        } else {
          this.setStatus("No data found in Excel file", "warning");
          this.notificationService.show("No data found in Excel file", 3e3);
        }
      } catch (error) {
        this.setStatus("Failed to read Excel file. Please check the format and try again.", "danger");
        this.notificationService.show("Failed to read Excel file. Please check format.", 3500);
      } finally {
        this.isUploadingExcel = false;
        event.target.value = "";
      }
    });
  }
  populateFormFromExcel(data) {
    this.clearFormArrays();
    this.addTrekForm.patchValue({
      name: data.trekInfo.name,
      location: data.trekInfo.location,
      difficulty: data.trekInfo.difficulty,
      category: data.trekInfo.category,
      collection: data.trekInfo.collection || "",
      fitnessLevel: data.trekInfo.fitnessLevel,
      description: data.trekInfo.description
    });
    if (data.trekInfo.highlights && data.trekInfo.highlights.length > 0) {
      data.trekInfo.highlights.forEach((highlight) => {
        if (highlight)
          this.highlights.push(this.fb.control(highlight));
      });
    } else {
      this.highlights.push(this.fb.control(""));
    }
    if (data.trekInfo.thingsToCarry && data.trekInfo.thingsToCarry.length > 0) {
      data.trekInfo.thingsToCarry.forEach((item) => {
        if (item)
          this.thingsToCarry.push(this.fb.control(item));
      });
    }
    if (data.trekInfo.importantNotes && data.trekInfo.importantNotes.length > 0) {
      data.trekInfo.importantNotes.forEach((note) => {
        if (note)
          this.importantNotes.push(this.fb.control(note));
      });
    }
    if (data.batches && data.batches.length > 0) {
      while (this.batches.length > 0) {
        this.batches.removeAt(0);
      }
      data.batches.forEach((batch) => {
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
          captainName: batch.captainName || "",
          captainPhone: batch.captainPhone || "",
          captainEmail: batch.captainEmail || ""
        });
        const inclusionsArray = batchGroup.get("inclusions");
        inclusionsArray.clear();
        if (batch.inclusions && batch.inclusions.length > 0) {
          batch.inclusions.forEach((inc) => {
            if (inc)
              inclusionsArray.push(this.fb.control(inc));
          });
        } else {
          inclusionsArray.push(this.fb.control(""));
        }
        const exclusionsArray = batchGroup.get("exclusions");
        exclusionsArray.clear();
        if (batch.exclusions && batch.exclusions.length > 0) {
          batch.exclusions.forEach((exc) => {
            if (exc)
              exclusionsArray.push(this.fb.control(exc));
          });
        } else {
          exclusionsArray.push(this.fb.control(""));
        }
        const itineraryArray = batchGroup.get("itineraryDays");
        itineraryArray.clear();
        if (batch.itineraryDays && batch.itineraryDays.length > 0) {
          batch.itineraryDays.forEach((day) => {
            const dayGroup = this.createDay(day.dayNumber);
            dayGroup.patchValue({
              dayNumber: day.dayNumber,
              title: day.title
            });
            const activitiesArray = dayGroup.get("activities");
            if (day.activities && day.activities.length > 0) {
              day.activities.forEach((activity) => {
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
    while (this.highlights.length > 0)
      this.highlights.removeAt(0);
    while (this.thingsToCarry.length > 0)
      this.thingsToCarry.removeAt(0);
    while (this.importantNotes.length > 0)
      this.importantNotes.removeAt(0);
    while (this.batches.length > 0)
      this.batches.removeAt(0);
  }
  downloadTemplate() {
    this.excelService.downloadTemplate();
  }
  downloadSingleBatchTemplate() {
    this.excelService.downloadSingleBatchTemplate();
  }
  /* ----------------- BATCHES ----------------- */
  get batches() {
    return this.addTrekForm.get("batches");
  }
  createBatch() {
    return this.fb.group({
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      availableSlots: ["", Validators.required],
      minAge: [""],
      maxAge: [""],
      minParticipants: [""],
      maxParticipants: [""],
      duration: [""],
      batchStatus: ["", Validators.required],
      price: ["", Validators.required],
      captainName: [""],
      captainPhone: [""],
      captainEmail: [""],
      inclusions: this.fb.array([this.fb.control("")]),
      exclusions: this.fb.array([this.fb.control("")]),
      itineraryDays: this.fb.array([this.createDay(1)])
    });
  }
  addBatch() {
    this.batches.push(this.createBatch());
    this.notificationService.show("New batch created");
  }
  removeBatch(index) {
    if (this.batches.length > 1) {
      this.batches.removeAt(index);
      this.notificationService.show("Batch removed");
    } else {
      this.setStatus("At least one batch is required", "warning");
      this.notificationService.show("At least one batch is required");
    }
  }
  /* ----------------- ARRAYS ----------------- */
  get highlights() {
    return this.addTrekForm.get("highlights");
  }
  addHighlight() {
    this.highlights.push(this.fb.control(""));
  }
  removeHighlight(index) {
    if (this.highlights.length > 1) {
      this.highlights.removeAt(index);
    }
  }
  getInclusions(i) {
    return this.batches.at(i).get("inclusions");
  }
  addInclusion(i) {
    this.getInclusions(i).push(this.fb.control(""));
  }
  removeInclusion(i, ii) {
    const inclusions = this.getInclusions(i);
    if (inclusions.length > 1) {
      inclusions.removeAt(ii);
    }
  }
  getExclusions(i) {
    return this.batches.at(i).get("exclusions");
  }
  addExclusion(i) {
    this.getExclusions(i).push(this.fb.control(""));
  }
  removeExclusion(i, ei) {
    const exclusions = this.getExclusions(i);
    if (exclusions.length > 1) {
      exclusions.removeAt(ei);
    }
  }
  /* ---------- ITINERARY ---------- */
  getItineraryDays(batchIndex) {
    return this.batches.at(batchIndex).get("itineraryDays");
  }
  createDay(dayNumber) {
    return this.fb.group({
      dayNumber: [dayNumber, Validators.required],
      title: ["", Validators.required],
      activities: this.fb.array([])
    });
  }
  addItineraryDay(batchIndex) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    const dayNumber = itineraryDays.length + 1;
    itineraryDays.push(this.createDay(dayNumber));
  }
  removeItineraryDay(batchIndex, dayIndex) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    if (itineraryDays.length > 1) {
      itineraryDays.removeAt(dayIndex);
      this.recalculateDayNumbers(batchIndex);
    }
  }
  recalculateDayNumbers(batchIndex) {
    const itineraryDays = this.getItineraryDays(batchIndex);
    for (let i = 0; i < itineraryDays.length; i++) {
      itineraryDays.at(i).patchValue({ dayNumber: i + 1 });
    }
  }
  getActivities(batchIndex, dayIndex) {
    return this.getItineraryDays(batchIndex).at(dayIndex).get("activities");
  }
  addActivity(batchIndex, dayIndex) {
    const activities = this.getActivities(batchIndex, dayIndex);
    activities.push(this.fb.group({
      activityTime: ["", Validators.required],
      activityText: ["", Validators.required]
    }));
  }
  removeActivity(batchIndex, dayIndex, actIndex) {
    this.getActivities(batchIndex, dayIndex).removeAt(actIndex);
  }
  /* ---------- THINGS TO CARRY ---------- */
  get thingsToCarry() {
    return this.addTrekForm.get("thingsToCarry");
  }
  addThingToCarry() {
    this.thingsToCarry.push(this.fb.control(""));
  }
  removeThingToCarry(index) {
    this.thingsToCarry.removeAt(index);
  }
  /* ---------- IMPORTANT NOTES ---------- */
  get importantNotes() {
    return this.addTrekForm.get("importantNotes");
  }
  addImportantNote() {
    this.importantNotes.push(this.fb.control(""));
  }
  removeImportantNote(index) {
    this.importantNotes.removeAt(index);
  }
  /* ---------- ELEVATION WAYPOINTS ---------- */
  get elevationWaypoints() {
    return this.addTrekForm.get("elevationWaypoints");
  }
  createWaypoint(km, elevation, name, icon, note) {
    return this.fb.group({
      km: [km, [Validators.required, Validators.min(0)]],
      elevation: [elevation, [Validators.required, Validators.min(0)]],
      name: [name, Validators.required],
      icon: [icon || "bi bi-geo-alt-fill"],
      note: [note || ""]
    });
  }
  addWaypoint() {
    const current = this.elevationWaypoints.length;
    const lastKm = current > 0 ? (this.elevationWaypoints.at(current - 1).get("km")?.value || 0) + 2 : 0;
    const lastElev = current > 0 ? (this.elevationWaypoints.at(current - 1).get("elevation")?.value || 1e3) + 100 : 1e3;
    this.elevationWaypoints.push(this.createWaypoint(lastKm, lastElev, `Checkpoint ${current + 1}`, "bi bi-signpost-2", ""));
  }
  removeWaypoint(index) {
    if (this.elevationWaypoints.length > 2) {
      this.elevationWaypoints.removeAt(index);
    } else {
      this.notificationService.show("At least 2 checkpoints are recommended for elevation profile");
    }
  }
  asFormControl(ctrl) {
    return ctrl;
  }
  /* ---------- IMAGES ---------- */
  onCoverImageChange(event) {
    return __async(this, null, function* () {
      const file = event.target.files[0];
      if (file) {
        if (!this.isAcceptedImage(file)) {
          this.setStatus("Please select a valid image file (PNG, JPG, WEBP, etc.)", "warning");
          return;
        }
        try {
          const optimized = yield optimizeImageForUpload(file, 1920, 0.85);
          this.coverImage = optimized;
          const reader = new FileReader();
          reader.onload = () => {
            this.coverPreview = reader.result;
          };
          reader.readAsDataURL(optimized);
        } catch {
          this.coverImage = file;
          const reader = new FileReader();
          reader.onload = () => {
            this.coverPreview = reader.result;
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }
  removeCoverImage() {
    this.coverImage = null;
    this.coverPreview = null;
  }
  onGalleryImagesChange(event) {
    return __async(this, null, function* () {
      const files = event.target.files;
      if (!files || files.length === 0)
        return;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (this.isAcceptedImage(file)) {
          try {
            const optimized = yield optimizeImageForUpload(file, 1600, 0.82);
            this.galleryFiles.push(optimized);
            const reader = new FileReader();
            reader.onload = () => {
              this.galleryPreviews.push(reader.result);
            };
            reader.readAsDataURL(optimized);
          } catch {
            this.galleryFiles.push(file);
            const reader = new FileReader();
            reader.onload = () => {
              this.galleryPreviews.push(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }
      }
    });
  }
  removeGalleryImage(index) {
    this.galleryFiles.splice(index, 1);
    this.galleryPreviews.splice(index, 1);
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
  /* ---------- METRIC GETTERS FOR LIVE SIDEBAR/SUMMARY ---------- */
  get totalBatchesCount() {
    return this.batches.length;
  }
  get totalCaptainsAssigned() {
    return this.batches.controls.filter((b) => !!b.get("captainName")?.value?.trim()).length;
  }
  get minTrekPrice() {
    const prices = this.batches.controls.map((b) => Number(b.get("price")?.value || 0)).filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : 0;
  }
  get isBasicSectionComplete() {
    return !!(this.addTrekForm.get("name")?.valid && this.addTrekForm.get("location")?.valid && this.addTrekForm.get("difficulty")?.valid && this.addTrekForm.get("category")?.valid);
  }
  /* ---------- SAVE ---------- */
  saveTrek() {
    this.submitted = true;
    if (this.addTrekForm.invalid) {
      this.addTrekForm.markAllAsTouched();
      this.setStatus("Please fill in all required fields marked in red.", "danger");
      this.notificationService.show("Please complete all required fields.", 3500);
      return;
    }
    this.isSaving = true;
    const formVal = this.addTrekForm.value;
    this.trekService.createTrek(formVal, {
      coverImage: this.coverImage,
      gallery: this.galleryFiles
    }).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response?.success === true) {
          this.clearDraft();
          this.setStatus("Trek added successfully!", "success");
          this.notificationService.show("Trek added successfully!");
          this.router.navigate(["/admin/treks/list"]);
        } else {
          const message = response?.data?.message || "Failed to create trek";
          this.setStatus(message, "danger");
          this.notificationService.show(message, 3500);
        }
      },
      error: (err) => {
        this.isSaving = false;
        this.setStatus("Server error while creating trek. Please check network and try again.", "danger");
        this.notificationService.show("Server error. Please try again.", 3500);
      }
    });
  }
  setupAutosave() {
    this.autosaveTimer?.unsubscribe?.();
    this.autosaveTimer = this.addTrekForm.valueChanges.pipe(debounceTime(900)).subscribe(() => this.saveDraft());
  }
  saveDraft() {
    const draft = {
      formValue: this.addTrekForm.getRawValue(),
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    sessionStorage.setItem(this.draftStorageKey, JSON.stringify(draft));
    this.lastAutoSavedAt = draft.savedAt;
  }
  restoreDraft() {
    const raw = sessionStorage.getItem(this.draftStorageKey);
    if (!raw)
      return;
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
  clearDraft() {
    sessionStorage.removeItem(this.draftStorageKey);
    this.lastAutoSavedAt = null;
  }
  isInvalid(controlName) {
    const control = this.addTrekForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }
  isBatchFieldInvalid(batchIndex, fieldName) {
    const control = this.batches.at(batchIndex).get(fieldName);
    return !!control && control.invalid && (control.dirty || control.touched || this.submitted);
  }
  setStatus(message, tone) {
    this.statusMessage = message;
    this.statusTone = tone;
  }
  cancel() {
    this.router.navigate(["/admin/treks/list"]);
  }
};
_TrekAddComponent.\u0275fac = function TrekAddComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TrekAdd), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ExcelUploadService), \u0275\u0275directiveInject(DropdownManagerService), \u0275\u0275directiveInject(NotificationService));
};
_TrekAddComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrekAddComponent, selectors: [["app-trek-add"]], decls: 35, vars: 23, consts: [["excelFileInput", ""], ["galleryFileInput", ""], ["coverFileInput", ""], ["title", "Add Trek & Batches", "subtitle", "Configure trek itinerary, pricing, elevation profile, and assign batch captains.", "sectionLabel", "Treks"], ["class", "excel-hero-card mb-4", 4, "ngIf"], ["class", "excel-loading-card mb-4", 4, "ngIf"], ["class", "status-banner mb-3", 3, "ngClass", 4, "ngIf"], [1, "nav-stepper-container", "mb-4"], [1, "stepper-scroll"], ["type", "button", "class", "step-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "form-container", 3, "ngSubmit", "formGroup"], ["class", "section-card mb-4", 4, "ngIf"], ["class", "section-card mb-4", "formGroupName", "coupon", 4, "ngIf"], [1, "sticky-form-footer"], [1, "container-fluid", "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-3"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], ["class", "summary-chip", 4, "ngIf"], [1, "summary-chip"], [1, "bi", "bi-people-fill", "text-info", "me-1"], [1, "bi", "bi-person-badge-fill", "text-success", "me-1"], ["class", "draft-indicator", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "button", 1, "btn-app", "btn-ghost", 3, "click"], ["type", "button", 1, "btn-app", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "excel-hero-card", "mb-4"], [1, "hero-left"], [1, "hero-icon-pulse"], [1, "bi", "bi-file-earmark-excel-fill"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-desc"], [1, "hero-actions"], ["type", "button", "title", "Download Multi-Batch Template", 1, "btn-app", "btn-ghost", "btn-sm", 3, "click"], [1, "bi", "bi-download", "me-1"], ["type", "button", "title", "Download Single Batch Template", 1, "btn-app", "btn-ghost", "btn-sm", 3, "click"], [1, "bi", "bi-file-earmark", "me-1"], ["type", "button", 1, "btn-app", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-arrow-up-fill", "me-1"], ["type", "file", "accept", ".xlsx,.xls", "hidden", "", 3, "change"], [1, "excel-loading-card", "mb-4"], ["role", "status", 1, "spinner-border", "text-primary", "me-3"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "status-banner", "mb-3", 3, "ngClass"], [1, "bi", 3, "ngClass"], ["type", "button", 1, "step-pill", 3, "click"], ["class", "step-badge", 4, "ngIf"], [1, "step-badge"], [1, "section-card", "mb-4"], [1, "section-header"], [1, "header-icon"], [1, "bi", "bi-geo-alt-fill"], [1, "header-text"], [1, "mb-0"], [1, "section-body"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Kudremukh Peak Expedition", 1, "form-control", "modern-input"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "location", "placeholder", "e.g. Chikmagalur, Western Ghats", 1, "form-control", "modern-input"], [1, "col-12", "col-sm-6", "col-lg-3"], ["formControlName", "difficulty", 1, "form-select", "modern-select"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "category", 1, "form-select", "modern-select"], ["formControlName", "collection", 1, "form-select", "modern-select"], ["value", ""], ["formControlName", "fitnessLevel", 1, "form-select", "modern-select"], [1, "col-12"], ["rows", "4", "formControlName", "description", "placeholder", "Describe the landscape, viewpoints, trail highlights, and what makes this trek extraordinary...", 1, "form-control", "modern-input"], [1, "col-12", "mt-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "form-label", "mb-0", "fw-bold"], [1, "bi", "bi-stars", "text-warning", "me-1"], ["type", "button", 1, "btn-app", "btn-ghost", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["formArrayName", "highlights", 1, "d-flex", "flex-column", "gap-2"], ["class", "input-group", 4, "ngFor", "ngForOf"], [1, "section-footer"], ["type", "button", 1, "btn-app", "btn-primary", "ms-auto", 3, "click"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "invalid-feedback"], [3, "value"], [1, "input-group"], [1, "input-group-text", "bg-light", "text-muted"], ["type", "text", "placeholder", "e.g. 360\xB0 Shola Grassland Panorama & Waterfalls", 1, "form-control", "modern-input", 3, "formControlName"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "bi", "bi-trash"], [1, "section-header", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-people-fill"], [1, "bi", "bi-plus-lg", "me-1"], ["formArrayName", "batches", 1, "section-body"], ["class", "batch-panel mb-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "section-footer", "d-flex", "justify-content-between"], [1, "bi", "bi-arrow-left", "me-1"], ["type", "button", 1, "btn-app", "btn-primary", 3, "click"], [1, "batch-panel", "mb-4", 3, "formGroupName"], [1, "batch-panel-header"], [1, "batch-badge"], ["class", "badge bg-success-subtle text-success border border-success-subtle", 4, "ngIf"], ["class", "badge bg-warning-subtle text-warning border border-warning-subtle", 4, "ngIf"], ["type", "button", "title", "Delete Batch", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-trash", "me-1"], [1, "row", "g-3", "mt-2"], [1, "col-12", "col-sm-6", "col-md-3"], ["type", "date", "formControlName", "startDate", 1, "form-control", "modern-input"], ["type", "date", "formControlName", "endDate", 1, "form-control", "modern-input"], ["type", "number", "min", "1", "formControlName", "availableSlots", "placeholder", "e.g. 25", 1, "form-control", "modern-input"], [1, "input-group-text", "bg-light"], ["type", "number", "min", "0", "formControlName", "price", "placeholder", "3499", 1, "form-control", "modern-input"], ["type", "text", "formControlName", "duration", "placeholder", "e.g. 2 Days / 1 Night", 1, "form-control", "modern-input"], ["formControlName", "batchStatus", 1, "form-select", "modern-select"], ["value", "", "disabled", ""], [1, "col-6", "col-md-3"], [1, "d-flex", "gap-1"], ["type", "number", "formControlName", "minAge", "placeholder", "Min (12)", 1, "form-control", "modern-input", "text-center"], ["type", "number", "formControlName", "maxAge", "placeholder", "Max (65)", 1, "form-control", "modern-input", "text-center"], ["type", "number", "formControlName", "minParticipants", "placeholder", "Min (5)", 1, "form-control", "modern-input", "text-center"], ["type", "number", "formControlName", "maxParticipants", "placeholder", "Max (30)", 1, "form-control", "modern-input", "text-center"], [1, "captain-subcard", "mt-4", "p-3", "rounded", "border"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "captain-icon-badge"], [1, "bi", "bi-person-badge-fill"], [1, "mb-0", "fw-bold"], [1, "text-muted", "small", "mb-0"], [1, "col-12", "col-md-4"], [1, "bi", "bi-person-fill"], ["type", "text", "formControlName", "captainName", "placeholder", "e.g. Captain Jagadish / Arjun", 1, "form-control", "modern-input"], [1, "bi", "bi-telephone-fill"], ["type", "tel", "formControlName", "captainPhone", "placeholder", "e.g. +91 98765 43210", 1, "form-control", "modern-input"], [1, "bi", "bi-envelope-fill"], ["type", "email", "formControlName", "captainEmail", "placeholder", "e.g. captain@gowild.in", 1, "form-control", "modern-input"], [1, "badge", "bg-success-subtle", "text-success", "border", "border-success-subtle"], [1, "badge", "bg-warning-subtle", "text-warning", "border", "border-warning-subtle"], [1, "bi", "bi-map-fill"], [1, "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "fw-bold", "mb-0"], [1, "bi", "bi-calendar-event", "me-2", "text-primary"], ["class", "d-flex flex-column gap-3", 4, "ngIf"], [1, "my-4"], [1, "bi", "bi-activity", "me-2", "text-success"], ["formArrayName", "elevationWaypoints", 1, "d-flex", "flex-column", "gap-2"], ["class", "waypoint-row p-2 rounded border bg-light d-flex flex-wrap align-items-center gap-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "gap-3"], ["class", "day-timeline-card p-3 rounded border", 4, "ngFor", "ngForOf"], [1, "day-timeline-card", "p-3", "rounded", "border"], [1, "d-flex", "align-items-center", "gap-2", "flex-grow-1", "me-3", 3, "formGroup"], [1, "day-pill"], ["type", "text", "formControlName", "title", "placeholder", "e.g. Bangalore Departure & Basecamp Acclimatization", 1, "form-control", "modern-input"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], [1, "activities-list", "mt-2", "ps-3", "border-start"], ["class", "d-flex gap-2 align-items-center mb-2", 3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "text-muted small py-1", 4, "ngIf"], [1, "d-flex", "gap-2", "align-items-center", "mb-2", 3, "formGroup"], ["type", "time", "formControlName", "activityTime", 1, "form-control", "modern-input", 2, "max-width", "140px"], ["type", "text", "formControlName", "activityText", "placeholder", "e.g. Arrive at Chikmagalur, brief safety orientation & breakfast", 1, "form-control", "modern-input", "flex-grow-1"], ["type", "button", 1, "btn", "btn-link", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-x-circle-fill", "fs-5"], [1, "text-muted", "small", "py-1"], [1, "waypoint-row", "p-2", "rounded", "border", "bg-light", "d-flex", "flex-wrap", "align-items-center", "gap-2", 3, "formGroupName"], [1, "badge", "bg-secondary"], [1, "input-group", 2, "width", "140px"], [1, "input-group-text", "bg-white", "small"], ["type", "number", "step", "0.1", "min", "0", "formControlName", "km", "placeholder", "0.0", 1, "form-control", "modern-input", "text-center"], [1, "input-group", 2, "width", "160px"], ["type", "number", "min", "0", "formControlName", "elevation", "placeholder", "950", 1, "form-control", "modern-input", "text-center"], ["type", "text", "formControlName", "name", "placeholder", "Checkpoint Name (e.g. Ridge Summit)", 1, "form-control", "modern-input", "flex-grow-1", 2, "min-width", "160px"], ["type", "text", "formControlName", "note", "placeholder", "Short milestone note...", 1, "form-control", "modern-input", "flex-grow-1", 2, "min-width", "180px"], [1, "bi", "bi-backpack-fill"], [1, "row", "g-4"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6"], [1, "form-label", "fw-bold", "mb-0", "text-primary"], [1, "bi", "bi-backpack2-fill", "me-1"], ["formArrayName", "thingsToCarry", 1, "d-flex", "flex-column", "gap-2"], ["class", "text-muted small", 4, "ngIf"], [1, "form-label", "fw-bold", "mb-0", "text-warning"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], ["formArrayName", "importantNotes", 1, "d-flex", "flex-column", "gap-2"], [1, "form-label", "fw-bold", "mb-0", "text-success"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "d-flex", "flex-column", "gap-2"], [1, "input-group-text", "bg-success-subtle", "text-success"], ["type", "text", "placeholder", "e.g. Certified Mountain Guide, Forest Permits & Camping Tents", 1, "form-control", "modern-input", 3, "formControl"], [1, "form-label", "fw-bold", "mb-0", "text-danger"], [1, "bi", "bi-x-circle-fill", "me-1"], [1, "input-group-text", "bg-danger-subtle", "text-danger"], ["type", "text", "placeholder", "e.g. Personal Porterage, Travel Insurance, Extra Food Items", 1, "form-control", "modern-input", 3, "formControl"], ["type", "text", "placeholder", "e.g. 2L Reusable Water Bottle, High-Traction Trek Shoes", 1, "form-control", "modern-input", 3, "formControlName"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "text-muted", "small"], ["type", "text", "placeholder", "e.g. Strict No-Smoking & Zero Plastic litter policy in reserve forest", 1, "form-control", "modern-input", 3, "formControlName"], [1, "bi", "bi-images"], [1, "col-12", "col-md-5"], [1, "form-label", "fw-bold"], ["class", "dropzone-box", 3, "click", 4, "ngIf"], ["class", "image-preview-card", 4, "ngIf"], [1, "col-12", "col-md-7"], [1, "form-label", "fw-bold", "mb-0"], ["type", "file", "accept", "image/*", "multiple", "", "hidden", "", 3, "change"], ["class", "gallery-grid", 4, "ngIf"], ["class", "dropzone-box py-4 text-center mt-2", 3, "click", 4, "ngIf"], [1, "dropzone-box", 3, "click"], [1, "bi", "bi-cloud-arrow-up", "display-4", "text-primary", "mb-2"], [1, "fw-bold", "mb-1"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "image-preview-card"], ["alt", "Cover Preview", 1, "cover-img", "rounded", 3, "src"], ["type", "button", 1, "btn-remove-img", 3, "click"], [1, "bi", "bi-x-lg"], [1, "cover-badge"], [1, "gallery-grid"], ["class", "gallery-thumb-card", 4, "ngFor", "ngForOf"], [1, "gallery-thumb-card"], ["alt", "Gallery photo", 1, "thumb-img", "rounded", 3, "src"], ["type", "button", 1, "btn-remove-thumb", 3, "click"], [1, "dropzone-box", "py-4", "text-center", "mt-2", 3, "click"], [1, "bi", "bi-camera-fill", "fs-2", "text-muted", "mb-1"], ["formGroupName", "coupon", 1, "section-card", "mb-4"], [1, "bi", "bi-tag-fill"], [1, "form-check", "form-switch", "fs-5"], ["type", "checkbox", "formControlName", "enabled", "id", "enableCouponToggle", 1, "form-check-input"], ["class", "section-body", 4, "ngIf"], ["class", "section-body text-muted text-center py-4", 4, "ngIf"], ["type", "submit", 1, "btn-app", "btn-primary", 3, "disabled"], [1, "col-12", "col-sm-6", "col-md-4"], ["type", "text", "formControlName", "code", "placeholder", "e.g. SUMMIT2026", 1, "form-control", "modern-input", "text-uppercase", "fw-bold"], ["formControlName", "discountType", 1, "form-select", "modern-select"], ["value", "percentage"], ["value", "flat"], ["type", "number", "min", "1", "formControlName", "discountValue", "placeholder", "10", 1, "form-control", "modern-input"], ["type", "number", "min", "0", "formControlName", "minBookingAmount", "placeholder", "0", 1, "form-control", "modern-input"], ["type", "number", "min", "0", "formControlName", "maxDiscountAmount", "placeholder", "Optional cap", 1, "form-control", "modern-input"], ["type", "number", "min", "1", "formControlName", "usageLimit", "placeholder", "e.g. 50", 1, "form-control", "modern-input"], [1, "section-body", "text-muted", "text-center", "py-4"], [1, "bi", "bi-tag", "fs-2", "text-muted", "mb-2", "d-block"], [1, "bi", "bi-check2-circle", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-geo-alt-fill", "text-primary", "me-1"], [1, "bi", "bi-currency-rupee", "text-warning", "me-1"], [1, "draft-indicator"], [1, "bi", "bi-cloud-check-fill", "text-success", "me-1"], [1, "small", "text-muted"]], template: function TrekAddComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "app-admin-shell", 3);
    \u0275\u0275template(2, TrekAddComponent_div_2_Template, 23, 0, "div", 4)(3, TrekAddComponent_div_3_Template, 7, 0, "div", 5)(4, TrekAddComponent_div_4_Template, 4, 3, "div", 6);
    \u0275\u0275elementStart(5, "div", 7)(6, "div", 8);
    \u0275\u0275template(7, TrekAddComponent_button_7_Template, 5, 7, "button", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 10);
    \u0275\u0275listener("ngSubmit", function TrekAddComponent_Template_form_ngSubmit_8_listener() {
      return ctx.saveTrek();
    });
    \u0275\u0275template(9, TrekAddComponent_div_9_Template, 77, 17, "div", 11)(10, TrekAddComponent_div_10_Template, 22, 1, "div", 11)(11, TrekAddComponent_div_11_Template, 40, 2, "div", 11)(12, TrekAddComponent_div_12_Template, 42, 6, "div", 11)(13, TrekAddComponent_div_13_Template, 34, 5, "div", 11)(14, TrekAddComponent_div_14_Template, 21, 5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "div", 15);
    \u0275\u0275template(18, TrekAddComponent_div_18_Template, 4, 1, "div", 16);
    \u0275\u0275elementStart(19, "div", 17);
    \u0275\u0275element(20, "i", 18);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 17);
    \u0275\u0275element(24, "i", 19);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, TrekAddComponent_div_27_Template, 5, 3, "div", 16)(28, TrekAddComponent_div_28_Template, 5, 4, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21)(30, "button", 22);
    \u0275\u0275listener("click", function TrekAddComponent_Template_button_click_30_listener() {
      return ctx.cancel();
    });
    \u0275\u0275text(31, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 23);
    \u0275\u0275listener("click", function TrekAddComponent_Template_button_click_32_listener() {
      return ctx.saveTrek();
    });
    \u0275\u0275template(33, TrekAddComponent_span_33_Template, 3, 0, "span", 24)(34, TrekAddComponent_span_34_Template, 3, 0, "span", 24);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isUploadingExcel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isUploadingExcel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.statusMessage);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.sections);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.addTrekForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeSection === "basic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeSection === "batches");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeSection === "itinerary");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeSection === "gear");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeSection === "media");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.activeSection === "promotions");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_11_0 = ctx.addTrekForm.get("name")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx.totalBatchesCount, " Batch", ctx.totalBatchesCount > 1 ? "es" : "");
    \u0275\u0275advance();
    \u0275\u0275classProp("highlight", ctx.totalCaptainsAssigned > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx.totalCaptainsAssigned, "/", ctx.totalBatchesCount, " Captains Assigned");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.minTrekPrice > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.lastAutoSavedAt);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSaving);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, AdminShellComponent, DecimalPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.excel-hero-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b 0%,\n      #047857 50%,\n      #0d9488 100%);\n  color: #ffffff;\n  border-radius: 16px;\n  padding: 24px 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n  box-shadow: 0 10px 25px rgba(6, 78, 59, 0.2);\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-icon-pulse[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 3px 10px;\n  border-radius: 20px;\n  margin-bottom: 6px;\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: #ffffff;\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-left[_ngcontent-%COMP%]   .hero-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  opacity: 0.9;\n  margin: 0;\n  max-width: 560px;\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-app.btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-app.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-app.btn-primary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #064e3b;\n  font-weight: 700;\n  border: none;\n}\n.excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-app.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.excel-loading-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px dashed #1d7a6d;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.status-banner[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.status-banner.status-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.status-banner.status-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.status-banner.status-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.nav-stepper-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 8px 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid transparent;\n  color: #64748b;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill.active[_ngcontent-%COMP%] {\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-color: rgba(29, 122, 109, 0.25);\n  font-weight: 700;\n}\n.nav-stepper-container[_ngcontent-%COMP%]   .stepper-scroll[_ngcontent-%COMP%]   .step-pill[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%] {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-size: 0.72rem;\n  padding: 2px 7px;\n  border-radius: 12px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background:\n    linear-gradient(\n      180deg,\n      #fafbfc 0%,\n      #ffffff 100%);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: #64748b;\n}\n.section-card[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.section-card[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.modern-input[_ngcontent-%COMP%], \n.modern-select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  transition: all 0.2s ease;\n}\n.modern-input[_ngcontent-%COMP%]:focus, \n.modern-select[_ngcontent-%COMP%]:focus {\n  border-color: #1d7a6d;\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.15);\n}\n.batch-panel[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  transition: all 0.2s ease;\n}\n.batch-panel[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.batch-panel[_ngcontent-%COMP%]   .batch-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.batch-panel[_ngcontent-%COMP%]   .batch-panel-header[_ngcontent-%COMP%]   .batch-badge[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #0f172a;\n  background: #ffffff;\n  padding: 4px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.captain-subcard[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(29, 122, 109, 0.2) !important;\n  box-shadow: 0 2px 8px rgba(29, 122, 109, 0.05);\n}\n.captain-subcard[_ngcontent-%COMP%]   .captain-icon-badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.day-timeline-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n}\n.day-timeline-card[_ngcontent-%COMP%]   .day-pill[_ngcontent-%COMP%] {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 12px;\n  border-radius: 8px;\n  white-space: nowrap;\n}\n.waypoint-row[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.dropzone-box[_ngcontent-%COMP%] {\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  padding: 30px 20px;\n  text-align: center;\n  background: #f8fafc;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dropzone-box[_ngcontent-%COMP%]:hover {\n  border-color: #1d7a6d;\n  background: rgba(29, 122, 109, 0.08);\n}\n.image-preview-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.image-preview-card[_ngcontent-%COMP%]   .cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n.image-preview-card[_ngcontent-%COMP%]   .btn-remove-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.image-preview-card[_ngcontent-%COMP%]   .btn-remove-img[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.image-preview-card[_ngcontent-%COMP%]   .cover-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  gap: 12px;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .btn-remove-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.gallery-grid[_ngcontent-%COMP%]   .gallery-thumb-card[_ngcontent-%COMP%]   .btn-remove-thumb[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.sticky-form-footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-top: 1px solid #e2e8f0;\n  padding: 14px 20px;\n  z-index: 99;\n  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);\n}\n.sticky-form-footer[_ngcontent-%COMP%]   .summary-chip[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 0.82rem;\n  color: #0f172a;\n  display: inline-flex;\n  align-items: center;\n}\n.sticky-form-footer[_ngcontent-%COMP%]   .summary-chip.highlight[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #065f46;\n  font-weight: 600;\n}\n.btn-app[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 18px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn-app.btn-primary[_ngcontent-%COMP%] {\n  background: #1d7a6d;\n  color: #ffffff;\n}\n.btn-app.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #124842;\n}\n.btn-app.btn-ghost[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #e2e8f0;\n}\n.btn-app.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.btn-app.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n@media (max-width: 768px) {\n  .excel-hero-card[_ngcontent-%COMP%] {\n    padding: 18px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .excel-hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-app[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .section-card[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .section-card[_ngcontent-%COMP%]   .section-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .sticky-form-footer[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n}\n/*# sourceMappingURL=trek-add.component.css.map */"] });
var TrekAddComponent = _TrekAddComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekAddComponent, [{
    type: Component,
    args: [{ selector: "app-trek-add", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AdminShellComponent
    ], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div>
  <app-admin-shell
    title="Add Trek & Batches"
    subtitle="Configure trek itinerary, pricing, elevation profile, and assign batch captains."
    sectionLabel="Treks">

    <!-- HERO EXCEL & QUICK TOOLS BANNER -->
    <div class="excel-hero-card mb-4" *ngIf="!isUploadingExcel">
      <div class="hero-left">
        <div class="hero-icon-pulse">
          <i class="bi bi-file-earmark-excel-fill"></i>
        </div>
        <div>
          <div class="hero-badge">\u26A1 Quick Batch Import</div>
          <h3 class="hero-title">Bulk Create Treks & Batches</h3>
          <p class="hero-desc">Import multi-batch schedules, itineraries, and assigned Captain contacts from Excel in one click.</p>
        </div>
      </div>

      <div class="hero-actions">
        <button type="button" class="btn-app btn-ghost btn-sm" (click)="downloadTemplate()" title="Download Multi-Batch Template">
          <i class="bi bi-download me-1"></i> Multi-Batch Template
        </button>
        <button type="button" class="btn-app btn-ghost btn-sm" (click)="downloadSingleBatchTemplate()" title="Download Single Batch Template">
          <i class="bi bi-file-earmark me-1"></i> Single Batch
        </button>
        <button type="button" class="btn-app btn-primary btn-sm" (click)="excelFileInput.click()">
          <i class="bi bi-cloud-arrow-up-fill me-1"></i> Upload Excel
        </button>
        <input #excelFileInput type="file" accept=".xlsx,.xls" hidden (change)="onExcelFileSelect($event)" />
      </div>
    </div>

    <!-- EXCEL LOADING OVERLAY -->
    <div class="excel-loading-card mb-4" *ngIf="isUploadingExcel">
      <div class="spinner-border text-primary me-3" role="status"></div>
      <div>
        <h5 class="mb-1">Parsing Excel & Generating Batches...</h5>
        <p class="text-muted mb-0">Populating dates, itineraries, and captain assignments.</p>
      </div>
    </div>

    <!-- STATUS BANNER -->
    <div class="status-banner mb-3" *ngIf="statusMessage" [ngClass]="'status-' + statusTone">
      <i class="bi" [ngClass]="statusTone === 'success' ? 'bi-check-circle-fill' : statusTone === 'warning' ? 'bi-exclamation-triangle-fill' : 'bi-x-circle-fill'"></i>
      <span>{{ statusMessage }}</span>
    </div>

    <!-- STEPPER / TAB NAVIGATION BAR -->
    <div class="nav-stepper-container mb-4">
      <div class="stepper-scroll">
        <button
          *ngFor="let sec of sections"
          type="button"
          class="step-pill"
          [class.active]="activeSection === sec.id"
          (click)="setActiveSection(sec.id)">
          <i class="bi {{ sec.icon }} me-2"></i>
          <span>{{ sec.label }}</span>
          <span class="step-badge" *ngIf="sec.id === 'batches'">{{ batches.length }}</span>
        </button>
      </div>
    </div>

    <!-- FORM WRAPPER -->
    <form [formGroup]="addTrekForm" (ngSubmit)="saveTrek()" class="form-container">

      <!-- ==========================================
           SECTION 1: TREK BASICS & OVERVIEW
           ========================================== -->
      <div class="section-card mb-4" *ngIf="activeSection === 'basic'">
        <div class="section-header">
          <div class="header-icon"><i class="bi bi-geo-alt-fill"></i></div>
          <div class="header-text">
            <h4 class="mb-0">1. Trek Basics & Classification</h4>
            <p class="mb-0">Core destination metadata and physical difficulty parameters</p>
          </div>
        </div>

        <div class="section-body">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <label class="form-label">Trek Title <span class="text-danger">*</span></label>
              <input
                type="text"
                class="form-control modern-input"
                [class.is-invalid]="isInvalid('name')"
                formControlName="name"
                placeholder="e.g. Kudremukh Peak Expedition" />
              <div class="invalid-feedback" *ngIf="isInvalid('name')">Trek title is required.</div>
            </div>

            <div class="col-12 col-md-6">
              <label class="form-label">Location / Region <span class="text-danger">*</span></label>
              <input
                type="text"
                class="form-control modern-input"
                [class.is-invalid]="isInvalid('location')"
                formControlName="location"
                placeholder="e.g. Chikmagalur, Western Ghats" />
              <div class="invalid-feedback" *ngIf="isInvalid('location')">Location is required.</div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <label class="form-label">Difficulty <span class="text-danger">*</span></label>
              <select class="form-select modern-select" [class.is-invalid]="isInvalid('difficulty')" formControlName="difficulty">
                <option value="" disabled selected>Select Difficulty</option>
                <option *ngFor="let d of difficulties" [value]="d">{{ d }}</option>
              </select>
              <div class="invalid-feedback" *ngIf="isInvalid('difficulty')">Select a difficulty level.</div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <label class="form-label">Category <span class="text-danger">*</span></label>
              <select class="form-select modern-select" [class.is-invalid]="isInvalid('category')" formControlName="category">
                <option value="" disabled selected>Select Category</option>
                <option *ngFor="let c of categories" [value]="c">{{ c }}</option>
              </select>
              <div class="invalid-feedback" *ngIf="isInvalid('category')">Select a category.</div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <label class="form-label">Collection / Series</label>
              <select class="form-select modern-select" formControlName="collection">
                <option value="">None / Standard</option>
                <option *ngFor="let col of collections" [value]="col">{{ col }}</option>
              </select>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <label class="form-label">Fitness Level Required</label>
              <select class="form-select modern-select" formControlName="fitnessLevel">
                <option value="">Recommended / Any</option>
                <option *ngFor="let f of fitnessLevels" [value]="f">{{ f }}</option>
              </select>
            </div>

            <div class="col-12">
              <label class="form-label">Description & Experience Summary</label>
              <textarea
                class="form-control modern-input"
                rows="4"
                formControlName="description"
                placeholder="Describe the landscape, viewpoints, trail highlights, and what makes this trek extraordinary..."></textarea>
            </div>

            <!-- HIGHLIGHTS ARRAY -->
            <div class="col-12 mt-4">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <label class="form-label mb-0 fw-bold"><i class="bi bi-stars text-warning me-1"></i> Key Highlights</label>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addHighlight()">
                  <i class="bi bi-plus-circle me-1"></i> Add Highlight
                </button>
              </div>

              <div formArrayName="highlights" class="d-flex flex-column gap-2">
                <div *ngFor="let h of highlights.controls; let i = index" class="input-group">
                  <span class="input-group-text bg-light text-muted">#{{ i + 1 }}</span>
                  <input type="text" class="form-control modern-input" [formControlName]="i" placeholder="e.g. 360\xB0 Shola Grassland Panorama & Waterfalls" />
                  <button type="button" class="btn btn-outline-danger" (click)="removeHighlight(i)" [disabled]="highlights.length <= 1">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-footer">
          <button type="button" class="btn-app btn-primary ms-auto" (click)="setActiveSection('batches')">
            Next: Batches & Captains <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      <!-- ==========================================
           SECTION 2: BATCHES & CAPTAIN CONTACTS
           ========================================== -->
      <div class="section-card mb-4" *ngIf="activeSection === 'batches'">
        <div class="section-header d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="header-icon"><i class="bi bi-people-fill"></i></div>
            <div class="header-text">
              <h4 class="mb-0">2. Batches & Assigned Captains</h4>
              <p class="mb-0">Manage batch dates, slots, pricing, and assign Trek Captains with direct contact details.</p>
            </div>
          </div>
          <button type="button" class="btn-app btn-primary btn-sm" (click)="addBatch()">
            <i class="bi bi-plus-lg me-1"></i> Add New Batch
          </button>
        </div>

        <div class="section-body" formArrayName="batches">
          <div *ngFor="let b of batches.controls; let i = index" [formGroupName]="i" class="batch-panel mb-4">
            
            <!-- BATCH PANEL HEADER -->
            <div class="batch-panel-header">
              <div class="d-flex align-items-center gap-2">
                <span class="batch-badge">Batch #{{ i + 1 }}</span>
                <span class="badge bg-success-subtle text-success border border-success-subtle" *ngIf="b.get('batchStatus')?.value === 'active'">Active</span>
                <span class="badge bg-warning-subtle text-warning border border-warning-subtle" *ngIf="b.get('batchStatus')?.value === 'inactive'">Inactive</span>
              </div>
              <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeBatch(i)" [disabled]="batches.length <= 1" title="Delete Batch">
                <i class="bi bi-trash me-1"></i> Remove Batch
              </button>
            </div>

            <!-- BATCH SCHEDULE & CAPACITY -->
            <div class="row g-3 mt-2">
              <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label">Start Date <span class="text-danger">*</span></label>
                <input type="date" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'startDate')" formControlName="startDate" />
                <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'startDate')">Required.</div>
              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label">End Date <span class="text-danger">*</span></label>
                <input type="date" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'endDate')" formControlName="endDate" />
                <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'endDate')">Required.</div>
              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label">Available Slots <span class="text-danger">*</span></label>
                <input type="number" min="1" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'availableSlots')" formControlName="availableSlots" placeholder="e.g. 25" />
                <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'availableSlots')">Required.</div>
              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label">Price per Person (\u20B9) <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-light">\u20B9</span>
                  <input type="number" min="0" class="form-control modern-input" [class.is-invalid]="isBatchFieldInvalid(i, 'price')" formControlName="price" placeholder="3499" />
                </div>
                <div class="invalid-feedback" *ngIf="isBatchFieldInvalid(i, 'price')">Required.</div>
              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label">Duration Label</label>
                <input type="text" class="form-control modern-input" formControlName="duration" placeholder="e.g. 2 Days / 1 Night" />
              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <label class="form-label">Batch Status <span class="text-danger">*</span></label>
                <select class="form-select modern-select" [class.is-invalid]="isBatchFieldInvalid(i, 'batchStatus')" formControlName="batchStatus">
                  <option value="" disabled>Select Status</option>
                  <option *ngFor="let s of batchStatuses" [value]="s">{{ s }}</option>
                </select>
              </div>

              <div class="col-6 col-md-3">
                <label class="form-label">Min - Max Age</label>
                <div class="d-flex gap-1">
                  <input type="number" class="form-control modern-input text-center" formControlName="minAge" placeholder="Min (12)" />
                  <input type="number" class="form-control modern-input text-center" formControlName="maxAge" placeholder="Max (65)" />
                </div>
              </div>

              <div class="col-6 col-md-3">
                <label class="form-label">Min - Max Participants</label>
                <div class="d-flex gap-1">
                  <input type="number" class="form-control modern-input text-center" formControlName="minParticipants" placeholder="Min (5)" />
                  <input type="number" class="form-control modern-input text-center" formControlName="maxParticipants" placeholder="Max (30)" />
                </div>
              </div>
            </div>

            <!-- CAPTAIN / TREK LEADER CARD (NEW DEDICATED SECTION) -->
            <div class="captain-subcard mt-4 p-3 rounded border">
              <div class="d-flex align-items-center gap-2 mb-3">
                <div class="captain-icon-badge"><i class="bi bi-person-badge-fill"></i></div>
                <div>
                  <h6 class="mb-0 fw-bold">Trek Captain & Emergency Contacts for Batch #{{ i + 1 }}</h6>
                  <p class="text-muted small mb-0">Assigned leader details shared with booked participants on confirmation & WhatsApp roster.</p>
                </div>
              </div>

              <div class="row g-3">
                <div class="col-12 col-md-4">
                  <label class="form-label">Captain / Leader Name</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light"><i class="bi bi-person-fill"></i></span>
                    <input type="text" class="form-control modern-input" formControlName="captainName" placeholder="e.g. Captain Jagadish / Arjun" />
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <label class="form-label">Captain Contact / WhatsApp Phone</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light"><i class="bi bi-telephone-fill"></i></span>
                    <input type="tel" class="form-control modern-input" formControlName="captainPhone" placeholder="e.g. +91 98765 43210" />
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <label class="form-label">Captain Email / Alt Contact</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light"><i class="bi bi-envelope-fill"></i></span>
                    <input type="email" class="form-control modern-input" formControlName="captainEmail" placeholder="e.g. captain@gowild.in" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="section-footer d-flex justify-content-between">
          <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('basic')">
            <i class="bi bi-arrow-left me-1"></i> Back to Basics
          </button>
          <button type="button" class="btn-app btn-primary" (click)="setActiveSection('itinerary')">
            Next: Itinerary & Waypoints <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      <!-- ==========================================
           SECTION 3: ITINERARY & ELEVATION WAYPOINTS
           ========================================== -->
      <div class="section-card mb-4" *ngIf="activeSection === 'itinerary'">
        <div class="section-header">
          <div class="header-icon"><i class="bi bi-map-fill"></i></div>
          <div class="header-text">
            <h4 class="mb-0">3. Day-by-Day Itinerary & Elevation Profile</h4>
            <p class="mb-0">Schedule activities for each day and establish checkpoint milestones.</p>
          </div>
        </div>

        <div class="section-body">
          
          <!-- ITINERARY DAYS BUILDER (For Primary Batch) -->
          <div class="mb-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="fw-bold mb-0"><i class="bi bi-calendar-event me-2 text-primary"></i>Day-by-Day Schedule (Batch #1)</h5>
              <button type="button" class="btn-app btn-ghost btn-sm" (click)="addItineraryDay(0)">
                <i class="bi bi-plus-circle me-1"></i> Add Day
              </button>
            </div>

            <div *ngIf="batches.length > 0" class="d-flex flex-column gap-3">
              <div *ngFor="let day of getItineraryDays(0).controls; let dIndex = index" class="day-timeline-card p-3 rounded border">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <div class="d-flex align-items-center gap-2 flex-grow-1 me-3" [formGroup]="$any(day)">
                    <span class="day-pill">Day {{ dIndex + 1 }}</span>
                    <input type="text" class="form-control modern-input" formControlName="title" placeholder="e.g. Bangalore Departure & Basecamp Acclimatization" />
                  </div>
                  <div class="d-flex gap-1">
                    <button type="button" class="btn btn-outline-primary btn-sm" (click)="addActivity(0, dIndex)">
                      <i class="bi bi-plus-lg me-1"></i> Activity
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeItineraryDay(0, dIndex)" [disabled]="getItineraryDays(0).length <= 1">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>

                <!-- ACTIVITIES FOR THIS DAY -->
                <div class="activities-list mt-2 ps-3 border-start">
                  <div *ngFor="let act of getActivities(0, dIndex).controls; let aIndex = index" [formGroup]="$any(act)" class="d-flex gap-2 align-items-center mb-2">
                    <input type="time" class="form-control modern-input" style="max-width: 140px;" formControlName="activityTime" />
                    <input type="text" class="form-control modern-input flex-grow-1" formControlName="activityText" placeholder="e.g. Arrive at Chikmagalur, brief safety orientation & breakfast" />
                    <button type="button" class="btn btn-link text-danger p-0" (click)="removeActivity(0, dIndex, aIndex)">
                      <i class="bi bi-x-circle-fill fs-5"></i>
                    </button>
                  </div>
                  <div *ngIf="getActivities(0, dIndex).length === 0" class="text-muted small py-1">
                    No timestamped activities added yet. Click "+ Activity" above to add time slots.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <!-- ELEVATION WAYPOINTS MATRIX -->
          <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div>
                <h5 class="fw-bold mb-0"><i class="bi bi-activity me-2 text-success"></i>Elevation Profile & Trail Checkpoints</h5>
                <p class="text-muted small mb-0">Renders the interactive SVG elevation chart on user discovery and booking pages.</p>
              </div>
              <button type="button" class="btn-app btn-ghost btn-sm" (click)="addWaypoint()">
                <i class="bi bi-plus-circle me-1"></i> Add Checkpoint
              </button>
            </div>

            <div formArrayName="elevationWaypoints" class="d-flex flex-column gap-2">
              <div *ngFor="let wp of elevationWaypoints.controls; let wIndex = index" [formGroupName]="wIndex" class="waypoint-row p-2 rounded border bg-light d-flex flex-wrap align-items-center gap-2">
                <span class="badge bg-secondary">#{{ wIndex + 1 }}</span>
                
                <div class="input-group" style="width: 140px;">
                  <span class="input-group-text bg-white small">KM</span>
                  <input type="number" step="0.1" min="0" class="form-control modern-input text-center" formControlName="km" placeholder="0.0" />
                </div>

                <div class="input-group" style="width: 160px;">
                  <span class="input-group-text bg-white small">Elev (m)</span>
                  <input type="number" min="0" class="form-control modern-input text-center" formControlName="elevation" placeholder="950" />
                </div>

                <input type="text" class="form-control modern-input flex-grow-1" style="min-width: 160px;" formControlName="name" placeholder="Checkpoint Name (e.g. Ridge Summit)" />
                <input type="text" class="form-control modern-input flex-grow-1" style="min-width: 180px;" formControlName="note" placeholder="Short milestone note..." />

                <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeWaypoint(wIndex)" [disabled]="elevationWaypoints.length <= 2">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div class="section-footer d-flex justify-content-between">
          <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('batches')">
            <i class="bi bi-arrow-left me-1"></i> Back to Batches
          </button>
          <button type="button" class="btn-app btn-primary" (click)="setActiveSection('gear')">
            Next: Checklist & Inclusions <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      <!-- ==========================================
           SECTION 4: CHECKLIST, INCLUSIONS & NOTES
           ========================================== -->
      <div class="section-card mb-4" *ngIf="activeSection === 'gear'">
        <div class="section-header">
          <div class="header-icon"><i class="bi bi-backpack-fill"></i></div>
          <div class="header-text">
            <h4 class="mb-0">4. Inclusions, Things to Carry & Advisory Notes</h4>
            <p class="mb-0">Essential gear checklist and transparent package pricing breakdown.</p>
          </div>
        </div>

        <div class="section-body">
          <div class="row g-4">
            
            <!-- INCLUSIONS & EXCLUSIONS -->
            <div class="col-12 col-lg-6" *ngIf="batches.length > 0">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <label class="form-label fw-bold mb-0 text-success"><i class="bi bi-check-circle-fill me-1"></i> Inclusions</label>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addInclusion(0)">
                  <i class="bi bi-plus-lg me-1"></i> Add
                </button>
              </div>
              <div class="d-flex flex-column gap-2">
                <div *ngFor="let inc of getInclusions(0).controls; let ii = index" class="input-group">
                  <span class="input-group-text bg-success-subtle text-success">\u2713</span>
                  <input type="text" class="form-control modern-input" [formControl]="asFormControl(getInclusions(0).at(ii))" placeholder="e.g. Certified Mountain Guide, Forest Permits & Camping Tents" />
                  <button type="button" class="btn btn-outline-danger" (click)="removeInclusion(0, ii)" [disabled]="getInclusions(0).length <= 1">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6" *ngIf="batches.length > 0">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <label class="form-label fw-bold mb-0 text-danger"><i class="bi bi-x-circle-fill me-1"></i> Exclusions</label>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addExclusion(0)">
                  <i class="bi bi-plus-lg me-1"></i> Add
                </button>
              </div>
              <div class="d-flex flex-column gap-2">
                <div *ngFor="let exc of getExclusions(0).controls; let ei = index" class="input-group">
                  <span class="input-group-text bg-danger-subtle text-danger">\u2715</span>
                  <input type="text" class="form-control modern-input" [formControl]="asFormControl(getExclusions(0).at(ei))" placeholder="e.g. Personal Porterage, Travel Insurance, Extra Food Items" />
                  <button type="button" class="btn btn-outline-danger" (click)="removeExclusion(0, ei)" [disabled]="getExclusions(0).length <= 1">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- THINGS TO CARRY -->
            <div class="col-12 col-lg-6">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <label class="form-label fw-bold mb-0 text-primary"><i class="bi bi-backpack2-fill me-1"></i> Things to Carry Checklist</label>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addThingToCarry()">
                  <i class="bi bi-plus-lg me-1"></i> Add Item
                </button>
              </div>
              <div formArrayName="thingsToCarry" class="d-flex flex-column gap-2">
                <div *ngFor="let t of thingsToCarry.controls; let ti = index" class="input-group">
                  <span class="input-group-text bg-light">\u{1F392}</span>
                  <input type="text" class="form-control modern-input" [formControlName]="ti" placeholder="e.g. 2L Reusable Water Bottle, High-Traction Trek Shoes" />
                  <button type="button" class="btn btn-outline-danger" (click)="removeThingToCarry(ti)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
                <div *ngIf="thingsToCarry.length === 0" class="text-muted small">No custom items added. Click "+ Add Item" above.</div>
              </div>
            </div>

            <!-- IMPORTANT NOTES -->
            <div class="col-12 col-lg-6">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <label class="form-label fw-bold mb-0 text-warning"><i class="bi bi-exclamation-triangle-fill me-1"></i> Important Guidelines & Rules</label>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="addImportantNote()">
                  <i class="bi bi-plus-lg me-1"></i> Add Note
                </button>
              </div>
              <div formArrayName="importantNotes" class="d-flex flex-column gap-2">
                <div *ngFor="let n of importantNotes.controls; let ni = index" class="input-group">
                  <span class="input-group-text bg-light">\u26A0\uFE0F</span>
                  <input type="text" class="form-control modern-input" [formControlName]="ni" placeholder="e.g. Strict No-Smoking & Zero Plastic litter policy in reserve forest" />
                  <button type="button" class="btn btn-outline-danger" (click)="removeImportantNote(ni)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
                <div *ngIf="importantNotes.length === 0" class="text-muted small">No advisory notes added. Click "+ Add Note" above.</div>
              </div>
            </div>

          </div>
        </div>

        <div class="section-footer d-flex justify-content-between">
          <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('itinerary')">
            <i class="bi bi-arrow-left me-1"></i> Back to Itinerary
          </button>
          <button type="button" class="btn-app btn-primary" (click)="setActiveSection('media')">
            Next: Media & Gallery <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      <!-- ==========================================
           SECTION 5: MEDIA & GALLERY DROPZONE
           ========================================== -->
      <div class="section-card mb-4" *ngIf="activeSection === 'media'">
        <div class="section-header">
          <div class="header-icon"><i class="bi bi-images"></i></div>
          <div class="header-text">
            <h4 class="mb-0">5. Cover Image & Gallery Media</h4>
            <p class="mb-0">Upload high-resolution photography for trek card covers and detail sliders.</p>
          </div>
        </div>

        <div class="section-body">
          <div class="row g-4">
            
            <!-- COVER IMAGE DROPZONE -->
            <div class="col-12 col-md-5">
              <label class="form-label fw-bold">Featured Cover Image (Hero)</label>
              
              <div class="dropzone-box" (click)="coverFileInput.click()" *ngIf="!coverPreview">
                <i class="bi bi-cloud-arrow-up display-4 text-primary mb-2"></i>
                <h6 class="fw-bold mb-1">Click to Upload Cover Photo</h6>
                <p class="text-muted small mb-0">Recommended: 1920x1080px (16:9), PNG/JPG/WEBP</p>
                <input #coverFileInput type="file" accept="image/*" hidden (change)="onCoverImageChange($event)" />
              </div>

              <div class="image-preview-card" *ngIf="coverPreview">
                <img [src]="coverPreview" alt="Cover Preview" class="cover-img rounded" />
                <button type="button" class="btn-remove-img" (click)="removeCoverImage()">
                  <i class="bi bi-x-lg"></i>
                </button>
                <div class="cover-badge">Featured Cover</div>
              </div>
            </div>

            <!-- GALLERY DROPZONE -->
            <div class="col-12 col-md-7">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <label class="form-label fw-bold mb-0">Gallery Visuals ({{ galleryPreviews.length }} uploaded)</label>
                <button type="button" class="btn-app btn-ghost btn-sm" (click)="galleryFileInput.click()">
                  <i class="bi bi-plus-lg me-1"></i> Add Images
                </button>
                <input #galleryFileInput type="file" accept="image/*" multiple hidden (change)="onGalleryImagesChange($event)" />
              </div>

              <div class="gallery-grid" *ngIf="galleryPreviews.length > 0">
                <div *ngFor="let preview of galleryPreviews; let gIndex = index" class="gallery-thumb-card">
                  <img [src]="preview" alt="Gallery photo" class="thumb-img rounded" />
                  <button type="button" class="btn-remove-thumb" (click)="removeGalleryImage(gIndex)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>

              <div class="dropzone-box py-4 text-center mt-2" (click)="galleryFileInput.click()" *ngIf="galleryPreviews.length === 0">
                <i class="bi bi-camera-fill fs-2 text-muted mb-1"></i>
                <p class="text-muted small mb-0">Upload multi-angle trail photos, waterfalls, campsites & summit panoramas.</p>
              </div>
            </div>

          </div>
        </div>

        <div class="section-footer d-flex justify-content-between">
          <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('gear')">
            <i class="bi bi-arrow-left me-1"></i> Back to Checklist
          </button>
          <button type="button" class="btn-app btn-primary" (click)="setActiveSection('promotions')">
            Next: Coupons & Discounts <i class="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      <!-- ==========================================
           SECTION 6: PROMOTIONS & COUPONS
           ========================================== -->
      <div class="section-card mb-4" *ngIf="activeSection === 'promotions'" formGroupName="coupon">
        <div class="section-header d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="header-icon"><i class="bi bi-tag-fill"></i></div>
            <div class="header-text">
              <h4 class="mb-0">6. Trek Launch Promotion & Coupon (Optional)</h4>
              <p class="mb-0">Create an introductory discount or early-bird promotional code for this trek.</p>
            </div>
          </div>
          <div class="form-check form-switch fs-5">
            <input class="form-check-input" type="checkbox" formControlName="enabled" id="enableCouponToggle" />
          </div>
        </div>

        <div class="section-body" *ngIf="addTrekForm.get('coupon.enabled')?.value">
          <div class="row g-3">
            <div class="col-12 col-sm-6 col-md-4">
              <label class="form-label">Coupon Code <span class="text-danger">*</span></label>
              <input type="text" class="form-control modern-input text-uppercase fw-bold" formControlName="code" placeholder="e.g. SUMMIT2026" />
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <label class="form-label">Discount Type</label>
              <select class="form-select modern-select" formControlName="discountType">
                <option value="percentage">Percentage (%)</option>
                <option value="flat">Flat Cash (\u20B9)</option>
              </select>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <label class="form-label">Discount Value</label>
              <input type="number" min="1" class="form-control modern-input" formControlName="discountValue" placeholder="10" />
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <label class="form-label">Min Booking Amount (\u20B9)</label>
              <input type="number" min="0" class="form-control modern-input" formControlName="minBookingAmount" placeholder="0" />
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <label class="form-label">Max Discount Cap (\u20B9)</label>
              <input type="number" min="0" class="form-control modern-input" formControlName="maxDiscountAmount" placeholder="Optional cap" />
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <label class="form-label">Usage Limit (Seats)</label>
              <input type="number" min="1" class="form-control modern-input" formControlName="usageLimit" placeholder="e.g. 50" />
            </div>
          </div>
        </div>

        <div class="section-body text-muted text-center py-4" *ngIf="!addTrekForm.get('coupon.enabled')?.value">
          <i class="bi bi-tag fs-2 text-muted mb-2 d-block"></i>
          <span>Promotional coupon disabled. Toggle switch above to activate an introductory discount code.</span>
        </div>

        <div class="section-footer d-flex justify-content-between">
          <button type="button" class="btn-app btn-ghost" (click)="setActiveSection('media')">
            <i class="bi bi-arrow-left me-1"></i> Back to Media
          </button>
          <button type="submit" class="btn-app btn-primary" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="bi bi-check2-circle me-1"></i> Publish Trek & Batches</span>
            <span *ngIf="isSaving"><span class="spinner-border spinner-border-sm me-1"></span> Publishing...</span>
          </button>
        </div>
      </div>

    </form>

    <!-- STICKY BOTTOM SUBMISSION & LIVE METRICS BAR -->
    <div class="sticky-form-footer">
      <div class="container-fluid d-flex flex-wrap align-items-center justify-content-between gap-3">
        
        <!-- LIVE SUMMARY CHIPS -->
        <div class="d-flex flex-wrap align-items-center gap-2">
          <div class="summary-chip" *ngIf="addTrekForm.get('name')?.value">
            <i class="bi bi-geo-alt-fill text-primary me-1"></i>
            <strong>{{ addTrekForm.get('name')?.value }}</strong>
          </div>
          <div class="summary-chip">
            <i class="bi bi-people-fill text-info me-1"></i>
            <span>{{ totalBatchesCount }} Batch{{ totalBatchesCount > 1 ? 'es' : '' }}</span>
          </div>
          <div class="summary-chip" [class.highlight]="totalCaptainsAssigned > 0">
            <i class="bi bi-person-badge-fill text-success me-1"></i>
            <span>{{ totalCaptainsAssigned }}/{{ totalBatchesCount }} Captains Assigned</span>
          </div>
          <div class="summary-chip" *ngIf="minTrekPrice > 0">
            <i class="bi bi-currency-rupee text-warning me-1"></i>
            <span>From \u20B9{{ minTrekPrice | number }}</span>
          </div>
          <div class="draft-indicator" *ngIf="lastAutoSavedAt">
            <i class="bi bi-cloud-check-fill text-success me-1"></i>
            <span class="small text-muted">Autosaved {{ lastAutoSavedAt | date:'shortTime' }}</span>
          </div>
        </div>

        <!-- ACTION CTAS -->
        <div class="d-flex align-items-center gap-2">
          <button type="button" class="btn-app btn-ghost" (click)="cancel()">
            Cancel
          </button>
          <button type="button" class="btn-app btn-primary" (click)="saveTrek()" [disabled]="isSaving">
            <span *ngIf="!isSaving"><i class="bi bi-check2-circle me-1"></i> Save & Publish Trek</span>
            <span *ngIf="isSaving"><span class="spinner-border spinner-border-sm me-1"></span> Saving...</span>
          </button>
        </div>

      </div>
    </div>

  </app-admin-shell>
</div>
`, styles: ["/* src/app/treks/trek-add/trek-add.component.scss */\n:host {\n  display: block;\n}\n.excel-hero-card {\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b 0%,\n      #047857 50%,\n      #0d9488 100%);\n  color: #ffffff;\n  border-radius: 16px;\n  padding: 24px 28px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n  box-shadow: 0 10px 25px rgba(6, 78, 59, 0.2);\n}\n.excel-hero-card .hero-left {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n}\n.excel-hero-card .hero-left .hero-icon-pulse {\n  width: 54px;\n  height: 54px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.excel-hero-card .hero-left .hero-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 3px 10px;\n  border-radius: 20px;\n  margin-bottom: 6px;\n}\n.excel-hero-card .hero-left .hero-title {\n  font-size: 1.35rem;\n  font-weight: 700;\n  margin: 0 0 4px 0;\n  color: #ffffff;\n}\n.excel-hero-card .hero-left .hero-desc {\n  font-size: 0.88rem;\n  opacity: 0.9;\n  margin: 0;\n  max-width: 560px;\n}\n.excel-hero-card .hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.excel-hero-card .hero-actions .btn-app.btn-ghost {\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n.excel-hero-card .hero-actions .btn-app.btn-ghost:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.excel-hero-card .hero-actions .btn-app.btn-primary {\n  background: #ffffff;\n  color: #064e3b;\n  font-weight: 700;\n  border: none;\n}\n.excel-hero-card .hero-actions .btn-app.btn-primary:hover {\n  background: #f1f5f9;\n}\n.excel-loading-card {\n  background: #ffffff;\n  border: 2px dashed #1d7a6d;\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.status-banner {\n  padding: 12px 18px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.status-banner.status-success {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.status-banner.status-warning {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.status-banner.status-danger {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.nav-stepper-container {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 8px 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.nav-stepper-container .stepper-scroll {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.nav-stepper-container .stepper-scroll::-webkit-scrollbar {\n  display: none;\n}\n.nav-stepper-container .stepper-scroll .step-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid transparent;\n  color: #64748b;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nav-stepper-container .stepper-scroll .step-pill:hover {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.nav-stepper-container .stepper-scroll .step-pill.active {\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-color: rgba(29, 122, 109, 0.25);\n  font-weight: 700;\n}\n.nav-stepper-container .stepper-scroll .step-pill .step-badge {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-size: 0.72rem;\n  padding: 2px 7px;\n  border-radius: 12px;\n}\n.section-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.section-card .section-header {\n  padding: 18px 24px;\n  border-bottom: 1px solid #e2e8f0;\n  background:\n    linear-gradient(\n      180deg,\n      #fafbfc 0%,\n      #ffffff 100%);\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.section-card .section-header .header-icon {\n  width: 42px;\n  height: 42px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.section-card .section-header .header-text h4 {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.section-card .section-header .header-text p {\n  font-size: 0.84rem;\n  color: #64748b;\n}\n.section-card .section-body {\n  padding: 24px;\n}\n.section-card .section-footer {\n  padding: 16px 24px;\n  border-top: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.form-label {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n}\n.modern-input,\n.modern-select {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 0.9rem;\n  color: #0f172a;\n  transition: all 0.2s ease;\n}\n.modern-input:focus,\n.modern-select:focus {\n  border-color: #1d7a6d;\n  box-shadow: 0 0 0 3px rgba(29, 122, 109, 0.15);\n}\n.batch-panel {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 20px;\n  transition: all 0.2s ease;\n}\n.batch-panel:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.batch-panel .batch-panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.batch-panel .batch-panel-header .batch-badge {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: #0f172a;\n  background: #ffffff;\n  padding: 4px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.captain-subcard {\n  background: #ffffff;\n  border: 1px solid rgba(29, 122, 109, 0.2) !important;\n  box-shadow: 0 2px 8px rgba(29, 122, 109, 0.05);\n}\n.captain-subcard .captain-icon-badge {\n  width: 36px;\n  height: 36px;\n  background: rgba(29, 122, 109, 0.08);\n  color: #1d7a6d;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.day-timeline-card {\n  background: #ffffff;\n  border-radius: 12px;\n}\n.day-timeline-card .day-pill {\n  background: #1d7a6d;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding: 6px 12px;\n  border-radius: 8px;\n  white-space: nowrap;\n}\n.waypoint-row {\n  background: #f8fafc;\n}\n.dropzone-box {\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  padding: 30px 20px;\n  text-align: center;\n  background: #f8fafc;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dropzone-box:hover {\n  border-color: #1d7a6d;\n  background: rgba(29, 122, 109, 0.08);\n}\n.image-preview-card {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.image-preview-card .cover-img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n}\n.image-preview-card .btn-remove-img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.image-preview-card .btn-remove-img:hover {\n  background: #dc2626;\n}\n.image-preview-card .cover-badge {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  gap: 12px;\n}\n.gallery-grid .gallery-thumb-card {\n  position: relative;\n  height: 90px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.gallery-grid .gallery-thumb-card .thumb-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-grid .gallery-thumb-card .btn-remove-thumb {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: rgba(0, 0, 0, 0.65);\n  color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.gallery-grid .gallery-thumb-card .btn-remove-thumb:hover {\n  background: #dc2626;\n}\n.sticky-form-footer {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-top: 1px solid #e2e8f0;\n  padding: 14px 20px;\n  z-index: 99;\n  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.05);\n}\n.sticky-form-footer .summary-chip {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 0.82rem;\n  color: #0f172a;\n  display: inline-flex;\n  align-items: center;\n}\n.sticky-form-footer .summary-chip.highlight {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #065f46;\n  font-weight: 600;\n}\n.btn-app {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 18px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n  cursor: pointer;\n  text-decoration: none;\n}\n.btn-app.btn-primary {\n  background: #1d7a6d;\n  color: #ffffff;\n}\n.btn-app.btn-primary:hover {\n  background: #124842;\n}\n.btn-app.btn-ghost {\n  background: #f8fafc;\n  color: #0f172a;\n  border-color: #e2e8f0;\n}\n.btn-app.btn-ghost:hover {\n  background: #e2e8f0;\n}\n.btn-app.btn-sm {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n@media (max-width: 768px) {\n  .excel-hero-card {\n    padding: 18px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .excel-hero-card .hero-actions {\n    width: 100%;\n  }\n  .excel-hero-card .hero-actions .btn-app {\n    flex: 1;\n  }\n  .section-card .section-header {\n    padding: 14px 16px;\n  }\n  .section-card .section-body {\n    padding: 16px;\n  }\n  .section-card .section-footer {\n    padding: 12px 16px;\n  }\n  .sticky-form-footer {\n    padding: 10px 14px;\n  }\n}\n/*# sourceMappingURL=trek-add.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TrekAdd }, { type: Router }, { type: ExcelUploadService }, { type: DropdownManagerService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrekAddComponent, { className: "TrekAddComponent", filePath: "src/app/treks/trek-add/trek-add.component.ts", lineNumber: 30 });
})();

// src/app/treks/trek-add/trek-add-module.ts
var routes = [{ path: "", component: TrekAddComponent }];
var _TrekAddModule = class _TrekAddModule {
};
_TrekAddModule.\u0275fac = function TrekAddModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TrekAddModule)();
};
_TrekAddModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TrekAddModule });
_TrekAddModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, TrekAddComponent, RouterModule.forChild(routes)] });
var TrekAddModule = _TrekAddModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrekAddModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TrekAddComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  TrekAddModule
};
//# sourceMappingURL=trek-add-module-L6CRQTLR.js.map
