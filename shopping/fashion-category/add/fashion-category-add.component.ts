import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { FashionCategory } from '@app/models';
import { AbstractFashionCategory } from '../domain/abstract-fashion-category';

@Component({
    selector: "app-fashion-category-add",
    templateUrl: './fashion-category-add.component.html'
})
export class FashionCategoryAddComponent extends AbstractFashionCategory implements OnInit, OnDestroy {
    fashionCategory: FashionCategory;
    subscription: Subscription;
    fashionCategoryGroup : IFormGroup<FashionCategory>;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        
        this.fashionCategory = new FashionCategory();
        this.fashionCategoryGroup = this.formBuilder.formGroup(this.fashionCategory) as IFormGroup<FashionCategory>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    Post(){
        this.subscription =this.post({body:{fashionCategoryName:this.fashionCategoryGroup.controls.fashionCategoryName.value}}).subscribe(res=>{
        })
        console.log(this.fashionCategory);
    }

}
