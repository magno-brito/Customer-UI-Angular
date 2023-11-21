import { CustomerComponent } from "../Customer/app.CustomerComponent";
import { HomeComponent } from "../Home/app.HomeComponent";
import { SupplierComponent } from "../Supplier/app.SupplierComponent";

export const MainRoutes = [
  { path: 'Home', component: HomeComponent},
  { path: "Customer", component: CustomerComponent},
  { path: "Supplier", component: SupplierComponent},
  { path: "", component: HomeComponent}
]
