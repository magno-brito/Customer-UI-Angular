import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerComponent} from './app.CustomerComponent';
import { FormsModule } from '@angular/forms';
import {CustomerRoutes} from "../Routing/CustomerApp.CustomerRouting copy"

@NgModule({
  declarations: [
    CustomerComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes)


  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
