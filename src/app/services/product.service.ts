import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../module/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }
  getAvailableProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }
  searchProducts(keyword):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
  select(produit:Product):Observable<Product>{
    let host=environment.host;
    produit.selected=!produit.selected;
    return this.http.put<Product>(host+"/products/"+produit.id,produit);
  }
  delete(produit:Product):Observable<void>{
    let host=environment.host;
    return this.http.delete<void>(host+"/products/"+produit.id);
  }
  saveProduct(produit:Product):Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/products",produit);
  }
  getProduct(id:number|null):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+id);
  }
  updateProducts(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id, product);
  }
}

