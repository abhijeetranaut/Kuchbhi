import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFashionProduct } from '../domain/abstract-fashion-product';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { FashionProduct } from '@app/models';

@Component({
    selector: "app-fashion-product-edit",
    templateUrl: './fashion-product-edit.component.html'
})
export class FashionProductEditComponent extends AbstractFashionProduct implements OnInit, OnDestroy {
    fashionProduct: FashionProduct;
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
            this.fashionProductFormGroup = this.formBuilder.formGroup(FashionProduct,t) as IFormGroup<FashionProduct>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
