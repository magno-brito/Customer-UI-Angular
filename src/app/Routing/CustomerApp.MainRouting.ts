import { HomeComponent } from "../Home/app.HomeComponent";

export const MainRoutes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Customer', loadChildren: () => import('../Customer/app.CustomerModule').then(m => m.CustomerModule) },
  { path: 'Supplier', loadChildren: () => import('../Supplier/app.SupplierModule').then(m => m.SupplierModule) },

  { path: "", component: HomeComponent}
]
