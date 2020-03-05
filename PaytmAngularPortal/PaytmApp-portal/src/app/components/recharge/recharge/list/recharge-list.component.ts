import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractRecharge } from '../domain/abstract-recharge';
import { Recharge } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-recharge-list",
    templateUrl:'./recharge-list.component.html'
})
export class RechargeListComponent extends AbstractRecharge implements OnInit, OnDestroy {
    recharge: List<Recharge>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Recharge>) => {
            this.recharge = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
