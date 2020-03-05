import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';
import {IFormGroup, RxFormBuilder,FormBuilderConfiguration,FormGroupExtension } from '@rxweb/reactive-form-validators';
import { FormGroup, Validators, FormBuilder } from "@angular/forms"
import {  prop } from "@rxweb/reactive-form-validators"
import { SellerProduct } from '@app/models';
import { AbstractSellerProduct } from '../domain/abstract-seller-product';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector: "app-seller-product-add",
    templateUrl: './seller-product-add.component.html'
})
export class SellerProductAddComponent extends AbstractSellerProduct implements OnInit, OnDestroy {
    sellerProduct: SellerProduct;
    subscription: Subscription;
    productAddGroup:FormGroup;
    brandId:any; fashionCategoryId:any; result:any;

    constructor(private formBuilder: RxFormBuilder,private builder:FormBuilder) {
        super();
    }

    ngOnInit(): void {
        let seller = new Seller();
        this.productAddGroup = this.builder.group({
            sellerId:'',
            sellerName:'',
            productName:'',
            description:'',
            price:'',
            sellerProduct:''
        });
        this.sellerProduct = new SellerProduct();
        
        //this.sellerProductFormGroup = this.builder.group(this.sellerProduct) as IFormGroup<SellerProduct>;
    }
    selectBrandHandler(event:any)
    {
        this.brandId = event.target.value;
    }
    selectFashionCategoryIdHandler(event:any)
    {
        this.fashionCategoryId =event.target.value;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    
    Post(){
        console.log(this.brandId)
        console.log(this.fashionCategoryId);
        console.log("post");
        this.post({body:{SellerId:this.sellerProductFormGroup.controls.sellerId.value,
             ProductName:this.sellerProductFormGroup.controls.productName.value,
             FashionCategoryId:this.fashionCategoryId,
             Price:this.sellerProductFormGroup.controls.price.value,
             Description:this.sellerProductFormGroup.controls.description.value,
             BrandId:this.brandId}}).subscribe(res=>{
                this.result = res;
                console.log(this.sellerProductFormGroup.value);
        })
      //  console.log(this.res);
    }

}
export class Seller{

    @prop()
    sellerId: number;
  
    @prop()
    sellerName: string;
  
   @prop()
   productName: string;

   @prop()
   description:string;

   @prop()
   price:number;
  }
