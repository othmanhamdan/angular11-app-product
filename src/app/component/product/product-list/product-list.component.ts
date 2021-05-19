import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionEvent} from '../../../state/products.state';
import {Product} from '../../../module/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productsInput$: Observable<AppDataState<Product[]>> | null=null;
  @Output() productEventEmitter : EventEmitter<ActionEvent>= new EventEmitter<any>();
  readonly dataStateEnum=DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionEvent.SELECT_PRODUCT,payload:p
    });
  }
  onDelete(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionEvent.DELETE_PRODUCT,payload:p
    });
  }
  onEdit(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionEvent.UPDATE_PRODUCT,payload:p
    });
  }

  onActionEventItem($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionEvent.SELECT_PRODUCT: this.onSelect($event.payload);break;
      case ProductActionEvent.DELETE_PRODUCT: this.onDelete($event.payload);break;
      case ProductActionEvent.UPDATE_PRODUCT: this.onEdit($event.payload);break;

    }

  }
}
