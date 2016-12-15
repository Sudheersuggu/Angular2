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
var FactorySuppliers_1 = require("../Services/FactorySuppliers");
var SupplierComponent = (function () {
    function SupplierComponent(_fact) {
        this.fact = null;
        this.SupplierCurrent = null;
        //collections
        this.Suppliers = new Array();
        this.fact = _fact;
        this.SupplierCurrent = this.fact.Create(2);
    }
    SupplierComponent.prototype.Select = function (Suppselected) {
        this.SupplierCurrent = Suppselected;
    };
    SupplierComponent.prototype.Add = function () {
        this.Suppliers.push(this.SupplierCurrent);
        this.SupplierCurrent = this.fact.Create(2);
    };
    SupplierComponent = __decorate([
        core_1.Component({
            providers: [FactorySuppliers_1.FactorySupplier],
            selector: "main-ui",
            templateUrl: "../UI/Supplier.html"
        }), 
        __metadata('design:paramtypes', [FactorySuppliers_1.FactorySupplier])
    ], SupplierComponent);
    return SupplierComponent;
}());
exports.SupplierComponent = SupplierComponent;
//# sourceMappingURL=SupplierComponent.js.map