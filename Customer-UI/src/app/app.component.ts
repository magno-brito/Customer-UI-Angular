import { Component } from '@angular/core';
import {Customer} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
})
export class CustomerComponent {
  title = 'Customer-UI';
  CustomerModel : Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear the UI
    

  }
}
