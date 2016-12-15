import { Component } from "@angular/core";
import { Supplier } from "../Model/Supplier";
import {FactorySupplier} from "../Services/FactorySuppliers"

@Component({
    providers: [FactorySupplier],
    selector: "main-ui",
    templateUrl: "../UI/Supplier.html"
})
export class SupplierComponent {
    fact: FactorySupplier = null;
    SupplierCurrent: Supplier = null;

    //collections
    Suppliers: Array<Supplier> = new Array<Supplier>();

    Select(Suppselected: Supplier) {
        //this.SupplierCurrent = Suppselected;
        this.SupplierCurrent.SupplierName = Suppselected.SupplierName;
        this.SupplierCurrent.SupplierCode = Suppselected.SupplierCode;
        this.SupplierCurrent.SupplierAmount = Suppselected.SupplierAmount;
    }

    Add() {
        this.Suppliers.push(this.SupplierCurrent);
        this.SupplierCurrent = this.fact.Create(2);
    }

    constructor(_fact: FactorySupplier) {
        this.fact = _fact;
        this.SupplierCurrent = this.fact.Create(2);
    }
}