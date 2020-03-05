import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCart } from '../domain/abstract-cart';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Cart } from '@app/models';

@Component({
    selector: "app-cart-edit",
    templateUrl: './cart-edit.component.html'
})
export class CartEditComponent extends AbstractCart implements OnInit, OnDestroy {
    cart: Cart;
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
            this.cartFormGroup = this.formBuilder.formGroup(Cart,t) as IFormGroup<Cart>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
