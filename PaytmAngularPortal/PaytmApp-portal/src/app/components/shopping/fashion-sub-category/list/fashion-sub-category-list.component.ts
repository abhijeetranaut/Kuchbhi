import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFashionSubCategory } from '../domain/abstract-fashion-sub-category';
import { FashionSubCategory, vFashionProduct } from "@app/models";
import { Subscription } from 'rxjs';
import {temp} from 'src/app/components/dataJson';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector:"app-fashion-sub-category-list",
    templateUrl:'./fashion-sub-category-list.component.html'
})
export class FashionSubCategoryListComponent extends AbstractFashionSubCategory implements OnInit, OnDestroy {

    fashionSubCategory: List<FashionSubCategory>;
    subscription: Subscription;
    id:number;
    Fid:number;
    data:any=temp;
    vfashionProduct:List<vFashionProduct>
    
    
    ngOnInit(): void {
        sessionStorage.getItem("code");
        // this.subscription = this.get().subscribe((t: List<FashionSubCategory>) => {
        //     this.fashionSubCategory = t;
        // })
        this.GetById(this.Fid);
        this.get({params:[1],queryParams:{fashionCategoryId:parseInt(sessionStorage.getItem("code"))}}).subscribe((t:List<FashionSubCategory>)=>{
            this.fashionSubCategory=t;
           
        })
        
        

    }

    constructor(private router:Router)
    {
        super();
        this.GetById(this.id);
    }
  ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
            // console.log(temp[1].fashionCId);
    }
    GetById(i :number){
        // if(sessionStorage.getItem("code")!=null)
        // {        this.get({params:[i],queryParams:{fashionCategoryId:sessionStorage.getItem("code")}}).subscribe((t:List<FashionSubCategory>)=>{
        //     this.fashionSubCategory=t;
        // })
        // }
       
            // 
            this.get({params:[i],queryParams:{FashionSubCategoryId:this.Fid}}).subscribe((t:List<vFashionProduct>)=>{
                this.vfashionProduct=t;
               this.router.navigateByUrl("v-fashion-product");
               sessionStorage.setItem("value",this.Fid.toString());
            })
            

            var x=sessionStorage.getItem("code");
        console.log(this.fashionSubCategory);

}
}