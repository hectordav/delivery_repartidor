webpackJsonp([1],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_ubicacion_map_ubicacion__ = __webpack_require__(585);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_3__components_map_ubicacion_map_ubicacion__["a" /* MapUbicacionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prubicacion_prubicacion__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_prpedidos_prpedidos__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_srv_alert_toast__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*estoy llamando el map-ubicacion del component para no crear el mapa directo en el modulo home*/
var HomePage = (function () {
    function HomePage(navCtrl, navParams, login, ubicacion, pr_pedido, pr_alert_toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.ubicacion = ubicacion;
        this.pr_pedido = pr_pedido;
        this.pr_alert_toast = pr_alert_toast;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('did enter');
        this.get_pedido_id_repartidor();
        setTimeout(function () {
            _this.guardar_ubicacion();
        }, 3000);
    };
    HomePage.prototype.guardar_ubicacion = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('delivery_repartidor'));
        this.login.set_inicio_sesion(data);
        var result_login = this.login.get_inicio_sesion();
        console.log(result_login);
        var id_usuario;
        for (var _i = 0, result_login_1 = result_login; _i < result_login_1.length; _i++) {
            var value = result_login_1[_i];
            id_usuario = value.id_usuario;
            this.id_usuario = id_usuario;
        }
        var lat_lng = this.login.getMylat() + ',' + this.login.getMylng();
        console.log(lat_lng);
        this.ubicacion.guardar_ubicacion(id_usuario, lat_lng).subscribe(function (ubicacion) {
            _this.result_ubicacion = ubicacion;
            console.log('ubicacion_guardada');
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage.prototype.get_pedido_id_repartidor = function () {
        var _this = this;
        var data = JSON.parse(localStorage.getItem('delivery_repartidor'));
        this.login.set_inicio_sesion(data);
        var result_login = this.login.get_inicio_sesion();
        var _id_usuario; /*ojo quitar*/
        for (var _i = 0, result_login_2 = result_login; _i < result_login_2.length; _i++) {
            var value = result_login_2[_i];
            _id_usuario = value.id_usuario;
            this.id_usuario = _id_usuario;
        }
        var mensaje = 'Cargando pedidos pendientes';
        this.pr_alert_toast.show_loading(mensaje);
        this.pr_pedido.get_pedido_id_repartidor(_id_usuario).subscribe(function (pr_pedido) {
            _this.result_pedidos = pr_pedido;
            console.log(_this.result_pedidos);
            _this.pr_alert_toast.dismis_loading();
            console.log("REGISTROS pedidos asignados a repartidor");
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage.prototype.ver_pedido = function (item) {
        var _this = this;
        var _id_pedido = item.id_pedido;
        this.pr_pedido.set_result_pedido(item);
        this.pr_pedido.get_det_pedido_id_pedido(_id_pedido).subscribe(function (pr_pedido) {
            _this.result_det_pedido = pr_pedido;
            _this.pr_pedido.set_result_det_pedido(_this.result_det_pedido);
            console.log("REGISTRO EXISTE");
            _this.navCtrl.push('PedidoDescripcionPage');
        }, function (err) {
            console.log("NO EXISTE REGISTRO");
        });
    };
    HomePage.prototype.buscar_nuevos_pedidos = function () {
        this.navCtrl.push('PedidoBuscarPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Navbar */])
    ], HomePage.prototype, "navBar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="color_nav_bar">\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="fondo">\n	  <!-- el component lo escondo para que no muestre el mapa ojo-->\n	<div style="display: none">\n		<map-ubicacion></map-ubicacion>\n	</div>\n  <div *ngFor="let item of result_pedidos">\n    <ion-card>\n      <ion-card-header>\n      <div align="center">\n        <strong>Pedido pendiente: # {{item.id_pedido}}</strong>\n      </div> \n      </ion-card-header>\n      <hr>\n      <ion-card-content>\n      <ion-list>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n             <ion-card-title>\n                <h5><ion-icon name="home" item-start></ion-icon></h5>\n             </ion-card-title>\n            </ion-col>\n            <ion-col>\n              <h5>{{item.nombre_establecimiento}}</h5>\n              <h5>\n              <strong>Direccion:</strong> {{item.direccion_establecimiento}}\n              <p>{{item.detalles_direccion_establecimiento}}</p>\n              </h5>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div text-wrap>\n          <ion-row>\n            <ion-col col-1>\n            <ion-card-title>\n              <h5>\n              <ion-icon name="clock" item-start></ion-icon>\n              </h5>\n            </ion-card-title>\n            </ion-col>\n            <ion-col>\n            <ion-card-title>\n            <h5><strong>Hora de entrega:</strong> {{item.hora_entrega}}</h5>\n            </ion-card-title>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-list>\n      </ion-card-content>\n      <hr>\n      <div align="center">\n         <button ion-button small color="primary" icon-start (click)="ver_pedido(item)">\n          <ion-icon name=\'eye\'></ion-icon>\n          Ver\n        </button>\n\n      </div>\n      <br>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer padding >\n   <button ion-button full color="boton_aceptar" icon-start (click)="buscar_nuevos_pedidos()">\n    <ion-icon name=\'search\'></ion-icon>\n      Buscar Pedidos      \n  </button>\n</ion-footer>\n'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_prubicacion_prubicacion__["a" /* PrubicacionProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_prpedidos_prpedidos__["a" /* PrpedidosProvider */], __WEBPACK_IMPORTED_MODULE_5__services_srv_alert_toast__["a" /* SrvalerttoastService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapUbicacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_geocoder__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapUbicacionComponent = (function () {
    function MapUbicacionComponent(login, geocode) {
        this.login = login;
        this.geocode = geocode;
        console.log('Hello MapUbicacionComponent Component');
    }
    MapUbicacionComponent.prototype.ngOnInit = function () {
        this.g_lat_home = this.login.getMylat_home();
        this.g_lng_home = this.login.getMylng_home();
        this.map = this.createMap();
    };
    MapUbicacionComponent.prototype.createMap = function (location) {
        var _this = this;
        if (location === void 0) { location = new google.maps.LatLng(25.686614, -100.316113); }
        var mapOptions = {
            center: location,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        var mapEl = document.getElementById('mapa');
        var map = new google.maps.Map(mapEl, mapOptions);
        // use GPS to get center position
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.g_lat_home = _this.login.getMylat_home();
            _this.g_lng_home = _this.login.getMylng_home();
            _this.g_latitud = position.coords.latitude;
            _this.g_longitud = position.coords.longitude;
            _this.login.setMylat(_this.g_latitud);
            _this.login.setMylng(_this.g_longitud);
            _this.lat_lng = newLatLng;
            console.log(_this.g_latitud);
            _this.map.setCenter(newLatLng);
            _this.Position_Marker();
        });
        return map;
    };
    MapUbicacionComponent.prototype.Position_Marker = function () {
        var icono = "assets/img/cliente.png";
        var marker = new google.maps.Marker({
            map: this.map,
            /* animation: google.maps.Animation.DROP,*/
            position: this.lat_lng,
            draggable: true,
            icon: icono
        });
        var content = "<h4>Usted está aqui</h4>";
        this.Position_lat_lng(marker, content);
    };
    MapUbicacionComponent.prototype.Position_lat_lng = function (marker, content) {
        var _this = this;
        /*let infoWindow = new google.maps.InfoWindow({
          content: content
        }); */
        google.maps.event.addListener(marker, 'dragend', function () {
            _this.g_latitud = marker.getPosition().lat();
            _this.g_longitud = marker.getPosition().lng();
            _this.login.setMylat(_this.g_latitud);
            _this.login.setMylng(_this.g_longitud);
            console.log(_this.g_latitud);
            console.log(_this.g_longitud);
            /*infoWindow.open(this.map, marker);*/
        });
    };
    MapUbicacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map-ubicacion',template:/*ion-inline-start:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\components\map-ubicacion\map-ubicacion.html"*/'<div id="mapa"></div>'/*ion-inline-end:"C:\Proyectos_Ionic\delivery\delivery_repartidor\delirepa\src\components\map-ubicacion\map-ubicacion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_prlogin_prlogin__["a" /* PrloginProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], MapUbicacionComponent);
    return MapUbicacionComponent;
}());

//# sourceMappingURL=map-ubicacion.js.map

/***/ })

});
//# sourceMappingURL=1.js.map