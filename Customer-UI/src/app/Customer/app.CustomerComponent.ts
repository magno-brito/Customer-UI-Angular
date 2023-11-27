import { Component } from '@angular/core';
import {Customer} from "./app.model";

@Component({
  templateUrl: './app.CustomerView.html',
})
// skcdk
export class CustomerComponent {
  title = 'Customer-UI';
  CustomerModel : Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear the UI


  }
}
