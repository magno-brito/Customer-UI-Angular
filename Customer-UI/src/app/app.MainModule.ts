import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerComponent} from './Customer/app.CustomerComponent';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Home/app.HomeComponent';
import { SupplierComponent } from './Supplier/app.SupplierComponent';
import { MasterPageComponent } from './Home/app.MasterPageComponent';
import {MainRoutes} from "./Routing/CustomerApp.MainRouting"

@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    SupplierComponent,
    MasterPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)


  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CostumerModule { }
