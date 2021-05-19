import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionEvent} from '../../../state/products.state';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {
  @Output() productEventEmitter : EventEmitter<ActionEvent>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  onGetAllProduct(){
    this.productEventEmitter.emit({type:ProductActionEvent.GET_ALL_PRODUCTS});
  }
  onGetSelectedProduct(){
    this.productEventEmitter.emit({type:ProductActionEvent.GET_SELECTED_PRODUCTS});
  }
  onGetAvailableProduct(){
    this.productEventEmitter.emit({type:ProductActionEvent.GET_AVAILABLE_PRODUCTS});
  }
  onNewProduct(){
    this.productEventEmitter.emit({type:ProductActionEvent.NEW_PRODUCTS});
  }
  onSearch(dataForm:any){
    this.productEventEmitter.emit({type:ProductActionEvent.SEARCH_PRODUCTS,payload:dataForm});
  }
}
