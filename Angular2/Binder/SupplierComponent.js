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
var Supplier_1 = require("../Model/Supplier");
var FactorySuppliers_1 = require("../Services/FactorySuppliers");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var SupplierComponent = (function () {
    function SupplierComponent(_fact, _http) {
        this.fact = null;
        this.SupplierCurrent = null;
        this.http = null;
        //collections
        this.Suppliers = new Array();
        this.http = _http;
        this.fact = _fact;
        this.SupplierCurrent = this.fact.Create(2);
        var supp = new Supplier_1.Supplier();
        supp.SupplierName = "test";
        supp.SupplierCode = "Code";
        supp.SupplierAmount = 12.00;
        this.Suppliers.push(supp);
    }
    SupplierComponent.prototype.Select = function (Suppselected) {
        //this.SupplierCurrent = Suppselected;
        this.SupplierCurrent.SupplierName = Suppselected.SupplierName;
        this.SupplierCurrent.SupplierCode = Suppselected.SupplierCode;
        this.SupplierCurrent.SupplierAmount = Suppselected.SupplierAmount;
    };
    SupplierComponent.prototype.Add = function () {
        this.Suppliers.push(this.SupplierCurrent);
        this.SupplierCurrent = this.fact.Create(2);
    };
    SupplierComponent.prototype.Submit = function () {
        var _this = this;
        //post
        var data = JSON.stringify(this.Suppliers);
        //we make this json String
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post("http://localhost:56313/api/supplier", data, options)
            .subscribe(function (res) { return _this.Mapping(res.json()); }, function (err) { return _this.logError(err); });
    };
    SupplierComponent.prototype.Mapping = function (res) {
        this.Suppliers = res;
    };
    SupplierComponent.prototype.logError = function (err) {
        console.log(err);
    };
    SupplierComponent.prototype.ngOnInit = function () {
        console.log("onINIT");
    };
    SupplierComponent.prototype.ngAfterContentInit = function () {
        console.log("on After Content Init");
    };
    SupplierComponent = __decorate([
        core_1.Component({
            providers: [FactorySuppliers_1.FactorySupplier],
            selector: "main-ui",
            templateUrl: "../UI/Supplier.html"
        }), 
        __metadata('design:paramtypes', [FactorySuppliers_1.FactorySupplier, http_1.Http])
    ], SupplierComponent);
    return SupplierComponent;
}());
exports.SupplierComponent = SupplierComponent;
//# sourceMappingURL=SupplierComponent.js.map