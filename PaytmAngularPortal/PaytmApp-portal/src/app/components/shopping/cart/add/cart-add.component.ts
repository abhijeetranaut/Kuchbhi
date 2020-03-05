import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Cart } from '@app/models';
import { AbstractCart } from '../domain/abstract-cart';

@Component({
    selector: "app-cart-add",
    templateUrl: './cart-add.component.html'
})
export class CartAddComponent extends AbstractCart implements OnInit, OnDestroy {
    cart: Cart;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.cart = new Cart();
        this.cartFormGroup = this.formBuilder.formGroup(this.cart) as IFormGroup<Cart>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
