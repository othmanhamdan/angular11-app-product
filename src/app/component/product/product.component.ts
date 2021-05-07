import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../module/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/products.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products$: Observable<AppDataState<Product[]>> | null=null;
  readonly dataStateEnum=DataStateEnum;

  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProduct(){
      this.products$=this.productService.getAllProducts().pipe(
        map(data=>({dataState:DataStateEnum.LOADED, data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message})
      ));


  }
  onGetSelectedProduct() {
    this.products$=this.productService.getSelectedProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message})
      ));

  }

  onGetAvailableProduct() {
    this.products$=this.productService.getAvailableProducts().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message})
      ));
  }

  onSearch(dataForm: any) {
    this.products$=this.productService.searchProducts(dataForm.keyword).pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err =>of({dataState:DataStateEnum.ERROR, errorMessage:err.message})
      ));

    
  }

  onSelect(p) {
    this.productService.select(p).subscribe(data=>{
      p.selected=data.selected;
    })
  }

  onDelete(p:Product) {
    let v=confirm("Etes vous sûre ??");
    if (v == true) 
    this.productService.delete(p).subscribe(data=>{
      this.onGetAllProduct();
    });
  }

  onNewProduct() {
      this.router.navigateByUrl("/newProduct");
  }

  onEdit(p) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }
}
