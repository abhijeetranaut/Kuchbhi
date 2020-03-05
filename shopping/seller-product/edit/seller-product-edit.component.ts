import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractSellerProduct } from '../domain/abstract-seller-product';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { SellerProduct } from '@app/models';

@Component({
    selector: "app-seller-product-edit",
    templateUrl: './seller-product-edit.component.html'
})
export class SellerProductEditComponent extends AbstractSellerProduct implements OnInit, OnDestroy {
    sellerProduct: SellerProduct;
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
            this.sellerProductFormGroup = this.formBuilder.formGroup(SellerProduct,t) as IFormGroup<SellerProduct>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
