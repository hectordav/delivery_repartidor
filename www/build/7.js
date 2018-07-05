webpackJsonp([7],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoDescripcionModalPageModule", function() { return PedidoDescripcionModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_descripcion_modal__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoDescripcionModalPageModule = (function () {
    function PedidoDescripcionModalPageModule() {
    }
    PedidoDescripcionModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido_descripcion_modal__["a" /* PedidoDescripcionModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido_descripcion_modal__["a" /* PedidoDescripcionModalPage */]),
            ],
        })
    ], PedidoDescripcionModalPageModule);
    return PedidoDescripcionModalPageModule;
}());

//# sourceMappingURL=pedido-descripcion-modal.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoDescripcionModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prpedidos_prpedidos__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prmensaje_prmensaje__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PedidoDescripcionModalPage = (function () {
    function PedidoDescripcionModalPage(navCtrl, navParams, viewCtrl, pr_pedido, pr_login, pr_mensaje) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.pr_pedido = pr_pedido;
        this.pr_login = pr_login;
        this.pr_mensaje = pr_mensaje;
        this.result_buscar_pedido = {
            id_pedido: '',
            id_establecimiento: '',
            nombre_establecimiento: '',
            nombre_usuario: '',
            token_usuario: '',
            direccion_entrega: '',
            detalles_direccion_entrega: '',
            lat_lng_direccion_entrega: '',
            direccion_establecimiento: '',
            detalles_direccion_establecimiento: '',
            lat_lng_establecimiento: '',
            hora_entrega: ''
        };
        this.remainingTime = 20;
    }
    PedidoDescripcionModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoDescripcionModalPage');
        this.get_pedido_det_pedido();
        this.cuenta_regresiva();
    };
    PedidoDescripcionModalPage.prototype.cuenta_regresiva = function () {
        var _this = this;
        var interval = setInterval(function () {
            _this.remainingTime--;
            // if time is over
            if (_this.remainingTime == 0) {
                // stop interval
                clearInterval(interval);
                _this.viewCtrl.dismiss();
            }
        }, 1000);
    };
    PedidoDescripcionModalPage.prototype.ignorar_pedido = function () {
        var _this = this;
        var result_login = this.pr_login.get_inicio_sesion();
        var _id_usuario;
        for (var _i = 0, result_login_1 = result_login; _i < result_login_1.length; _i++) {
            var value = result_login_1[_i];
            _id_usuario = value.id_usuario;
            this.id_usuario = _id_usuario;
        }
        var _id_entrega_pedido = this.result_buscar_pedido.id_entrega_pedido;
        this.pr_pedido.ignorar_pedido(_id_usuario, _id_entrega_pedido).subscribe(function (pr_pedido) {
            _this.result_ignorar_pedido = pr_pedido;
            console.log("REGISTRO EXISTE");
            _this.viewCtrl.dismiss();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoDescripcionModalPage.prototype.get_pedido_det_pedido = function () {
        var _pedido = this.pr_pedido.get_result_buscar_pedido();
        for (var _i = 0, _pedido_1 = _pedido; _i < _pedido_1.length; _i++) {
            var value = _pedido_1[_i];
            this.result_buscar_pedido.id_pedido = value.id_pedido;
            this.result_buscar_pedido.id_entrega_pedido = value.id_entrega_pedido;
            this.result_buscar_pedido.id_establecimiento = value.id_establecimiento;
            this.result_buscar_pedido.nombre_establecimiento = value.nombre_establecimiento;
            this.result_buscar_pedido.nombre_usuario = value.nombre_usuario;
            this.result_buscar_pedido.token_usuario = value.token_usuario;
            this.result_buscar_pedido.direccion_entrega = value.direccion_entrega;
            this.result_buscar_pedido.detalles_direccion_entrega = value.detalles_direccion_entrega;
            this.result_buscar_pedido.lat_lng_direccion_entrega = value.lat_lng_direccion_entrega;
            this.result_buscar_pedido.direccion_establecimiento = value.direccion_establecimiento;
            this.result_buscar_pedido.detalles_direccion_establecimiento = value.detalles_direccion_establecimiento;
            this.result_buscar_pedido.lat_lng_establecimiento = value.lat_lng_establecimiento;
            this.result_buscar_pedido.hora_entrega = value.hora_entrega;
        }
        console.log(this.result_buscar_pedido);
    };
    PedidoDescripcionModalPage.prototype.aceptar_pedido = function () {
        var _this = this;
        var result_login = this.pr_login.get_inicio_sesion();
        var _id_usuario;
        for (var _i = 0, result_login_2 = result_login; _i < result_login_2.length; _i++) {
            var value = result_login_2[_i];
            _id_usuario = value.id_usuario;
            this.id_usuario = _id_usuario;
        }
        var _id_entrega_pedido = this.result_buscar_pedido.id_entrega_pedido;
        var _id_pedido = this.result_buscar_pedido.id_pedido;
        this.pr_pedido.buscar_pedido_aceptado(_id_pedido).subscribe(function (pr_pedido) {
            _this.result_pedido_aceptado = pr_pedido;
            if (_this.result_pedido_aceptado == 'existe') {
                _this.pr_pedido.set_pedido_aceptado(1);
                _this.viewCtrl.dismiss(true);
            }
            else {
                _this.pr_pedido.set_pedido_aceptado(0);
                _this.pr_pedido.aceptar_pedido(_id_entrega_pedido, _id_usuario).subscribe(function (pr_pedido) {
                    _this.result_pedido = pr_pedido;
                    console.log("REGISTRO EXISTE");
                    _this.mensaje_cliente_establecimiento();
                }, function (err) {
                    console.log("NO EXISTE REGISTRO");
                });
            }
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoDescripcionModalPage.prototype.mensaje_cliente_establecimiento = function () {
        var _this = this;
        var _token_usuario = this.result_buscar_pedido.token_usuario;
        var _id_pedido = this.result_buscar_pedido.id_pedido;
        var _id_establecimiento = this.result_buscar_pedido.id_establecimiento;
        /*resta los 10 min para enviarle un recordatorio al repartidor*/
        var _hora_entrega_split = this.result_buscar_pedido.hora_entrega.split('-');
        var _hora_fin = _hora_entrega_split['1'];
        var _hora_split = _hora_fin.split(':');
        var _hora = _hora_split['0'];
        var _min = _hora_split['1'];
        if (_min == '00') {
            _min = '50';
            _hora = _hora - 1;
        }
        else {
            _min = _min - 10;
        }
        var _hora_min = _hora + ':' + _min;
        console.log(_hora_min);
        /***************************************************************/
        /* toma el token del repartidor*/
        var result_login = this.pr_login.get_inicio_sesion();
        var _id_usuario = 18;
        var _token_repartidor;
        for (var _i = 0, result_login_3 = result_login; _i < result_login_3.length; _i++) {
            var value = result_login_3[_i];
            _id_usuario = value.id_usuario;
            _token_repartidor = value.token;
        }
        /***************************************************************/
        var _establecimiento = this.result_buscar_pedido.nombre_establecimiento;
        var _mensaje_1 = 'Su Pedido, fue asiganado a un repartidor, haga clic en el mismo para mas detalles';
        var _mensaje_2 = 'Le recordamos que tiene un pedido pendiente en el establecimiento ' + _establecimiento + ', Ignore este mensaje si ya buscó su pedido';
        this.pr_mensaje.enviar_mensaje_cliente(_token_usuario, _id_pedido, _mensaje_1).subscribe(function (pr_mensaje) {
            _this.result_enviar_mensaje_cliente = pr_mensaje;
            console.log("se envio el mensaje al cliente");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
        this.pr_mensaje.enviar_mensaje_establecimiento(_id_establecimiento, _id_pedido, _mensaje_1).subscribe(function (pr_mensaje) {
            _this.result_enviar_mensaje_repartidor = pr_mensaje;
            console.log("se envio el mensaje al establecimiento");
            _this.viewCtrl.dismiss(true);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
        /*aqui envia el mensaje al repartidor con unos minutos antes*/
        this.pr_mensaje.enviar_mensaje_repartidor_min_antes(_hora_min, _token_repartidor, _mensaje_2).subscribe(function (pr_mensaje) {
            _this.result_enviar_mensaje_repartidor = pr_mensaje;
            console.log("se envio el mensaje al establecimiento");
            _this.viewCtrl.dismiss(true);
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoDescripcionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido-descripcion-modal',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedido-descripcion-modal\pedido-descripcion-modal.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Nuevo Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<ion-item no-lines text-wrap>\n		Establecimiento: {{result_buscar_pedido.nombre_establecimiento}}\n		<p>Direccion: {{result_buscar_pedido.direccion_establecimiento}}</p>\n	</ion-item>\n		<ion-item no-lines text-wrap>\n			Entrega: {{result_buscar_pedido.direccion_entrega}}\n			<p>{{result_buscar_pedido.detalles_direccion_entrega}}</p>\n		</ion-item>\n		<ion-item no-lines text-wrap>\n			Hora de entrega: {{result_buscar_pedido.hora_entrega}}\n		</ion-item>\n</ion-content>\n<ion-footer>\n			<ion-grid>\n    <ion-row>\n      <ion-col col-5 text-center>\n        <button ion-button  full color="danger"  (click)="ignorar_pedido()">Ignorar</button>\n      </ion-col>\n      <ion-col col-2 text-center class="remaining">\n        <span>{{ remainingTime }}</span>\n      </ion-col>\n      <ion-col col-5 text-center>\n        <button  ion-button full  color="secondary"  (click)="aceptar_pedido()">Aceptar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedido-descripcion-modal\pedido-descripcion-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_prpedidos_prpedidos__["a" /* PrpedidosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prmensaje_prmensaje__["a" /* PrmensajeProvider */]])
    ], PedidoDescripcionModalPage);
    return PedidoDescripcionModalPage;
}());

//# sourceMappingURL=pedido-descripcion-modal.js.map

/***/ })

});
//# sourceMappingURL=7.js.map