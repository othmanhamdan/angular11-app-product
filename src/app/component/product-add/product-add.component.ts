import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private productService:ProductService ) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[false,Validators.required],
      available:[false,Validators.required]
    });

  }

  onSaveProduct() {
    this.submitted=true;
    if (this.productFormGroup.invalid) return
    this.productService.saveProduct(this.productFormGroup.value)
      .subscribe(data=>{
        alert("success saving product");
      });
  }
}
