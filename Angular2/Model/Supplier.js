"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Supplier = (function () {
    function Supplier() {
        this.SupplierName = "";
        this.SupplierCode = "";
        this.SupplierAmount = 0;
    }
    Supplier.prototype.validate = function () {
        if (this.SupplierName.length == 0) {
            return false;
        }
        return true;
    };
    return Supplier;
}());
exports.Supplier = Supplier;
var SupplierStrict = (function (_super) {
    __extends(SupplierStrict, _super);
    function SupplierStrict() {
        _super.apply(this, arguments);
    }
    SupplierStrict.prototype.validate = function () {
        if (this.SupplierName.length == 0) {
            return false;
        }
        if (this.SupplierCode.length == 0) {
            return false;
        }
        return true;
    };
    return SupplierStrict;
}(Supplier));
exports.SupplierStrict = SupplierStrict;
//# sourceMappingURL=Supplier.js.map