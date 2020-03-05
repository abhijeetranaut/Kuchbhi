import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractSellerProduct } from '../domain/abstract-seller-product';
import { SellerProduct } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-seller-product-list",
    templateUrl:'./seller-product-list.component.html'
})
export class SellerProductListComponent extends AbstractSellerProduct implements OnInit, OnDestroy {
    sellerProduct: List<SellerProduct>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<SellerProduct>) => {
            this.sellerProduct = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
