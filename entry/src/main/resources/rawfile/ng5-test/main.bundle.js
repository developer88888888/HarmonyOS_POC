webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.page-content {\n  background: #f7f7f7;\n  min-height: 100vh;\n}\n.type-box {\n  padding: 15px;\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n.type-title {\n  font-size:16px;\n  font-weight: 500;\n  color: #333;\n  letter-spacing: 0px;\n}\n.type-item-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.type-item {\n  padding-top: 10px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.rate-box {\n  background: #fff;\n  margin-top: 10px;\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.rate-box-title {\n  border-bottom: 1px solid #ededed;\n  padding: 15px;\n  font-weight: 400;\n  font-size: 16px;\n  color: #333;\n  line-height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.rate-box-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.rate-box-content-side {\n  width: 40%;\n  text-align: center;\n  margin-top: 20px;\n}\n.rate-box-content-icon {\n  width: 20%;\n  text-align: center;\n  margin-top: 20px;\n}\n.tips-box {\n  padding:15px;\n  font-weight: 300;\n  font-size: 13px;\n  color: #5c5c5c;\n  line-height: 20px;\n}\n.table-box {\n  background: #fff;\n  margin-top:10px;\n}\n.table-title {\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid #ededed;\n  padding: 15px;\n  font-weight: 400;\n  font-size: 16px;\n  color: #333;\n  line-height: 20px;\n}\n.table-column {\n  height: 33px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n}\n.table-column-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  font-weight: 400;\n  font-size: 13px;\n  color: #333;\n}\n.tips-bottom-box {\n  padding: 15px;\n  font-weight: 300;\n  font-size: 13px;\n  color: #5c5c5c;\n  letter-spacing: 0px;\n}\n.button-box {\n  padding: 15px;\n  /* background: #db0011; */\n  color: #fff;\n  text-align: center;\n}\n.button {\n  background: #db0011;\n  padding: 15px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div class=\"page-content\">\n  <div class=\"type-box\">\n    <div class=\"type-title\">种类</div>\n    <div class=\"type-item-box\">\n      <div class=\"type-item\">Note</div>\n      <div class=\"type-item\">Telegraphic</div>\n    </div>\n  </div>\n\n  <div class=\"rate-box\">\n    <div class=\"rate-box-title\">\n      <div class=\"rate-box-title-item\">货币换算器</div>\n      <div class=\"rate-box-title-item\" (click)=\"callNative()\">重置</div>\n    </div>\n    <div class=\"rate-box-content\">\n      <div class=\"rate-box-content-side\">\n        <div>CNY</div>\n        <div style=\"padding: 20px 0;\">1.00</div>\n      </div>\n      <div class=\"rate-box-content-icon\">exchange</div>\n      <div class=\"rate-box-content-side\">\n        <div>USD</div>\n        <div style=\"padding: 20px 0;\">1.00</div>\n      </div>\n    </div>\n    <div style=\"text-align: center;padding-bottom: 20px;\">1人民币=0.15美元</div>\n  </div>\n\n  <div class=\"tips-box\">\n    汇率受市场变化和交易时间的影响，在交易前需要您确认有7位小数的实际汇率。\n  </div>\n\n  <div class=\"table-box\">\n    <div class=\"table-title\">外汇汇率</div>\n    <div class=\"table-column\">\n      <div class=\"table-column-item\">货币</div>\n      <div class=\"table-column-item\">买入价</div>\n      <div class=\"table-column-item\">卖出价</div>\n    </div>\n    <div class=\"table-column\" *ngFor=\"let item of array\">\n      <div class=\"table-column-item\">{{ item.coint }}</div>\n      <div class=\"table-column-item\">{{ item.price1 }}</div>\n      <div class=\"table-column-item\">{{ item.price2 }}</div>\n    </div>\n  </div>\n\n  <div class=\"tips-bottom-box\">\n    <div>\n      上次更新时间为2021年02月18日CST\n    </div>\n    <div>\n      这些汇率只是指示性汇率，汇率是根据交易日开始时的价格确定的。您在每笔交易前需要确认汇率。\n    </div>\n  </div>\n\n  <div class=\"button-box\">\n    <div class=\"button\">\n      外汇服务\n    </div>\n  </div>\n</div> -->\n\n<!-- <div>\n  <router-outlet></router-outlet>\n</div> -->\n\n<div style=\"display: flex;\nalign-items: center;\nflex-direction: column;\njustify-content: center;\nheight: 100vh;\">\n  <div>\n    <label>USER</label>\n    <input type=\"text\" [(ngModel)]=\"userId\">\n  </div>\n  <div>\n    <button (click)=\"login1()\">old sdk登录</button>\n    <button (click)=\"login2()\">new sdk登录</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'ng5';
        this.array = [
            { coint: '澳元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '加元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '美元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '港币', price1: 0.1231231, price2: 1.1231233 },
            { coint: '日元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '新加坡元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '欧元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '英镑', price1: 0.1231231, price2: 1.1231233 }
        ];
        this.userId = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.jsBridge) {
            var param = { method: 'hsbc', value: 'I come from H5 message!', callback: 'callH5Method' };
            window.jsBridge.call(JSON.stringify(param));
        }
        window.callH5Method = this.callH5Method;
        // this.router.navigate(['login']);
        // setTimeout(() => {
        //   {
        //     let param = {method:'hsbc',value:'I come from H5 click!',callback:'callH5Method'};
        //     (window as any).jsBridge.call(JSON.stringify(param));
        //    }
        // }, 1000);
    };
    AppComponent.prototype.callNative = function () {
        if (window.jsBridge) {
            var param = { method: 'hsbc', value: 'I come from H5 click!', callback: 'callH5Method' };
            window.jsBridge.call(JSON.stringify(param));
        }
    };
    AppComponent.prototype.callH5Method = function (result) {
        console.info('from native: ' + result);
        alert(result);
        return "Call H5 function";
    };
    AppComponent.prototype.login1 = function () {
        console.log(this.userId);
        window.myTSAccountProtection.setAuthenticatedUser(this.userId);
        window.myTSAccountProtection.triggerActionEvent("login").then(function (actionResponse) {
            var actionToken = actionResponse.actionToken;
            alert('old-sdk:' + actionToken);
            console.log(actionToken, 'old_sdk');
            // Add code here to send the received actionToken to your backend
        });
    };
    AppComponent.prototype.login2 = function () {
        console.log(this.userId);
        window.tsPlatform.drs.setAuthenticatedUser(this.userId);
        window.tsPlatform.drs.triggerActionEvent("login").then(function (actionResponse) {
            var actionToken = actionResponse.actionToken;
            alert('new-sdk:' + actionToken);
            console.log(actionToken, 'old_sdk');
            // Add code here to send the received actionToken to your backend
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_equal_validator_directive__ = __webpack_require__("./src/app/shared/equal.validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var myRoots = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_equal_validator_directive__["a" /* EqualValidatorDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(myRoots, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NoPreloading */] })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggednIn()) {
            return true;
        }
        else {
            this.myRoute.navigate(["login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(myRoute) {
        this.myRoute = myRoute;
    }
    AuthService.prototype.sendToken = function (token) {
        localStorage.setItem("LoggedInUser", token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem("LoggedInUser");
    };
    AuthService.prototype.isLoggednIn = function () {
        return this.getToken() !== null;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("LoggedInUser");
        this.myRoute.navigate(["login"]);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "div {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.page-content {\n  background: #f7f7f7;\n  min-height: 100vh;\n}\n.type-box {\n  padding: 15px;\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n.type-title {\n  font-size:16px;\n  font-weight: 500;\n  color: #333;\n  letter-spacing: 0px;\n}\n.type-item-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.type-item {\n  padding-top: 10px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.rate-box {\n  background: #fff;\n  margin-top: 10px;\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.rate-box-title {\n  border-bottom: 1px solid #ededed;\n  padding: 15px;\n  font-weight: 400;\n  font-size: 16px;\n  color: #333;\n  line-height: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.rate-box-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.rate-box-content-side {\n  width: 40%;\n  text-align: center;\n  margin-top: 20px;\n}\n.rate-box-content-icon {\n  width: 20%;\n  text-align: center;\n  margin-top: 20px;\n}\n.tips-box {\n  padding:15px;\n  font-weight: 300;\n  font-size: 13px;\n  color: #5c5c5c;\n  line-height: 20px;\n}\n.table-box {\n  background: #fff;\n  margin-top:10px;\n}\n.table-title {\n  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid #ededed;\n  padding: 15px;\n  font-weight: 400;\n  font-size: 16px;\n  color: #333;\n  line-height: 20px;\n}\n.table-column {\n  height: 33px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 20px;\n}\n.table-column-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  font-weight: 400;\n  font-size: 13px;\n  color: #333;\n}\n.tips-bottom-box {\n  padding: 15px;\n  font-weight: 300;\n  font-size: 13px;\n  color: #5c5c5c;\n  letter-spacing: 0px;\n}\n.button-box {\n  padding: 15px;\n  /* background: #db0011; */\n  color: #fff;\n  text-align: center;\n}\n.button {\n  background: #db0011;\n  padding: 15px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"type-box\">\n    <div class=\"type-title\">种类</div>\n    <div class=\"type-item-box\">\n      <div class=\"type-item\">Note</div>\n      <div class=\"type-item\">Telegraphic</div>\n    </div>\n  </div>\n\n  <div class=\"rate-box\">\n    <div class=\"rate-box-title\">\n      <div class=\"rate-box-title-item\">货币换算器</div>\n      <div class=\"rate-box-title-item\" (click)=\"callNative()\">重置</div>\n    </div>\n    <div class=\"rate-box-content\">\n      <div class=\"rate-box-content-side\">\n        <div>CNY</div>\n        <div style=\"padding: 20px 0;\">1.00</div>\n      </div>\n      <div class=\"rate-box-content-icon\">exchange</div>\n      <div class=\"rate-box-content-side\">\n        <div>USD</div>\n        <div style=\"padding: 20px 0;\">1.00</div>\n      </div>\n    </div>\n    <div style=\"text-align: center;padding-bottom: 20px;\">1人民币=0.15美元</div>\n  </div>\n\n  <div class=\"tips-box\">\n    汇率受市场变化和交易时间的影响，在交易前需要您确认有7位小数的实际汇率。\n  </div>\n\n  <div class=\"table-box\">\n    <div class=\"table-title\">外汇汇率</div>\n    <div class=\"table-column\">\n      <div class=\"table-column-item\">货币</div>\n      <div class=\"table-column-item\">买入价</div>\n      <div class=\"table-column-item\">卖出价</div>\n    </div>\n    <div class=\"table-column\" *ngFor=\"let item of array\">\n      <div class=\"table-column-item\">{{ item.coint }}</div>\n      <div class=\"table-column-item\">{{ item.price1 }}</div>\n      <div class=\"table-column-item\">{{ item.price2 }}</div>\n    </div>\n  </div>\n\n  <div class=\"tips-bottom-box\">\n    <div>\n      上次更新时间为2021年02月18日CST\n    </div>\n    <div>\n      这些汇率只是指示性汇率，汇率是根据交易日开始时的价格确定的。您在每笔交易前需要确认汇率。\n    </div>\n  </div>\n\n  <div class=\"button-box\">\n    <div class=\"button\">\n      外汇服务\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'ng5';
        this.array = [
            { coint: '澳元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '加元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '美元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '港币', price1: 0.1231231, price2: 1.1231233 },
            { coint: '日元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '新加坡元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '欧元', price1: 0.1231231, price2: 1.1231233 },
            { coint: '英镑', price1: 0.1231231, price2: 1.1231233 }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (window.jsBridge) {
            var param = { method: 'hsbc', value: 'I come from H5 message!', callback: 'callH5Method' };
            window.jsBridge.call(JSON.stringify(param));
        }
        // (window as any).callH5Method = this.callH5Method;
        // setTimeout(() => {
        //   {
        //     let param = {method:'hsbc',value:'I come from H5 click!',callback:'callH5Method'};
        //     (window as any).jsBridge.call(JSON.stringify(param));
        //    }
        // }, 1000);
    };
    HomeComponent.prototype.callNative = function () {
        if (window.jsBridge) {
            var param = { method: 'hsbc', value: 'I come from H5 click!', callback: 'callH5Method' };
            window.jsBridge.call(JSON.stringify(param));
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"margin-top:100px;\">\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-lg-4 col-sm-4 center-block \">\n      <mat-card>\n        <mat-card-header>\n          <img mat-card-avatar src=\"../../../assets/images/App-login-manager-icon.png\">\n          <mat-card-title>Login here</mat-card-title>\n          <mat-card-subtitle>Trust us for your data, and sign up</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <div class=\"signup-fields\">\n            <form id=\"loginForm\" [formGroup]=\"form\" (ngSubmit)=\"login()\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" name=\"email\" matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" />\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" name=\"password\" matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" />\n              </div>\n              <div>\n                <button id=\"btnSubmit\" mat-raised-button type=\"submit\" color=\"primary\">Login</button>\n              </div>\n            </form>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div> -->\n<h1>\n  login works\n</h1>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, myRoute, auth) {
        this.fb = fb;
        this.myRoute = myRoute;
        this.auth = auth;
        this.form = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.form.valid) {
            this.auth.sendToken(this.form.value.email);
            this.myRoute.navigate(["home"]);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-button routerLink=\"/home\">Home</button>\n  <button mat-button *ngIf=\"!auth.isLoggednIn()\" routerLink=\"/register\">Register</button>\n  <button mat-button *ngIf=\"!auth.isLoggednIn()\" routerLink=\"/login\">Login</button>\n  <button mat-button *ngIf=\"auth.isLoggednIn()\" (click)=\"auth.logout()\">Logout</button>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ".validate {\n  background-color: #ef5d84;\n}\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:100px;\">\n  <div class=\"row justify-content-center align-items-center\">\n    <div class=\"col-lg-4 col-sm-4 center-block \">\n      <mat-card>\n        <mat-card-header>\n          <img mat-card-avatar src=\"../../../assets/images/App-login-manager-icon.png\">\n          <mat-card-title>Sign up</mat-card-title>\n          <mat-card-subtitle>Trust us for your data, and sign up</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <form #regsiterForm=\"ngForm\" (ngSubmit)=\"register(user)\">\n            <div class=\"signup-fields\">\n              <div class=\"form-group\" [class.has-error]=\"userName.invalid && userName.touched\" [class.has-success]=\"userName.valid\">\n                <input type=\"text\" [(ngModel)]=\"user.userName\" #userName=\"ngModel\" required name=\"userName\" class=\"form-control\" placeholder=\"User Name\">\n                <span class=\"help-block\" *ngIf=\"userName.errors?.required && userName.touched\">\n                  User Name is required\n                </span>\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"email.invalid && email.touched\" [class.has-success]=\"email.valid\">\n                <input type=\"text\" required [email]=\"user.email !== ''\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\"\n                  #email=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"email.errors?.required && email.touched\">\n                  Email is required\n                </span>\n                <span class=\"help-block\" *ngIf=\"email.errors?.email && email.touched\">\n                  Email is invalid\n                </span>\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"password.invalid && password.touched\" [class.has-success]=\"password.valid\">\n                <input type=\"password\" [(ngModel)]=\"user.password\" required class=\"form-control\" name=\"password\" placeholder=\"Password\" #password=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\n                  Password is required\n                </span>\n              </div>\n              <div class=\"form-group\" [class.has-error]=\"confirmPasswordControl.invalid && confirmPasswordControl.touched\" [class.has-success]=\"confirmPasswordControl.valid\">\n                <input type=\"password\" required class=\"form-control\" name=\"confirmPassword\" appEqualValidator=\"password\" placeholder=\"Confirm Password\"\n                  [(ngModel)]=\"confirmPassword\" #confirmPasswordControl=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"confirmPasswordControl.errors?.required && confirmPasswordControl.touched\">\n                  Confirm password is required\n                </span>\n                <span class=\"help-block\" *ngIf=\"confirmPasswordControl.errors?.notEqual \n                                    && confirmPasswordControl.touched && !confirmPasswordControl.errors?.required\">\n                  Password doesn't match\n                </span>\n              </div>\n              <div>\n                <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"regsiterForm.invalid\">Signup</button>\n              </div>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function (user) {
        console.log(user);
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/shared/equal.validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EqualValidatorDirective = (function () {
    function EqualValidatorDirective() {
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    EqualValidatorDirective.prototype.validate = function (c) {
        var controlToCompare = c.parent.get(this.appEqualValidator);
        if (controlToCompare && controlToCompare.value == c.value)
            return { "equal": true };
        return { "notEqual": true };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], EqualValidatorDirective.prototype, "appEqualValidator", void 0);
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
            selector: "[appEqualValidator]",
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* NG_VALIDATORS */],
                    useExisting: EqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map