import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './component/product/product.component';
import {HomeComponent} from './component/home/home.component';
import {ProductAddComponent} from './component/product-add/product-add.component';
import {ProductEditComponent} from './component/product-edit/product-edit.component';

const routes : Routes = [
  {path: "product", component:ProductComponent},
  {path: "newProduct", component:ProductAddComponent},
  {path: "editProduct/:id", component:ProductEditComponent},
  {path: "" , component:HomeComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
