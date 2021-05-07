import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number;
  productFormGroup:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private formBuilder:FormBuilder) {
    this.productId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product=>{
        this.productFormGroup=this.formBuilder.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required]
        })
      },err=>{
        console.log(err);
      });
  }

  onEditProduct() {
    this.productService.updateProducts(this.productFormGroup.value)
      .subscribe(data=>{
        alert("Success product updated");
      },err=>{
        console.log(err);
      });
  }
}
