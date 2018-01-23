webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_course_course__ = __webpack_require__(157);
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
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursosPage = (function () {
    function CursosPage(navCtrl, navParams, course) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.course = course;
        this.courses = [];
    }
    CursosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.course.listarCursos()
            .subscribe(function (data) {
            _this.courses = data['results'];
        }, function (error) {
            console.error(error);
        });
    };
    CursosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cursos',template:/*ion-inline-start:"c:\cedum\src\pages\cursos\cursos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Cursos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n		<ion-item *ngFor="let course of courses">\n			<ion-avatar item-start>\n				<ion-icon name="open"></ion-icon>\n			</ion-avatar>\n			<h2 text-wrap>{{ course.nombre | uppercase }}</h2>\n			<p text-right>Tiempo estimado: 00:00</p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\cursos\cursos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_course_course__["a" /* CourseProvider */]])
    ], CursosPage);
    return CursosPage;
}());

//# sourceMappingURL=cursos.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(158);
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
 * Generated class for the UsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuariosPage = (function () {
    function UsuariosPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.users = [];
    }
    UsuariosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user.listarUsuarios()
            .subscribe(function (data) {
            _this.users = data['course'];
        }, function (error) {
            console.error(error);
        });
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usuarios',template:/*ion-inline-start:"c:\cedum\src\pages\usuarios\usuarios.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Usuarios conectados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item *ngFor="let user of users">\n			<ion-avatar item-start>\n				<img [src]="user.picture.medium">\n			</ion-avatar>\n			<h2>{{ user.name.first+\' \'+user.name.last | uppercase }}</h2>\n			<p>{{ user.email }}</p>\n			<p>{{ user.cell }}</p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cursos/cursos.module": [
		286,
		2
	],
	"../pages/perfil/perfil.module": [
		287,
		0
	],
	"../pages/usuarios/usuarios.module": [
		288,
		1
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
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
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CourseProvider = (function () {
    function CourseProvider(http) {
        this.http = http;
    }
    CourseProvider.prototype.listarCursos = function () {
        return this.http.get('http://localhost:3000/db');
    };
    CourseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CourseProvider);
    return CourseProvider;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
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
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
    }
    UserProvider.prototype.listarUsuarios = function () {
        return this.http.get('https:/randomuser.me/api/?results=25');
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\cedum\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h3 text-center style="margin-top:15%;">CEDUM</h3>\n	<ion-grid>\n		<ion-row justify-content-center align-items-center>\n			<ion-img width="50%" src="../../assets/imgs/logo.png"></ion-img>\n		</ion-row>\n	</ion-grid>\n	<button ion-button full color="barras">IDENTIFIQUESE</button>\n	<ion-toolbar style="margin-top:60%;">\n		<div class="toolbar-content">\n			<ion-segment>\n				<button ion-button small color="barras" role="button" tappable="" value="politica">Política de privacidad</button>\n				<button ion-button small color="barras" role="button" tappable="" value="terminos">Términos de uso</button>\n			</ion-segment>\n		</div>\n	</ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoliticaPage = (function () {
    function PoliticaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PoliticaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-politica',template:/*ion-inline-start:"c:\cedum\src\pages\politica\politica.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<!--<ion-item color="cabezote">\n		<ion-toolbar color="cabezote">\n			<p color="cabezote">CEDUM</p>\n			<ion-buttons end>\n				<button small ion-button icon-only text-left>\n					<ion-icon name="search"></ion-icon>\n				</button>\n			</ion-buttons>\n		</ion-toolbar>\n	</ion-item>\n	<ion-item color="barras">\n		<ion-toolbar color="barras">\n			<ion-buttons start>\n				<button small ion-button icon-only>\n					<ion-icon name="arrow-dropleft"></ion-icon>\n				</button>\n			</ion-buttons>\n			<p color="barras" text-center>Política de privacidad</p>\n		</ion-toolbar>\n	</ion-item>-->\n	<ion-item-divider color="barras" text-center><ion-icon name="arrow-dropleft" float-left></ion-icon>     Política de privacidad</ion-item-divider>\n	<div padding>\n		<p text-justify>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt erat ac mi tincidunt euismod. Nullam vulputate, sapien id scelerisque malesuada, dui sapien bibendum libero, eget fringilla tortor tellus sit amet sem. Mauris dignissim nulla vitae elit facilisis mattis. Integer at mi ac magna lacinia tristique.</p> \n		<p text-justify>In consequat pretium felis, vehicula molestie turpis convallis pulvinar. Integer mollis, ex sit amet lacinia malesuada, sem urna convallis tortor, sed volutpat dolor nulla quis turpis. Suspendisse ac sem eu odio aliquet accumsan. Nullam vitae magna quam. Nulla nec neque rhoncus, vulputate metus quis, sagittis ante. Nam interdum sapien ut sagittis ullamcorper. Morbi quis arcu magna. In id libero sed urna lacinia fringilla. Aliquam a faucibus quam.</p>\n		<p text-justify>Aenean iaculis mollis nisi, vitae feugiat urna laoreet vitae. Fusce et venenatis libero, ac aliquam urna. Sed ante mi, dignissim a sollicitudin in, suscipit ac lectus. Phasellus a bibendum orci. Nunc lobortis lorem eget nisi ullamcorper, sit amet semper ligula pellentesque. Praesent molestie felis ac sem blandit, eu rhoncus odio imperdiet. Curabitur interdum urna in mi varius aliquet.</p>\n		<p text-justify>Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam id mattis sem. In vel consequat ipsum, at hendrerit diam. Maecenas enim arcu, sodales in dapibus ut, lacinia ut mauris. Cras augue lacus, fringilla ac odio nec, semper ullamcorper massa.</p> \n		<p text-justify>Ut ac tempus neque, vitae porttitor purus. Curabitur posuere tellus nunc, non imperdiet ipsum volutpat a. Etiam quis feugiat est, vitae ultrices lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar purus massa. Curabitur a volutpat dui. Aliquam nec vehicula purus.</p>\n		<p text-justify>Nullam commodo interdum consectetur. Aliquam erat volutpat. In hac habitasse platea dictumst. Etiam porta felis vel efficitur rhoncus. Suspendisse sit amet nibh a tellus hendrerit tristique. In pharetra odio quis dui mattis feugiat. Duis non enim ac lacus porttitor ultricies.</p>\n		<p text-justify>Aliquam et tellus vel purus pretium ultricies. Sed sed velit fermentum, blandit erat ac, ornare nisl. Proin faucibus purus sit amet euismod eleifend. In et tempus lorem. Mauris accumsan pharetra ex, et pretium nisl tempus accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed bibendum vehicula diam non fermentum.</p> \n		<p text-justify>Proin posuere tellus ut dolor consectetur sodales. Fusce malesuada id nunc at posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempor nisl tempus massa facilisis fringilla. Sed vitae quam egestas, tempor nulla ac, varius tortor. Vivamus suscipit arcu at consequat volutpat. Phasellus posuere lacus non nisl lobortis, vitae ultricies velit porttitor. Nunc sodales enim eget nulla blandit, et tristique nisl volutpat.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\politica\politica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PoliticaPage);
    return PoliticaPage;
}());

//# sourceMappingURL=politica.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntrarPage = (function () {
    function EntrarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EntrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrar',template:/*ion-inline-start:"c:\cedum\src\pages\entrar\entrar.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<h3 text-center style="margin-top:15%;">CEDUM</h3>\n		<ion-list>\n			<ion-item>\n				<ion-label stacked>Usuario</ion-label>\n				<ion-input type="text"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-label stacked>Contraseña</ion-label>\n				<ion-input type="password"></ion-input>\n			</ion-item>\n		</ion-list>\n	<button ion-button full color="barras">INICIAR SESIÓN</button>\n	<ion-toolbar style="margin-top:60%;">\n		<div class="toolbar-content">\n			<ion-segment>\n				<button ion-button small color="barras" role="button" tappable="" value="politica">¿Necesita ayuda?</button>\n				<button ion-button small color="barras" role="button" tappable="" value="terminos">¿Olvidó su contraseña?</button>\n			</ion-segment>\n		</div>\n	</ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\entrar\entrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EntrarPage);
    return EntrarPage;
}());

//# sourceMappingURL=entrar.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminosPage = (function () {
    function TerminosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TerminosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminos',template:/*ion-inline-start:"c:\cedum\src\pages\terminos\terminos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-item-divider color="barras" text-center><ion-icon name="arrow-dropleft" float-left></ion-icon>     Términos y condiciones de uso</ion-item-divider>\n	<div padding>\n	<p text-justify>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt erat ac mi tincidunt euismod. Nullam vulputate, sapien id scelerisque malesuada, dui sapien bibendum libero, eget fringilla tortor tellus sit amet sem. Mauris dignissim nulla vitae elit facilisis mattis. Integer at mi ac magna lacinia tristique. In consequat pretium felis, vehicula molestie turpis convallis pulvinar. Integer mollis, ex sit amet lacinia malesuada, sem urna convallis tortor, sed volutpat dolor nulla quis turpis. Suspendisse ac sem eu odio aliquet accumsan. Nullam vitae magna quam. Nulla nec neque rhoncus, vulputate metus quis, sagittis ante. Nam interdum sapien ut sagittis ullamcorper. Morbi quis arcu magna. In id libero sed urna lacinia fringilla. Aliquam a faucibus quam.</p>\n	<p text-justify>Aenean iaculis mollis nisi, vitae feugiat urna laoreet vitae. Fusce et venenatis libero, ac aliquam urna. Sed ante mi, dignissim a sollicitudin in, suscipit ac lectus. Phasellus a bibendum orci. Nunc lobortis lorem eget nisi ullamcorper, sit amet semper ligula pellentesque. Praesent molestie felis ac sem blandit, eu rhoncus odio imperdiet. Curabitur interdum urna in mi varius aliquet.</p>\n	<p text-justify>Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam id mattis sem. In vel consequat ipsum, at hendrerit diam. Maecenas enim arcu, sodales in dapibus ut, lacinia ut mauris. Cras augue lacus, fringilla ac odio nec, semper ullamcorper massa. Ut ac tempus neque, vitae porttitor purus. Curabitur posuere tellus nunc, non imperdiet ipsum volutpat a. Etiam quis feugiat est, vitae ultrices lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pulvinar purus massa. Curabitur a volutpat dui. Aliquam nec vehicula purus.</p>\n	<p text-justify>Nullam commodo interdum consectetur. Aliquam erat volutpat. In hac habitasse platea dictumst. Etiam porta felis vel efficitur rhoncus. Suspendisse sit amet nibh a tellus hendrerit tristique. In pharetra odio quis dui mattis feugiat. Duis non enim ac lacus porttitor ultricies.</p>\n	<p text-justify>Aliquam et tellus vel purus pretium ultricies. Sed sed velit fermentum, blandit erat ac, ornare nisl. Proin faucibus purus sit amet euismod eleifend. In et tempus lorem. Mauris accumsan pharetra ex, et pretium nisl tempus accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed bibendum vehicula diam non fermentum. Proin posuere tellus ut dolor consectetur sodales. Fusce malesuada id nunc at posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempor nisl tempus massa facilisis fringilla. Sed vitae quam egestas, tempor nulla ac, varius tortor. Vivamus suscipit arcu at consequat volutpat. Phasellus posuere lacus non nisl lobortis, vitae ultricies velit porttitor. Nunc sodales enim eget nulla blandit, et tristique nisl volutpat.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\terminos\terminos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TerminosPage);
    return TerminosPage;
}());

//# sourceMappingURL=terminos.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordarPage = (function () {
    function RecordarPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RecordarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recordar',template:/*ion-inline-start:"c:\cedum\src\pages\recordar\recordar.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<h3 text-center style="margin-top:15%;">CEDUM</h3>\n	<p text-center>Enviaremos a su correo electrónico la contraseña e indicaciones para acceder a su cuenta de usuario</p> \n		<ion-list>\n			<ion-item>\n				<ion-label stacked>Ingrese su correo</ion-label>\n				<ion-input type="email"></ion-input>\n			</ion-item>\n		</ion-list>\n	<button ion-button full color="barras">ACEPTAR</button>\n	<ion-toolbar style="margin-top:60%;">\n		<div class="toolbar-content">\n			<ion-segment>\n				<button ion-button small color="barras" role="button" tappable="" value="atras">Ir atras</button>\n				<button ion-button small color="barras" role="button" tappable="" value="ayuda">¿Necesita ayuda?</button>\n			</ion-segment>\n		</div>\n	</ion-toolbar>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\recordar\recordar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RecordarPage);
    return RecordarPage;
}());

//# sourceMappingURL=recordar.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AyudaPage = (function () {
    function AyudaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ayuda',template:/*ion-inline-start:"c:\cedum\src\pages\ayuda\ayuda.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Menú</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-item-divider color="barras" text-center><ion-icon name="arrow-dropleft" float-left></ion-icon>     Ayuda para acceder a su cuenta de usuario</ion-item-divider>\n	<div padding>\n		<p text-center>Para poder ayudarlo, indique el origen de la situación que se está presentando</p>\n		<ion-list radio-group [(ngModel)]="causa">\n			<ion-item>\n				<ion-radio value="contrasena" style="color:#000;"></ion-radio>\n				<ion-label text-justify text-wrap>He olvidado mi contraseña</ion-label>\n			</ion-item>\n			<ion-item>\n				<ion-radio value="sesion" ></ion-radio>\n				<ion-label text-justify text-wrap>Se cual es mi contraseña, sin embargo no puedo iniciar sesión</ion-label>\n			</ion-item>\n			<ion-item>\n				<ion-radio value="hacked"></ion-radio>\n				<ion-label text-justify text-wrap>Creo que otra persona está usando mi cuenta de usuario</ion-label>\n			</ion-item>\n			<ion-item>\n				<ion-radio value="usuario"></ion-radio>\n				<ion-label text-justify text-wrap>He olvidado mi nombre de usuario</ion-label>\n			</ion-item>\n		</ion-list>\n	</div>\n	<div padding>\n		<ion-toolbar color="cabezote">\n			<p color="cabezote">COMUNICARSE CON LA UNIVERSIDAD</p>\n			<ion-buttons end>\n				<button ion-button icon-only text-left>\n					<ion-icon name="call"></ion-icon>\n				</button>\n			</ion-buttons>\n		</ion-toolbar>\n	</div>\n</ion-content>\n'/*ion-inline-end:"c:\cedum\src\pages\ayuda\ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_politica_politica__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_entrar_entrar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terminos_terminos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recordar_recordar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_usuarios_usuarios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cursos_cursos__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_user__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_course_course__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_politica_politica__["a" /* PoliticaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_entrar_entrar__["a" /* EntrarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recordar_recordar__["a" /* RecordarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cursos_cursos__["a" /* CursosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cursos/cursos.module#CursosPageModule', name: 'CursosPage', segment: 'cursos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_politica_politica__["a" /* PoliticaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_entrar_entrar__["a" /* EntrarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminos_terminos__["a" /* TerminosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recordar_recordar__["a" /* RecordarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_usuarios_usuarios__["a" /* UsuariosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cursos_cursos__["a" /* CursosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_course_course__["a" /* CourseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_politica_politica__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_entrar_entrar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_terminos_terminos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recordar_recordar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ayuda_ayuda__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_usuarios_usuarios__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cursos_cursos__ = __webpack_require__(100);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Política de privacidad', component: __WEBPACK_IMPORTED_MODULE_5__pages_politica_politica__["a" /* PoliticaPage */] },
            { title: 'Entrar', component: __WEBPACK_IMPORTED_MODULE_6__pages_entrar_entrar__["a" /* EntrarPage */] },
            { title: 'Términos de uso', component: __WEBPACK_IMPORTED_MODULE_7__pages_terminos_terminos__["a" /* TerminosPage */] },
            { title: 'Recordar contraseña', component: __WEBPACK_IMPORTED_MODULE_8__pages_recordar_recordar__["a" /* RecordarPage */] },
            { title: 'Ayuda', component: __WEBPACK_IMPORTED_MODULE_9__pages_ayuda_ayuda__["a" /* AyudaPage */] },
            { title: 'Usuarios', component: __WEBPACK_IMPORTED_MODULE_10__pages_usuarios_usuarios__["a" /* UsuariosPage */] },
            { title: 'Mis cursos', component: __WEBPACK_IMPORTED_MODULE_11__pages_cursos_cursos__["a" /* CursosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\cedum\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\cedum\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map