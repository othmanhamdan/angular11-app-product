import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../module/product.model';
import {ActionEvent, ProductActionEvent} from '../../../../state/products.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() p:Product;
  @Output() eventEmitterItem: EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:Product){
    this.eventEmitterItem.emit({type:ProductActionEvent.SELECT_PRODUCT,payload:p})
  }
  onDelete(p:Product){
    this.eventEmitterItem.emit({type:ProductActionEvent.DELETE_PRODUCT,payload:p})
  }
  onEdit(p:Product){
    this.eventEmitterItem.emit({type:ProductActionEvent.UPDATE_PRODUCT,payload:p})
  }

}
