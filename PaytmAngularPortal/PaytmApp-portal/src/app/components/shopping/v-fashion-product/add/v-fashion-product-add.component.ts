import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vFashionProduct } from '@app/models';
import { AbstractvFashionProduct } from '../domain/abstract-v-fashion-product';

@Component({
    selector: "app-v-fashion-product-add",
    templateUrl: './v-fashion-product-add.component.html'
})
export class vFashionProductAddComponent extends AbstractvFashionProduct implements OnInit, OnDestroy {
    vFashionProduct: vFashionProduct;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vFashionProduct = new vFashionProduct();
        this.vFashionProductFormGroup = this.formBuilder.formGroup(this.vFashionProduct) as IFormGroup<vFashionProduct>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
