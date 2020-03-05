import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractPaytmUser } from '../domain/abstract-paytm-user';
import { PaytmUser } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-paytm-user-list",
    templateUrl:'./paytm-user-list.component.html'
})
export class PaytmUserListComponent extends AbstractPaytmUser implements OnInit, OnDestroy {
    paytmUsers: List<PaytmUser>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<PaytmUser>) => {
            this.paytmUsers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
