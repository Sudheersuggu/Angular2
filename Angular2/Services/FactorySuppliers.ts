import {Injectable} from '@angular/core';
import {Supplier, SupplierStrict} from "../Model/Supplier"

@Injectable()
export class FactorySupplier {
    Create(type: number): Supplier {
        if (type == 1) {
            return new Supplier();
        }
        else {
            return new SupplierStrict();
        }
    }
}
