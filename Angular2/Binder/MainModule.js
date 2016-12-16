"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var SupplierComponent_1 = require("../Binder/SupplierComponent");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var GridsComponent_1 = require("../Binder/GridsComponent");
var Routing_1 = require("../Binder/Routing");
var router_1 = require("@angular/router");
var CustomerComponent_1 = require("../Binder/CustomerComponent");
var MasterComponent_1 = require("../Binder/MasterComponent");
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(Routing_1.ApplicationRoutes)],
            declarations: [SupplierComponent_1.SupplierComponent, GridsComponent_1.GridComponent, CustomerComponent_1.CustomerComponent, MasterComponent_1.MasterComponent],
            bootstrap: [MasterComponent_1.MasterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=MainModule.js.map