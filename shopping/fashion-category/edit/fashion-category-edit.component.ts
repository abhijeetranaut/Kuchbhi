import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFashionCategory } from '../domain/abstract-fashion-category';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FashionCategory } from '@app/models';

@Component({
    selector: "app-fashion-category-edit",
    templateUrl: './fashion-category-edit.component.html'
})
export class FashionCategoryEditComponent extends AbstractFashionCategory implements OnInit, OnDestroy {
    fashionCategory: FashionCategory;
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
            this.fashionCategoryFormGroup = this.formBuilder.formGroup(FashionCategory,t) as IFormGroup<FashionCategory>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
