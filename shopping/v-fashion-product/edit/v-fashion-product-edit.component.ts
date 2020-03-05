import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvFashionProduct } from '../domain/abstract-v-fashion-product';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vFashionProduct } from '@app/models';
import { anonymous } from '@rxweb/angular-router';
@anonymous()
@Component({
    selector: "app-v-fashion-product-edit",
    templateUrl: './v-fashion-product-edit.component.html'
})
export class vFashionProductEditComponent extends AbstractvFashionProduct implements OnInit, OnDestroy {
    vFashionProduct: vFashionProduct;
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
            this.vFashionProductFormGroup = this.formBuilder.formGroup(vFashionProduct,t) as IFormGroup<vFashionProduct>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
