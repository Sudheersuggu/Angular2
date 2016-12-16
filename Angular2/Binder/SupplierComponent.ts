import { Component } from "@angular/core";
import { Supplier } from "../Model/Supplier";
import {FactorySupplier} from "../Services/FactorySuppliers";

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/RX";
import 'rxjs/add/operator/map'

@Component({
    providers: [FactorySupplier],
    selector: "main-ui",
    templateUrl: "../UI/Supplier.html"
})
export class SupplierComponent {
    fact: FactorySupplier = null;
    SupplierCurrent: Supplier = null;
    http: Http = null;

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

    Submit() {
        //post
        let data = JSON.stringify(this.Suppliers);
        //we make this json String
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers })
        this.http.post("http://localhost:56313/api/supplier", data, options)
            .subscribe(
            res => this.Mapping(res.json()),
            err => this.logError(err));
    }
    Mapping(res: any) {
        this.Suppliers = res;
    }
    logError(err: any) {
        console.log(err);
    }

    constructor(_fact: FactorySupplier, _http: Http) {
        this.http = _http;
        this.fact = _fact;
        this.SupplierCurrent = this.fact.Create(2);
        var supp = new Supplier();
        supp.SupplierName = "test";
        supp.SupplierCode = "Code";
        supp.SupplierAmount = 12.00;
        this.Suppliers.push(supp);
    }

    ngOnInit() {
        console.log("onINIT");
    }

    ngAfterContentInit() {
        console.log("on After Content Init");
    }

}