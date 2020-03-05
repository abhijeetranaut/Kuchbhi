import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBankCardDetail } from '../domain/abstract-bank-card-detail';
import { BankCardDetail } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-bank-card-detail-list",
    templateUrl:'./bank-card-detail-list.component.html'
})
export class BankCardDetailListComponent extends AbstractBankCardDetail implements OnInit, OnDestroy {
    bankCardDetail: List<BankCardDetail>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<BankCardDetail>) => {
            this.bankCardDetail = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
