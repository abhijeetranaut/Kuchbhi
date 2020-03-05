import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFashionProduct } from '../domain/abstract-fashion-product';
import { FashionProduct } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-fashion-product-list",
    templateUrl:'./fashion-product-list.component.html'
})
export class FashionProductListComponent extends AbstractFashionProduct implements OnInit, OnDestroy {
    fashionProduct: List<FashionProduct>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<FashionProduct>) => {
            this.fashionProduct = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
