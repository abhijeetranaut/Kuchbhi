import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvFashionProduct } from '../domain/abstract-v-fashion-product';
import { vFashionProduct } from "@app/models";
import { Subscription } from 'rxjs';
import {temp} from 'src/app/components/dataJson';
import { Router } from '@angular/router';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector:"app-v-fashion-product-list",
    templateUrl:'./v-fashion-product-list.component.html'
})
export class vFashionProductListComponent extends AbstractvFashionProduct implements OnInit, OnDestroy {
    vFashionProduct: List<vFashionProduct>;
    subscription: Subscription;
    Fid:number;
    Pid:number;
    data:any=temp;
    ngOnInit(): void {
        // this.subscription = this.get().subscribe((t: List<vFashionProduct>) => {
        //     this.vFashionProduct = t;
        //     //this.GetById(this.Fid);
            
        // })\
        this.GetById(this.Pid);
        this.get({params:[1],queryParams:{FashionSubCategoryId:parseInt(sessionStorage.getItem("value"))}}).subscribe((t:List<vFashionProduct>)=>{
            this.vFashionProduct=t;
           
        })
    }
    constructor(private router:Router)
    {
        super();
        //this.GetById(this.Fid);
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    
    GetById(i :number){
        this.get({params:[i],queryParams:{fashionProductId:this.Pid}}).subscribe((t:List<vFashionProduct>)=>{
            this.vFashionProduct=t;
            this.router.navigateByUrl("v-cart-item");
            sessionStorage.setItem("data",this.Pid.toString());
            // console.log(this.vFashionProduct);

        })
        
    }


   // console.log(this.vFashionProduct);

   // }

}
