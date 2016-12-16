import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {SupplierComponent} from "../Binder/SupplierComponent"
import {FormsModule} from "@angular/forms"
import {HttpModule, JsonpModule}   from "@angular/http";
import {GridComponent} from "../Binder/GridsComponent"
import {ApplicationRoutes} from "../Binder/Routing"
import {RouterOutlet, RouterModule} from "@angular/router"
import {CustomerComponent} from "../Binder/CustomerComponent"
import {MasterComponent} from "../Binder/MasterComponent"

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(ApplicationRoutes)],
    declarations: [SupplierComponent, GridComponent,CustomerComponent,MasterComponent],
    bootstrap: [MasterComponent]
})
export class MainModule { }