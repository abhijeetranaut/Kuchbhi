import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFashionCategory } from '../domain/abstract-fashion-category';
import { FashionCategory } from "@app/models";
import { Subscription } from 'rxjs';
import { http } from '@rxweb/http';
import {temp} from 'src/app/components/dataJson';
import { Router } from '@angular/router';
// @http({
//     hostKey:"local",
//     path:"api/FashionSubCategory",
// })
@Component({
    selector:"app-fashion-category-list",
    templateUrl:'./fashion-category-list.component.html'
})
export class FashionCategoryListComponent extends AbstractFashionCategory implements OnInit, OnDestroy {
    fashionCategory: List<FashionCategory>;
    subscription: Subscription;
    id:number;
    ngOnInit():void{
        //this.get();
        console.log(temp[0].fashionCId);
        this.GetById(this.id);
        
    }
    constructor(private router:Router){
        super();
    }
    Get(){
        this.subscription = this.get().subscribe((t:List<FashionCategory>)=>{
            this.fashionCategory=t;
        })
        console.log(this.fashionCategory);
    }
    
    GetById(i :number){
        
    this.get({params:[i],queryParams:{FashionCategoryId:this.id}}).subscribe((t:List<FashionCategory>)=>{
        this.fashionCategory=t;
        // this.Get();
        this.router.navigateByUrl("fashion-sub-category");
        sessionStorage.setItem("code",this.id.toString());
        
    })
    console.log(this.fashionCategory);

    }
 
    
    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
