export class Supplier {
    SupplierName: string = "";
    SupplierCode: string = "";
    SupplierAmount: number = 0;
    validate(): boolean {
        if (this.SupplierName.length == 0) {
            return false;
        }
        return true;
    }
}

export class SupplierStrict extends Supplier {
    validate(): boolean {
        if (this.SupplierName.length == 0) {
            return false;
        }
        if (this.SupplierCode.length == 0) {
            return false;
        }
        return true;
    }
}