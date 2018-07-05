webpackJsonp([4],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosVerPageModule", function() { return PedidosVerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_ver__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidosVerPageModule = (function () {
    function PedidosVerPageModule() {
    }
    PedidosVerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedidos_ver__["a" /* PedidosVerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos_ver__["a" /* PedidosVerPage */]),
            ],
        })
    ], PedidosVerPageModule);
    return PedidosVerPageModule;
}());

//# sourceMappingURL=pedidos-ver.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prpedidos_prpedidos__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prmensaje_prmensaje__ = __webpack_require__(237);
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





/**
 * Generated class for the PedidosVerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidosVerPage = (function () {
    function PedidosVerPage(navCtrl, navParams, pr_pedido, pr_mensaje, alert_toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedido = pr_pedido;
        this.pr_mensaje = pr_mensaje;
        this.alert_toast = alert_toast;
        this.alertCtrl = alertCtrl;
        this.result_pedido = {
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
    }
    PedidosVerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidosVerPage');
        this.get_pedido_det_pedido();
    };
    PedidosVerPage.prototype.get_pedido_det_pedido = function () {
        var _pedido = this.pr_pedido.get_result_pedido();
        this.result_pedido.id_pedido = _pedido.id_pedido;
        this.result_pedido.id_establecimiento = _pedido.id_establecimiento;
        this.result_pedido.nombre_establecimiento = _pedido.nombre_establecimiento;
        this.result_pedido.nombre_usuario = _pedido.nombre_usuario;
        this.result_pedido.token_usuario = _pedido.token_usuario;
        this.result_pedido.direccion_entrega = _pedido.direccion_entrega;
        this.result_pedido.detalles_direccion_entrega = _pedido.detalles_direccion_entrega;
        this.result_pedido.lat_lng_direccion_entrega = _pedido.lat_lng_direccion_entrega;
        this.result_pedido.direccion_establecimiento = _pedido.direccion_establecimiento;
        this.result_pedido.detalles_direccion_establecimiento = _pedido.detalles_direccion_establecimiento;
        this.result_pedido.lat_lng_establecimiento = _pedido.lat_lng_establecimiento;
        this.result_pedido.hora_entrega = _pedido.hora_entrega;
        this.result_det_pedido = this.pr_pedido.get_result_det_pedido();
        console.log(this.result_pedido);
        console.log(this.result_det_pedido);
    };
    PedidosVerPage.prototype.mensaje_cliente = function () {
        var _this = this;
        var _token_usuario = this.result_pedido.token_usuario;
        var _id_pedido = this.result_pedido.id_pedido;
        var prompt = this.alertCtrl.create({
            title: 'Mensaje a Cliente',
            inputs: [
                {
                    name: 'txt_mensaje',
                    placeholder: 'Escriba su mensaje'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        var _mensaje = data.txt_mensaje;
                        console.log(_mensaje);
                        _this.pr_mensaje.enviar_mensaje_cliente(_token_usuario, _id_pedido, _mensaje).subscribe(function (pr_mensaje) {
                            _this.result_enviar_mensaje_cliente = pr_mensaje;
                            var _titulo = 'Mensaje a cliente';
                            var _mensaje = 'El mensaje fue enviado';
                            _this.alert_toast.show_alert(_titulo, _mensaje);
                            console.log("REGISTRO EXISTE");
                        }, function (err) {
                            console.log("NO EXISTE REGISTRO");
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    PedidosVerPage.prototype.mensaje_establecimiento = function () {
        var _this = this;
        var _token_usuario = this.result_pedido.token_usuario;
        var _id_establecimiento = this.result_pedido.id_establecimiento;
        var _id_pedido = this.result_pedido.id_pedido;
        var prompt = this.alertCtrl.create({
            title: 'Mensaje a Establecimiento',
            inputs: [
                {
                    name: 'txt_mensaje',
                    placeholder: 'escriba su mensaje'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        var _mensaje = data.txt_mensaje;
                        console.log(_mensaje);
                        _this.pr_mensaje.enviar_mensaje_establecimiento(_id_establecimiento, _id_pedido, _mensaje).subscribe(function (pr_mensaje) {
                            _this.result_enviar_mensaje_cliente = pr_mensaje;
                            var _titulo = 'Mensaje a cliente';
                            var _mensaje = 'El mensaje fue enviado';
                            _this.alert_toast.show_alert(_titulo, _mensaje);
                            console.log("REGISTRO EXISTE");
                        }, function (err) {
                            console.log("NO EXISTE REGISTRO");
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    PedidosVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos-ver',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedidos-ver\pedidos-ver.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="fondo color_texto">\n	<strong>Establecimiento</strong>\n</div>\n<div align="center">\n	<strong>\n	<h4>\n		{{result_pedido.nombre_establecimiento}}\n	</h4>\n</strong>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion:</strong>\n</div>\n<div padding>\n	{{result_pedido.direccion_establecimiento}}\n	<p>{{result_pedido.detalles_direccion_establecimiento}}</p>\n</div>\n	<div class="fondo color_texto">\n	<strong>Detalles de Pedido</strong>\n</div>\n<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_det_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.cantidad}}</ion-col>\n					<ion-col col-8>\n						<strong>{{item.descripcion}}</strong>\n					</ion-col>\n					<ion-col col-2>MNX {{item.total | number : \'1.2-2\'}}\n					</ion-col>\n				</ion-row>\n			</ion-item>\n	 	</div>\n	</ion-grid>\n</div>\n<div class="fondo color_texto">\n	<strong>Cliente:</strong>\n</div>\n<div align="center">\n		<h4>{{result_pedido.nombre_usuario}}</h4>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion de Entrega:</strong>\n</div>\n<div padding>\n	{{result_pedido.direccion_entrega}}\n	<p>{{result_pedido.detalles_direccion_entrega}}</p>\n</div>\n<div class="fondo color_texto">\n	<strong>Hora de entrega:</strong>\n</div>\n<div padding align="center">\n	<h4>{{result_pedido.hora_entrega}}</h4>\n</div>\n<ion-fab right bottom>\n    <button ion-fab color="boton_pedido_descripcion"><ion-icon name="md-add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary" (click)="mensaje_cliente()"><ion-icon name="chatboxes"></ion-icon></button>\n      <button ion-fab color="primary" (click)="mensaje_establecimiento()"><ion-icon name="md-chatboxes"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedidos-ver\pedidos-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prpedidos_prpedidos__["a" /* PrpedidosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prmensaje_prmensaje__["a" /* PrmensajeProvider */], __WEBPACK_IMPORTED_MODULE_4__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PedidosVerPage);
    return PedidosVerPage;
}());

//# sourceMappingURL=pedidos-ver.js.map

/***/ })

});
//# sourceMappingURL=4.js.map