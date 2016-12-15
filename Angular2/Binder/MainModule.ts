import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {SupplierComponent} from "../Binder/SupplierComponent"
import {FormsModule} from "@angular/forms"
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [SupplierComponent],
    bootstrap: [SupplierComponent]
})
export class MainModule { }