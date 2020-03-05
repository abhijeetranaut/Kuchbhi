import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { FashionSubCategory } from '@app/models';
import { AbstractFashionSubCategory } from '../domain/abstract-fashion-sub-category';

@Component({
    selector: "app-fashion-sub-category-add",
    templateUrl: './fashion-sub-category-add.component.html'
})
export class FashionSubCategoryAddComponent extends AbstractFashionSubCategory implements OnInit, OnDestroy {
    fashionSubCategory: FashionSubCategory;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.fashionSubCategory = new FashionSubCategory();
        this.fashionSubCategoryFormGroup = this.formBuilder.formGroup(this.fashionSubCategory) as IFormGroup<FashionSubCategory>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
