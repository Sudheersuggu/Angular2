"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Address_1 = require("./Address");
//interface IBusinessObject {
//    Add();
//}
var customer = (function () {
    function customer() {
        this._customerCode = "test";
        this.adressobj = new Address_1.Address();
    }
    Object.defineProperty(customer.prototype, "CustomerCode", {
        get: function () {
            return this._customerCode;
        },
        set: function (value) {
            if (value.length == 0) {
                throw "Customer Code not found";
            }
            this._customerCode = value;
        },
        enumerable: true,
        configurable: true
    });
    customer.prototype.Add = function () {
    };
    return customer;
}());
exports.customer = customer;
var childCustomer = (function (_super) {
    __extends(childCustomer, _super);
    function childCustomer() {
        _super.apply(this, arguments);
    }
    childCustomer.prototype.Add = function () {
    };
    return childCustomer;
}(customer));
//# sourceMappingURL=Customer.js.map