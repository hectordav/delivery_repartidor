webpackJsonp([6],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoDescripcionPageModule", function() { return PedidoDescripcionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_descripcion__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidoDescripcionPageModule = (function () {
    function PedidoDescripcionPageModule() {
    }
    PedidoDescripcionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedido_descripcion__["a" /* PedidoDescripcionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedido_descripcion__["a" /* PedidoDescripcionPage */]),
            ],
        })
    ], PedidoDescripcionPageModule);
    return PedidoDescripcionPageModule;
}());

//# sourceMappingURL=pedido-descripcion.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoDescripcionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prpedidos_prpedidos__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prmensaje_prmensaje__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_srv_alert_toast__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_prlogin_prlogin__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PedidoDescripcionPage = (function () {
    function PedidoDescripcionPage(navCtrl, navParams, pr_pedido, alertCtrl, pr_mensaje, alert_toast, launchNavigator, pr_login) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pr_pedido = pr_pedido;
        this.alertCtrl = alertCtrl;
        this.pr_mensaje = pr_mensaje;
        this.alert_toast = alert_toast;
        this.launchNavigator = launchNavigator;
        this.pr_login = pr_login;
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
    PedidoDescripcionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidoDescripcionPage');
        this.get_pedido_det_pedido();
    };
    PedidoDescripcionPage.prototype.get_pedido_det_pedido = function () {
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
    PedidoDescripcionPage.prototype.mensaje_cliente = function () {
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
    PedidoDescripcionPage.prototype.mensaje_establecimiento = function () {
        var _this = this;
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
    PedidoDescripcionPage.prototype.mapa_establecimiento = function () {
        var _this = this;
        var _titulo = "Ruta al establecimiento";
        var accion;
        var _mensaje = 'Esta accion mostrará la ruta al establecimiento, desea continuar?';
        var alert = this.alertCtrl.create({
            title: _titulo,
            message: _mensaje,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        accion = 0;
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('entra en si');
                        _this.abrir_mapa_establecimiento();
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoDescripcionPage.prototype.mapa_cliente = function () {
        var _this = this;
        var _titulo = "Ruta a destino";
        var accion;
        var _mensaje = 'Esta accion mostrará la ruta al cliente destino, desea continuar?';
        var alert = this.alertCtrl.create({
            title: _titulo,
            message: _mensaje,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        accion = 0;
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('entra en si');
                        _this.abrir_mapa_pedido();
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoDescripcionPage.prototype.abrir_mapa_establecimiento = function () {
        var inicio = this.pr_login.getMylat() + ',' + this.pr_login.getMylng();
        var fin = this.result_pedido.lat_lng_establecimiento;
        var options = {
            start: inicio
        };
        this.launchNavigator.navigate(fin, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator' + error); });
    };
    PedidoDescripcionPage.prototype.abrir_mapa_pedido = function () {
        var inicio = this.pr_login.getMylat() + ',' + this.pr_login.getMylng();
        var fin = this.result_pedido.lat_lng_direccion_entrega;
        console.log(fin);
        var options = {
            start: inicio
        };
        this.launchNavigator.navigate(fin, options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator' + error); });
    };
    PedidoDescripcionPage.prototype.cambiar_status_pedido = function () {
        var _this = this;
        var _titulo = "Entregar pedido a cliente";
        var accion;
        var _mensaje = 'Desea entregar el pedido al cliente';
        var alert = this.alertCtrl.create({
            title: _titulo,
            message: _mensaje,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        accion = 0;
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('entra en si');
                        _this.entregar_pedido_cliente();
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoDescripcionPage.prototype.entregar_pedido_cliente = function () {
        var _this = this;
        var _id_pedido = this.result_pedido.id_pedido;
        var _id_status_pedido = 4;
        var token_usuario = this.result_pedido.token_usuario;
        this.pr_pedido.cambiar_status_pedido(_id_pedido, _id_status_pedido, token_usuario).subscribe(function (pr_pedido) {
            _this.result_cambio_status_pedido = pr_pedido;
            console.log("REGISTRO EXISTE");
            var _titulo = "Info";
            var _mensaje = "Pedido Entregado al cliente";
            _this.alert_toast.show_alert(_titulo, _mensaje);
            _this.navCtrl.popToRoot();
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    PedidoDescripcionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedido-descripcion',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedido-descripcion\pedido-descripcion.html"*/'<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <ion-title>Pedido</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="fondo color_texto">\n	<strong>Establecimiento</strong>\n</div>\n<div align="center">\n	<strong>\n	<h4>\n		{{result_pedido.nombre_establecimiento}}\n	</h4>\n</strong>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion:</strong>\n</div>\n<div padding>\n	{{result_pedido.direccion_establecimiento}}\n	<p>{{result_pedido.detalles_direccion_establecimiento}}</p>\n</div>\n	<div class="fondo color_texto">\n	<strong>Detalles de Pedido</strong>\n</div>\n<div padding>\n	<ion-grid>\n		<div *ngFor="let item of result_det_pedido">\n			<ion-item no-lines>\n				<ion-row>\n					<ion-col col-1>{{item.cantidad}}</ion-col>\n					<ion-col col-8>\n						<strong>{{item.descripcion}}</strong>\n					</ion-col>\n					<ion-col col-2>MNX {{item.total | number : \'1.2-2\'}}\n					</ion-col>\n				</ion-row>\n			</ion-item>\n	 	</div>\n	</ion-grid>\n</div>\n<div class="fondo color_texto">\n	<strong>Cliente:</strong>\n</div>\n<div align="center">\n		<h4>{{result_pedido.nombre_usuario}}</h4>\n</div>\n<div class="fondo color_texto">\n	<strong>Direccion de Entrega:</strong>\n</div>\n<div padding>\n	{{result_pedido.direccion_entrega}}\n	<p>{{result_pedido.detalles_direccion_entrega}}</p>\n</div>\n<div class="fondo color_texto">\n	<strong>Hora de entrega:</strong>\n</div>\n<div padding align="center">\n	<h4>{{result_pedido.hora_entrega}}</h4>\n</div>\n<ion-fab right bottom>\n    <button ion-fab color="boton_pedido_descripcion"><ion-icon name="md-add"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary" (click)="mensaje_cliente()"><ion-icon name="chatboxes"></ion-icon></button>\n      <button ion-fab color="primary" (click)="mensaje_establecimiento()"><ion-icon name="md-chatboxes"></ion-icon></button>\n      <button ion-fab color="primary" (click)="mapa_establecimiento()"><ion-icon name="navigate" ></ion-icon></button>\n      <button ion-fab color="primary" (click)="mapa_cliente()"><ion-icon name="pin"></ion-icon></button>\n      <button ion-fab color="primary" (click)="cambiar_status_pedido()"><ion-icon name="cube"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\pedido-descripcion\pedido-descripcion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prpedidos_prpedidos__["a" /* PrpedidosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_prmensaje_prmensaje__["a" /* PrmensajeProvider */], __WEBPACK_IMPORTED_MODULE_4__services_srv_alert_toast__["a" /* SrvalerttoastService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_6__providers_prlogin_prlogin__["a" /* PrloginProvider */]])
    ], PedidoDescripcionPage);
    return PedidoDescripcionPage;
}());

//# sourceMappingURL=pedido-descripcion.js.map

/***/ })

});
//# sourceMappingURL=6.js.map