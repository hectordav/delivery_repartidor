webpackJsonp([5],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosHistorialPageModule", function() { return PedidosHistorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_historial__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidosHistorialPageModule = (function () {
    function PedidosHistorialPageModule() {
    }
    PedidosHistorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedidos_historial__["a" /* PedidosHistorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos_historial__["a" /* PedidosHistorialPage */]),
            ],
        })
    ], PedidosHistorialPageModule);
    return PedidosHistorialPageModule;
}());

//# sourceMappingURL=pedidos-historial.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosHistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prpedidos_prpedidos__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_srv_alert_toast__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PedidosHistorialPage = (function () {
    function PedidosHistorialPage(navCtrl, navParams, pr_login, pr_pedido, pr_alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_login = pr_login;
        this.pr_pedido = pr_pedido;
        this.pr_alert_toast = pr_alert_toast;
    }
    PedidosHistorialPage.prototype.ionViewDidLoad = function () {
        this.historial_pedidos();
    };
    PedidosHistorialPage.prototype.historial_pedidos = function () {
        var _this = this;
        var result_login = this.pr_login.get_inicio_sesion();
        var _id_usuario; /*ojo quitar*/
        for (var _i = 0, result_login_1 = result_login; _i < result_login_1.length; _i++) {
            var value = result_login_1[_i];
            _id_usuario = value.id_usuario;
        }
        var mensaje = 'Cargando Historial';
        this.pr_alert_toast.show_loading(mensaje);
        this.pr_pedido.get_historial_pedido_id_repartidor(_id_usuario).subscribe(function (pr_pedido) {
            var historial_pedidos = pr_pedido;
            var mensaje = historial_pedidos.mensaje;
            if (mensaje == 'Historial NO encontrado') {
                var mensaje_1 = 'No existen pedidos';
                _this.pr_alert_toast.mensaje_toast_pie(mensaje_1);
            }
            else {
                _this.result_pedidos = historial_pedidos.data;
            }
            _this.pr_alert_toast.dismis_loading();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidosHistorialPage.prototype.ver_pedido = function (item) {
        var _this = this;
        var _id_pedido = item.id_pedido;
        this.pr_pedido.set_result_pedido(item);
        var mensaje = 'Cargando detalle de pedido';
        this.pr_alert_toast.show_loading(mensaje);
        this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
            _this.result_det_pedido = pr_pedido;
            _this.pr_pedido.set_result_det_pedido(_this.result_det_pedido);
            console.log("REGISTRO EXISTE");
            _this.pr_alert_toast.dismis_loading();
            _this.navCtrl.push('PedidosVerPage');
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidosHistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos-historial',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedidos-historial\pedidos-historial.html"*/'<!--\n  Generated template for the PedidosHistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="color_nav_bar">\n  	  <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Historial de pedidos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let item of result_pedidos">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Pedido: # {{item.id_pedido}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n             <ion-card-title>\n                <h5><ion-icon name="home" item-start></ion-icon></h5>\n             </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <h5>{{item.nombre_establecimiento}}</h5>\n              <h5>\n              <strong>Direccion:</strong> {{item.direccion_establecimiento}}\n              <p>{{item.detalles_direccion_establecimiento}}</p>\n              </h5>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="clock" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Hora de entrega:</strong> {{item.hora_entrega}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      <hr>\n      <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_pedido(item)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Ver\n        </button>\n\n      </div>\n      <br>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedidos-historial\pedidos-historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prpedidos_prpedidos__["a" /* PrpedidosProvider */], __WEBPACK_IMPORTED_MODULE_4__services_srv_alert_toast__["a" /* SrvalerttoastService */]])
    ], PedidosHistorialPage);
    return PedidosHistorialPage;
}());

//# sourceMappingURL=pedidos-historial.js.map

/***/ })

});
//# sourceMappingURL=5.js.map