import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCart } from '../domain/abstract-cart';
import { Cart } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-cart-list",
    templateUrl:'./cart-list.component.html'
})
export class CartListComponent extends AbstractCart implements OnInit, OnDestroy {
    cart: List<Cart>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Cart>) => {
            this.cart = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
