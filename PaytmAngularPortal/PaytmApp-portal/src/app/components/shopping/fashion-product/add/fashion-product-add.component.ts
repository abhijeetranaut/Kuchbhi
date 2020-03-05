import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { FashionProduct } from '@app/models';
import { AbstractFashionProduct } from '../domain/abstract-fashion-product';

@Component({
    selector: "app-fashion-product-add",
    templateUrl: './fashion-product-add.component.html'
})
export class FashionProductAddComponent extends AbstractFashionProduct implements OnInit, OnDestroy {
    fashionProduct: FashionProduct;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.fashionProduct = new FashionProduct();
        this.fashionProductFormGroup = this.formBuilder.formGroup(this.fashionProduct) as IFormGroup<FashionProduct>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
