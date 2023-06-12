"use strict";
(self["webpackChunkcurrency_converter"] = self["webpackChunkcurrency_converter"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _currency_converter_currency_converter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-converter/currency-converter.component */ 3355);
/* harmony import */ var _ex_rates_tab_ex_rates_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ex-rates-tab/ex-rates-tab.component */ 5632);





class AppComponent {
  constructor() {
    this.title = 'currency-converter';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 5,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header")(2, "app-currency-converter")(3, "app-ex-rates-tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _currency_converter_currency_converter_component__WEBPACK_IMPORTED_MODULE_1__.CurrencyConverterComponent, _ex_rates_tab_ex_rates_tab_component__WEBPACK_IMPORTED_MODULE_2__.ExRatesTabComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _currency_converter_currency_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-converter/currency-converter.component */ 3355);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ex_rates_tab_ex_rates_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ex-rates-tab/ex-rates-tab.component */ 5632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _currency_converter_currency_converter_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyConverterComponent, _ex_rates_tab_ex_rates_tab_component__WEBPACK_IMPORTED_MODULE_4__.ExRatesTabComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 3355:
/*!********************************************************************!*\
  !*** ./src/app/currency-converter/currency-converter.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterComponent": () => (/* binding */ CurrencyConverterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency.service */ 7538);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);




function CurrencyConverterComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", currency_r2.cc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", currency_r2.cc, " ");
  }
}
function CurrencyConverterComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", currency_r3.cc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", currency_r3.cc, " ");
  }
}
class CurrencyConverterComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.amount1 = 0;
    this.amount2 = 0;
    this.selectedCurrency1 = '';
    this.selectedCurrency2 = '';
    this.currencies = []; // Массив для хранения списка валют
    this.exchangeRates = {}; // Объект для хранения курсов обмена валют
    this.updatedField = ''; // Переменная для хранения информации о последнем обновленном поле
  }

  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.currencies = data;
      this.selectedCurrency1 = 'USD';
      this.selectedCurrency2 = 'EUR';
      this.updateExchangeRates();
    });
  }
  updateExchangeRates() {
    this.exchangeRates = {};
    for (const currency1 of this.currencies) {
      this.exchangeRates[currency1.cc] = {};
      for (const currency2 of this.currencies) {
        if (currency1.cc !== currency2.cc) {
          this.exchangeRates[currency1.cc][currency2.cc] = currency2.rate / currency1.rate;
        }
      }
    }
    this.convertCurrency();
  }
  convertCurrency() {
    const rate1 = this.exchangeRates[this.selectedCurrency1][this.selectedCurrency2];
    const rate2 = this.exchangeRates[this.selectedCurrency2][this.selectedCurrency1];
    if (this.updatedField === 'amount1') {
      if (this.amount1 && !isNaN(this.amount1)) {
        this.amount2 = this.amount1 * rate1;
        this.amount2 = Number(this.amount2.toFixed(2));
      } else {
        this.amount2 = 0;
      }
    } else if (this.updatedField === 'amount2') {
      if (this.amount2 && !isNaN(this.amount2)) {
        this.amount1 = this.amount2 * rate2;
        this.amount1 = Number(this.amount1.toFixed(2));
      } else {
        this.amount1 = 0;
      }
    }
  }
  onAmount1Input() {
    this.updatedField = 'amount1';
    this.convertCurrency();
  }
  onAmount2Input() {
    this.updatedField = 'amount2';
    this.convertCurrency();
  }
}
CurrencyConverterComponent.ɵfac = function CurrencyConverterComponent_Factory(t) {
  return new (t || CurrencyConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService));
};
CurrencyConverterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CurrencyConverterComponent,
  selectors: [["app-currency-converter"]],
  decls: 13,
  vars: 6,
  consts: [[1, "converter"], [1, "converterBlock"], ["type", "number", 3, "ngModel", "ngModelChange", "input"], [3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function CurrencyConverterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "I have");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyConverterComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.amount1 = $event;
      })("input", function CurrencyConverterComponent_Template_input_input_4_listener() {
        return ctx.onAmount1Input();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyConverterComponent_Template_select_ngModelChange_5_listener($event) {
        return ctx.selectedCurrency1 = $event;
      })("change", function CurrencyConverterComponent_Template_select_change_5_listener() {
        return ctx.updateExchangeRates();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CurrencyConverterComponent_option_6_Template, 2, 2, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "I will get");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyConverterComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.amount2 = $event;
      })("input", function CurrencyConverterComponent_Template_input_input_10_listener() {
        return ctx.onAmount2Input();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CurrencyConverterComponent_Template_select_ngModelChange_11_listener($event) {
        return ctx.selectedCurrency2 = $event;
      })("change", function CurrencyConverterComponent_Template_select_change_11_listener() {
        return ctx.updateExchangeRates();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CurrencyConverterComponent_option_12_Template, 2, 2, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.amount1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCurrency1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currencies);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.amount2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCurrency2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currencies);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".converter[_ngcontent-%COMP%] {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  display: flex;\r\n  gap: 50px;\r\n  justify-content: center;\r\n  align-self: center;\r\n  background-color: rgb(38, 105, 86, 0.3);\r\n}\r\n\r\n.converterBlock[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      gap: 10px;\r\n}\r\n\r\n.converterBlock[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {  \r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  color: #f0f0f0;\r\n}\r\n\r\n.converterBlock[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(97, 94, 94, 0.712);\r\n  padding: 10px;\r\n  background-color: rgb(49, 48, 48);\r\n  border-radius: 5px;\r\n  color: #f0f0f0;\r\n  font-size: 18px;\r\n}\r\n\r\n.converterBlock[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(97, 94, 94, 0.712);\r\n  padding: 10px;\r\n  background-color: rgb(49, 48, 48);\r\n  border-radius: 5px;\r\n  color: #f0f0f0;\r\n  font-size: 18px;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3VycmVuY3ktY29udmVydGVyL2N1cnJlbmN5LWNvbnZlcnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBO01BQ00sYUFBYTtNQUNiLFNBQVM7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb252ZXJ0ZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDEwNSwgODYsIDAuMyk7XHJcbn1cclxuXHJcbi5jb252ZXJ0ZXJCbG9jayB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLmNvbnZlcnRlckJsb2NrIGxhYmVsIHsgIFxyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4uY29udmVydGVyQmxvY2sgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTcsIDk0LCA5NCwgMC43MTIpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OCwgNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb252ZXJ0ZXJCbG9jayBzZWxlY3Qge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTcsIDk0LCA5NCwgMC43MTIpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OCwgNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7538:
/*!*************************************!*\
  !*** ./src/app/currency.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class CurrencyService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  }
  getExchangeRates() {
    return this.http.get(this.apiUrl).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(data => console.log(data)));
  }
}
CurrencyService.ɵfac = function CurrencyService_Factory(t) {
  return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CurrencyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CurrencyService,
  factory: CurrencyService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5632:
/*!********************************************************!*\
  !*** ./src/app/ex-rates-tab/ex-rates-tab.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExRatesTabComponent": () => (/* binding */ ExRatesTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency.service */ 7538);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function ExRatesTabComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rate_r1.txt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", rate_r1.cc, " / UAH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 3, rate_r1.rate, "1.2-2"));
  }
}
class ExRatesTabComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.exchangeRates = [];
  }
  ngOnInit() {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.exchangeRates = data;
    });
  }
}
ExRatesTabComponent.ɵfac = function ExRatesTabComponent_Factory(t) {
  return new (t || ExRatesTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService));
};
ExRatesTabComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ExRatesTabComponent,
  selectors: [["app-ex-rates-tab"]],
  decls: 11,
  vars: 1,
  consts: [[1, "currency-table"], [1, "name-header"], [1, "currency-header"], [1, "rate-header"], [4, "ngFor", "ngForOf"]],
  template: function ExRatesTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExRatesTabComponent_tr_10_Template, 8, 6, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.exchangeRates);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
  styles: [".currency-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:hover {\r\n  background-color: #e6e6e6;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXgtcmF0ZXMtdGFiL2V4LXJhdGVzLXRhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVuY3ktdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxudHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency.service */ 7538);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




function HeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", currency_r1.cc, "/UAH - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, currency_r1.rate, "1.2-2"), " ");
  }
}
class HeaderComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.currentDate = '';
    this.currentTime = '';
  }
  ngOnInit() {
    this.filteredCurrencies$ = this.currencyService.getExchangeRates().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(currencies => {
      const filteredCurrencies = currencies.filter(currency => currency.cc === 'USD' || currency.cc === 'EUR');
      return filteredCurrencies;
    }));
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }
  updateDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 6,
  vars: 5,
  consts: [[1, "header"], [1, "datetime"], [1, "currencyBlock"], ["class", "currency", 4, "ngFor", "ngForOf"], [1, "currency"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 3, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.currentDate, " ", ctx.currentTime, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx.filteredCurrencies$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
  styles: [".header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 60px;\r\n  background-color: rgb(38, 105, 86);\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.currencyBlock[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.currency[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  border: 1px solid rgba(97, 94, 94, 0.712);\r\n  padding: 10px;\r\n  background-color: rgb(49, 48, 48);\r\n  border-radius: 5px;\r\n    color: #f0f0f0;\r\n    font-size: 18px;\r\n}\r\n\r\n.datetime[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 10px;\r\n  color: #f0f0f0;\r\n  font-size: 22px;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgMTA1LCA4Nik7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY3VycmVuY3lCbG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXJyZW5jeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk3LCA5NCwgOTQsIDAuNzEyKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDgsIDQ4KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI2YwZjBmMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmRhdGV0aW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map