import {Component} from '@Angular/core'
import {SupplierComponent} from '../Binder/SupplierComponent'
import {CustomerComponent} from '../Binder/CustomerComponent'

export const ApplicationRoutes = [
    { path: 'Customer', component: CustomerComponent},
    { path: 'Supplier', component: SupplierComponent }
];