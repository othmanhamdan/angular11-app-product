import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductComponent } from './component/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
