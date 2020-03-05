import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFashionSubCategory } from '../domain/abstract-fashion-sub-category';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FashionSubCategory } from '@app/models';

@Component({
    selector: "app-fashion-sub-category-edit",
    templateUrl: './fashion-sub-category-edit.component.html'
})
export class FashionSubCategoryEditComponent extends AbstractFashionSubCategory implements OnInit, OnDestroy {
    fashionSubCategory: FashionSubCategory;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.fashionSubCategoryFormGroup = this.formBuilder.formGroup(FashionSubCategory,t) as IFormGroup<FashionSubCategory>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
