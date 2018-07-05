webpackJsonp([9],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrloginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrloginProvider = (function () {
    function PrloginProvider(http, ruta, http_2) {
        this.http = http;
        this.ruta = ruta;
        this.http_2 = http_2;
        console.log('Hello PrloginProvider Provider');
        this.principal_url = this.ruta.get_ruta();
    }
    PrloginProvider.prototype.setMylat = function (value) {
        this.lat = value;
    };
    PrloginProvider.prototype.getMylat = function () {
        return this.lat;
    };
    PrloginProvider.prototype.setMylng = function (value) {
        this.lng = value;
    };
    /*obtengo la variable global para enviarla a los controlers*/
    PrloginProvider.prototype.getMylng = function () {
        return this.lng;
    };
    PrloginProvider.prototype.set_new_lat_lng_home = function (value) {
        this.new_lat_lng_home = value;
    };
    PrloginProvider.prototype.get_new_lat_lng_home = function () {
        return this.new_lat_lng_home;
    };
    PrloginProvider.prototype.setMylat_home = function (value) {
        this.lat_home = value;
    };
    PrloginProvider.prototype.getMylat_home = function () {
        return this.lat_home;
    };
    PrloginProvider.prototype.setMylng_home = function (value) {
        this.lng_home = value;
    };
    /*obtengo la variable global para enviarla a los controlers*/
    PrloginProvider.prototype.getMylng_home = function () {
        return this.lng_home;
    };
    /*el serial*/
    PrloginProvider.prototype.set_serial = function (value) {
        this.variable_serial = value;
    };
    /*obtengo el serial*/
    PrloginProvider.prototype.get_serial = function () {
        return this.variable_serial;
    };
    PrloginProvider.prototype.set_inicio_sesion = function (value) {
        this.variable_inicio_sesion = value;
    };
    PrloginProvider.prototype.get_inicio_sesion = function () {
        return this.variable_inicio_sesion;
    };
    /*el token del push*/
    PrloginProvider.prototype.setToken = function (value) {
        this.variable_token = value;
    };
    /*obtengo el push y lo comparo con el guardado */
    PrloginProvider.prototype.getToken = function () {
        return this.variable_token;
    };
    PrloginProvider.prototype.login_manual = function (login, clave, token, serial) {
        var variable_2 = JSON.stringify({ login: login, clave: clave, token: token, serial: serial });
        var url = this.principal_url + 'login/login_manual';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrloginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], PrloginProvider);
    return PrloginProvider;
}());

//# sourceMappingURL=prlogin.js.map

/***/ }),

/***/ 136:
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
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		341,
		1
	],
	"../pages/login/login.module": [
		342,
		8
	],
	"../pages/pedido-buscar/pedido-buscar.module": [
		343,
		0
	],
	"../pages/pedido-descripcion-modal/pedido-descripcion-modal.module": [
		344,
		7
	],
	"../pages/pedido-descripcion/pedido-descripcion.module": [
		345,
		6
	],
	"../pages/pedidos-historial/pedidos-historial.module": [
		346,
		5
	],
	"../pages/pedidos-ver/pedidos-ver.module": [
		347,
		4
	],
	"../pages/tutorial/tutorial.module": [
		348,
		3
	],
	"../pages/welcome/welcome.module": [
		349,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrpedidosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrpedidosProvider = (function () {
    function PrpedidosProvider(http, ruta, http_2) {
        this.http = http;
        this.ruta = ruta;
        this.http_2 = http_2;
        this.principal_url = this.ruta.get_ruta();
    }
    PrpedidosProvider.prototype.set_result_buscar_pedido = function (value) {
        this.result_buscar_pedido = value;
    };
    PrpedidosProvider.prototype.get_result_buscar_pedido = function () {
        return this.result_buscar_pedido;
    };
    PrpedidosProvider.prototype.set_pedido_aceptado = function (value) {
        this.pedido_aceptado = value;
    };
    PrpedidosProvider.prototype.get_pedido_aceptado = function () {
        return this.pedido_aceptado;
    };
    PrpedidosProvider.prototype.set_result_pedido = function (value) {
        this.result_pedido = value;
    };
    PrpedidosProvider.prototype.get_result_pedido = function () {
        return this.result_pedido;
    };
    PrpedidosProvider.prototype.set_result_det_pedido = function (value) {
        this.result_det_pedido = value;
    };
    PrpedidosProvider.prototype.get_result_det_pedido = function () {
        return this.result_det_pedido;
    };
    PrpedidosProvider.prototype.get_pedido_id_repartidor = function (_id_repartidor) {
        var variable_2 = JSON.stringify({ id_repartidor: _id_repartidor });
        var url = this.principal_url + 'entrega_pedido/get_pedido_id_repartidor';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider.prototype.get_historial_pedido_id_repartidor = function (_id_repartidor) {
        var variable_2 = JSON.stringify({ id_repartidor: _id_repartidor });
        var url = this.principal_url + 'entrega_pedido/get_historial_pedido_id_repartidor';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http_2.post(url, variable_2).map(function (res) { return res.json(); });
        return response;
    };
    PrpedidosProvider.prototype.get_det_pedido_id_pedido = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/get_det_pedido_id_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider.prototype.buscar_pedidos = function (_id_usuario) {
        var variable_2 = JSON.stringify({ id_usuario: _id_usuario });
        var url = this.principal_url + 'pedido/buscar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider.prototype.buscar_pedido_aceptado = function (_id_pedido) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido });
        var url = this.principal_url + 'pedido/buscar_pedido_aceptado';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider.prototype.aceptar_pedido = function (_id_entrega_pedido, _id_usuario) {
        var variable_2 = JSON.stringify({ id_entrega_pedido: _id_entrega_pedido, id_usuario: _id_usuario });
        var url = this.principal_url + 'pedido/aceptar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider.prototype.ignorar_pedido = function (_id_usuario, _id_entrega_pedido) {
        var variable_2 = JSON.stringify({ id_entrega_pedido: _id_entrega_pedido, id_usuario: _id_usuario });
        var url = this.principal_url + 'pedido/ignorar_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider.prototype.cambiar_status_pedido = function (_id_pedido, _id_status_pedido, token_usuario) {
        var variable_2 = JSON.stringify({ id_pedido: _id_pedido, id_status_pedido: _id_status_pedido, token_usuario: token_usuario });
        var url = this.principal_url + 'pedido/cambiar_status_pedido';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrpedidosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], PrpedidosProvider);
    return PrpedidosProvider;
}());

//# sourceMappingURL=prpedidos.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrvalerttoastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SrvalerttoastService = (function () {
    function SrvalerttoastService(alertCtrl, toastCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SrvalerttoastService.prototype.set_variable_alert_confirmar = function (value) {
        this.variable_alert_confirmar = value;
    };
    SrvalerttoastService.prototype.get_variable_alert_confirmar = function () {
        return this.variable_alert_confirmar;
    };
    SrvalerttoastService.prototype.show_alert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    SrvalerttoastService.prototype.confirmar_accion = function (titulo, mensaje) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titulo,
            message: mensaje,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.set_variable_alert_confirmar(0);
                    }
                },
                {
                    text: 'Buy',
                    handler: function () {
                        _this.set_variable_alert_confirmar(1);
                    }
                }
            ]
        });
        alert.present();
    };
    SrvalerttoastService.prototype.mensaje_toast_medio = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SrvalerttoastService.prototype.mensaje_toast_pie = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    SrvalerttoastService.prototype.loading_toast = function (valor) {
        var toast = this.toastCtrl.create({
            message: valor,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SrvalerttoastService.prototype.show_loading = function (item) {
        this.loader = this.loadingCtrl.create({
            content: item
        });
        this.loader.present();
    };
    SrvalerttoastService.prototype.dismis_loading = function () {
        this.loader.dismiss();
    };
    SrvalerttoastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SrvalerttoastService);
    return SrvalerttoastService;
}());

//# sourceMappingURL=srv-alert-toast.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrmensajeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrmensajeProvider = (function () {
    function PrmensajeProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        console.log('Hello PrmensajeProvider Provider');
        this.principal_url = this.ruta.get_ruta();
    }
    PrmensajeProvider.prototype.enviar_mensaje_cliente = function (_token_usuario, _id_pedido, _mensaje) {
        var variable_2 = JSON.stringify({ token: _token_usuario, id_pedido: _id_pedido, mensaje: _mensaje });
        var url = this.principal_url + 'push_cliente/enviar_mensaje_cliente';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrmensajeProvider.prototype.enviar_mensaje_establecimiento = function (_id_establecimiento, _id_pedido, _mensaje) {
        var variable_2 = JSON.stringify({ id_establecimiento: _id_establecimiento, id_pedido: _id_pedido, mensaje: _mensaje });
        var url = this.principal_url + 'Push_establecimiento/enviar_mensaje_establecimiento';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrmensajeProvider.prototype.enviar_mensaje_repartidor_min_antes = function (_hora_min, _token_repartidor, _mensaje_2) {
        var variable_2 = JSON.stringify({ hora_min: _hora_min, token: _token_repartidor, mensaje: _mensaje_2 });
        var url = this.principal_url + 'push_repartidor/enviar_mensaje_min_antes';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrmensajeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrmensajeProvider);
    return PrmensajeProvider;
}());

//# sourceMappingURL=prmensaje.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrubicacionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrubicacionProvider = (function () {
    function PrubicacionProvider(http, ruta) {
        this.http = http;
        this.ruta = ruta;
        console.log('Hello PrubicacionProvider Provider');
        this.principal_url = this.ruta.get_ruta();
    }
    PrubicacionProvider.prototype.guardar_ubicacion = function (id_usuario, lat_lng) {
        var variable_2 = JSON.stringify({ id_usuario: id_usuario, lat_lng: lat_lng });
        var url = this.principal_url + 'ubicacion/guardar_ubicacion';
        /*si quiero obtener el valor debo agregar el .map(res => res.json())*/
        var response = this.http.post(url, variable_2);
        return response;
    };
    PrubicacionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_prrutas_prrutas__["a" /* PrrutasProvider */]])
    ], PrubicacionProvider);
    return PrubicacionProvider;
}());

//# sourceMappingURL=prubicacion.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(281);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mocks_providers_items__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_providers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_prlogin_prlogin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_prrutas_prrutas__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_prubicacion_prubicacion__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_prpedidos_prpedidos__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_prmensaje_prmensaje__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_launch_navigator__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_srv_alert_toast__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_diagnostic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_14__providers_providers__["b" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-buscar/pedido-buscar.module#PedidoBuscarPageModule', name: 'PedidoBuscarPage', segment: 'pedido-buscar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-descripcion-modal/pedido-descripcion-modal.module#PedidoDescripcionModalPageModule', name: 'PedidoDescripcionModalPage', segment: 'pedido-descripcion-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido-descripcion/pedido-descripcion.module#PedidoDescripcionPageModule', name: 'PedidoDescripcionPage', segment: 'pedido-descripcion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos-historial/pedidos-historial.module#PedidosHistorialPageModule', name: 'PedidosHistorialPage', segment: 'pedidos-historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos-ver/pedidos-ver.module#PedidosVerPageModule', name: 'PedidosVerPage', segment: 'pedidos-ver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_13__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_14__providers_providers__["c" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_14__providers_providers__["b" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_prlogin_prlogin__["a" /* PrloginProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_prrutas_prrutas__["a" /* PrrutasProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_prubicacion_prubicacion__["a" /* PrubicacionProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_prpedidos_prpedidos__["a" /* PrpedidosProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_prmensaje_prmensaje__["a" /* PrmensajeProvider */],
                __WEBPACK_IMPORTED_MODULE_22__services_srv_alert_toast__["a" /* SrvalerttoastService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_diagnostic__["a" /* Diagnostic */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(142);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(187);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_prlogin_prlogin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, oneSignal, device, alertCtrl, login, loadingCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.login = login;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = (localStorage.getItem('delivery_repartidor')) ? 'HomePage' : 'TutorialPage';
        this.pages = [
            { title: 'Home', component: 'HomePage' },
            { title: 'Historial de pedidos', component: 'PedidosHistorialPage' }
        ];
        this.backPressed = false;
        platform.ready().then(function () {
            if (platform.is('cordova')) {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.notificaciones();
                _this.background();
                /*****************backbutton***********************/
                platform.registerBackButtonAction(function () {
                    if (_this.nav.canGoBack()) {
                        _this.nav.pop();
                        return;
                    }
                    if (!_this.backPressed) {
                        _this.backPressed = true;
                        _this.presentLoading();
                        setTimeout(function () { return _this.backPressed = false; }, 2000);
                        return;
                    }
                    else {
                        _this.platform.exitApp();
                    }
                });
                /***************************************************/
            }
            else {
                /*no hace nada por esta en la web*/
            }
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.presentLoading = function () {
        var _this = this;
        this.loader = this.alertCtrl.create({
            title: 'Confirmar',
            message: 'Realmente desea Salir',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salir',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.loader.present();
    };
    MyApp.prototype.background = function () {
        /******************en segundo plano********************+*/
        /* esto se debe agregar en la consola raiz del proyecto
       ionic cordova plugin add cordova-plugin-background-mode   */
        console.log("MyApp::constructor platform.ready");
        cordova.plugins.backgroundMode.setDefaults({
            title: 'Delivery Repartidor',
            text: 'Esta activo en segundo plano'
            /*icon:'assets/img/logo_2.png'*/
        }, cordova.plugins.backgroundMode.enable());
    };
    MyApp.prototype.notificaciones = function () {
        var _this = this;
        this.serial_device = this.device.uuid;
        this.oneSignal.startInit('c37757d8-c2fd-4fc6-97e6-875f33f0ac90', '340053289094'); //(appId_onesignal,googleProjectNumber)
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationOpened()
            .subscribe(function (jsonData) {
            var alert = _this.alertCtrl.create({
                title: jsonData.notification.payload.title,
                subTitle: jsonData.notification.payload.body,
                buttons: ['OK']
            });
            alert.present();
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        this.oneSignal.endInit();
        this.presentLoading_carga();
        this.oneSignal.getIds().then(function (id) {
            var el_id = id.userId; /*el id para guardarlo en el token de la base de datos*/
            _this.login.setToken(el_id);
            _this.serial_device = _this.device.uuid; /* el serial del dispositivo*/
            _this.login.set_serial(_this.serial_device + '2');
            _this.loader.dismiss();
        });
    };
    MyApp.prototype.presentLoading_carga = function () {
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.loader.present();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.cerrar_sesion = function () {
        localStorage.removeItem('delivery_repartidor');
        this.nav.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar color=\"color_nav_bar\">\n        <ion-title>Menu Principal</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n     <ion-footer>\n    <div align=\"center\">\n      <button menuClose ion-item (click)=\"cerrar_sesion()\">\n            Cerrar sesi\u00F3n\n       </button>\n    </div>\n    </ion-footer>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__providers_providers__["b" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrrutasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PrrutasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PrrutasProvider = (function () {
    function PrrutasProvider(http) {
        this.http = http;
        this.principal_url = 'http://mimandadero.com/delivery_rest/';
        console.log('Hello PrrutasProvider Provider');
    }
    PrrutasProvider.prototype.get_ruta = function () {
        return this.principal_url;
    };
    PrrutasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PrrutasProvider);
    return PrrutasProvider;
}());

//# sourceMappingURL=prrutas.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* unused harmony reexport Items */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map