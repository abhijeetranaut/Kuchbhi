import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractKyc } from '../domain/abstract-kyc';
import { KycDetail } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-kyc-list",
    templateUrl:'./kyc-list.component.html'
})
export class KycListComponent extends AbstractKyc implements OnInit, OnDestroy {
    kycs: List<KycDetail>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<KycDetail>) => {
            this.kycs = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
