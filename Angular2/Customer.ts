import {Address} from "./Address"

//interface IBusinessObject {
//    Add();
//}

export class customer {
    private _customerCode: string = "test";
    private adressobj: Address = new Address();
    public set CustomerCode(value: string) {
        if (value.length == 0) {
            throw "Customer Code not found";
        }
        this._customerCode = value;
    }

    public get CustomerCode(): string {
        return this._customerCode;
    }
    Add() {
    }
}

class childCustomer extends customer {
    Add() {
    }
}