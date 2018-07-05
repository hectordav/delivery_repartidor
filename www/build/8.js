webpackJsonp([8],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(586);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_srv_alert_toast__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, prlogin, platform, alert_toast, diagnostic) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.prlogin = prlogin;
        this.platform = platform;
        this.alert_toast = alert_toast;
        this.diagnostic = diagnostic;
        this.cuenta = {
            correo: '',
            pass: '',
            token: '',
            serial: ''
        };
        this.verificar_gps();
    }
    // Attempt to login in through our User service
    LoginPage.prototype.login_manual = function () {
        var _this = this;
        var login = this.cuenta.correo;
        var pass = this.cuenta.pass;
        var token = 1; /*this.prlogin.getToken();*/ /*<--*/
        var serial = 1; /*this.prlogin.get_serial();*/ /*<--*/
        this.prlogin.login_manual(login, pass, token, serial).subscribe(function (login) {
            var result_login = login;
            var data = result_login.data;
            var mensaje = result_login.mensaje;
            var result = _this.result_login;
            console.log(result);
            if (mensaje == 'NO Existe Usuario') {
                var mensaje_1 = 'Login y contraseña no validos';
                _this.loading_toast(mensaje_1);
            }
            else {
                var id_usuario = void 0;
                var nombre = void 0;
                var login_1;
                var id_nivel = void 0;
                var id_cliente = void 0;
                var cedula_cliente = void 0;
                var direccion = void 0;
                var telf = void 0;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var value = data_1[_i];
                    id_usuario = value.id_usuario;
                    nombre = value.nombre;
                    login_1 = value.login;
                    id_nivel = value.id_nivel;
                    id_cliente = value.id_cliente;
                    cedula_cliente = value.cedula_cliente;
                    direccion = value.direccion;
                    telf = value.telf;
                }
                if (id_nivel == 1 || id_nivel == 4 || id_nivel == 3) {
                    var mensaje_2 = 'Debes ser un repartidor para iniciar sesion';
                    _this.loading_toast(mensaje_2);
                }
                else {
                    _this.prlogin.set_inicio_sesion(data);
                    localStorage.setItem('delivery_repartidor', JSON.stringify(data));
                    _this.navCtrl.setRoot('HomePage');
                }
                console.log('entra en el else');
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.loading_toast = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    /*verifica si el GPS está activo o no*/
    LoginPage.prototype.verificar_gps = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.diagnostic.isLocationEnabled().then(function (isAvailable) {
                var gps = isAvailable;
                if (gps == false) {
                    var _titulo = "Error";
                    var _mensaje = 'Detectamos que el GPS está apagado; para poder utilizar la aplicacion debe Encender el GPS; cierre la aplicacion encienda su GPS e Intente de nuevo';
                    _this.alert_toast.show_alert(_titulo, _mensaje);
                }
            }).catch(function (e) {
                console.log(e);
                console.log(JSON.stringify(e));
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <form (submit)="login_manual()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="cuenta.correo" name="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="cuenta.pass" name="password"></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map