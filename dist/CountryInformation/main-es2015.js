(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container\">  \n  <app-country></app-country>  \n</div> \n\n<!--\n  <h1>Country Information</h1>\n\n<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\n\n<ul id=\"myUL\">\n  <li><a href=\"#\">India</a></li>\n  <li><a href=\"#\">Germany</a></li>\n  <li><a href=\"#\">France</a></li>\n  <li><a href=\"#\">Belgium</a></li>\n  <li><a href=\"#\">Brazil</a></li>\n  <li><a href=\"#\">USA</a></li>\n  <li><a href=\"#\">Spain</a></li>\n</ul>\n\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/country/country.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/country/country.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>    \n        <div id=\"container\">\n                <div id=\"header\">\n                     <h1>Country Information</h1>\n                    <div class=\"col\">\n                        <select (ngModelChange)=\"showInfo($event)\" [(ngModel)]=\"selectedCountry\">\n                            <option *ngFor=\"let counrty of countrydetails\" [value]=\"counrty.name\">{{counrty.name}}</option>\n            \n                        </select>\n                    </div>\n            \n                </div>\n            \n                <div id=\"container\">\n                    <div class=\"col\">\n                        <img *ngIf=\"showImage\" [src]=\"flagImage\" alt=\"flag-image\" class=\"image\">\n                    </div>\n                </div>\n            </div>\n</body>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  #myInput {\r\n    background-image: url('/css/searchicon.png');\r\n    background-position: 10px 12px;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    padding: 12px 20px 12px 40px;\r\n    border: 1px solid #ddd;\r\n    margin-bottom: 12px;\r\n  }\r\n  \r\n  #myUL {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #myUL li a {\r\n    border: 1px solid #ddd;\r\n    margin-top: -1px; /* Prevent double borders */\r\n    background-color: #f6f6f6;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    color: black;\r\n    display: block\r\n  }\r\n  \r\n  #myUL li a:hover:not(.header) {\r\n    background-color: #eee;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUUsMkJBQTJCO0lBQzdDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAjbXlJbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9jc3Mvc2VhcmNoaWNvbi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggMTJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgI215VUwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI215VUwgbGkgYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gIH1cclxuICBcclxuICAjbXlVTCBsaSBhOmhvdmVyOm5vdCguaGVhZGVyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CountryInformation';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country/country.component */ "./src/app/country/country.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/common.service */ "./src/app/shared/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _country_country_component__WEBPACK_IMPORTED_MODULE_5__["CountryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ],
        providers: [_shared_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/country/country.component.css":
/*!***********************************************!*\
  !*** ./src/app/country/country.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    color:white;\r\n}\r\n\r\n#container {\r\n    width: 500px;\r\n    height: 500px;\r\n\tborder: 1px solid grey;\r\n    margin: 0 auto;\r\n    background-color:maroon;\r\n}\r\n\r\n#header{\r\n\theight: 100px;\r\n\tpadding: 10px 0; \r\n\r\n}\r\n\r\n#col{\r\n    width: 50px;\r\n\theight: 200px;\r\n    padding: 10px 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.image{\r\n    width: 500px;\r\n\theight: 500px;\r\n    padding: 10px 0;\r\n}\r\n\r\nbody {\r\n    background-color: #fefbd8;\r\n  }\r\n\r\n\r\n\r\n   \r\n   \r\n        \r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQixzQkFBc0I7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7Q0FDZCxhQUFhO0lBQ1YsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0NBQ2YsYUFBYTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm1hcm9vbjtcclxufVxyXG5cclxuI2hlYWRlcntcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHggMDsgXHJcblxyXG59XHJcblxyXG4jY29se1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcblx0aGVpZ2h0OiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYmQ4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAgXHJcbiAgIFxyXG4gICAgICAgIFxyXG4gICAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/country/country.component.ts":
/*!**********************************************!*\
  !*** ./src/app/country/country.component.ts ***!
  \**********************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/common.service */ "./src/app/shared/common.service.ts");



let CountryComponent = class CountryComponent {
    constructor(flag) {
        this.flag = flag;
        this.showImage = false;
    }
    ngOnInit() {
        this.getCountryDetails();
    }
    getCountryDetails() {
        this.flag.getcountry().subscribe(data => {
            console.log(data);
            this.countrydetails = data;
        });
    }
    showInfo(selectedCountry) {
        this.showImage = true;
        let dataIndex = this.countrydetails.findIndex(p => p.name == selectedCountry);
        this.flagImage = this.countrydetails[dataIndex].flag;
    }
};
CountryComponent.ctorParameters = () => [
    { type: _shared_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-country',
        template: __webpack_require__(/*! raw-loader!./country.component.html */ "./node_modules/raw-loader/index.js!./src/app/country/country.component.html"),
        styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/country/country.component.css")]
    })
], CountryComponent);



/***/ }),

/***/ "./src/app/shared/common.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
    }
    getcountry() {
        let countyUrl = 'https://restcountries.eu/rest/v2';
        return this.http.get(countyUrl);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Infrrd\CountryInformation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map