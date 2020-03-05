import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractTransaction } from '../domain/abstract-transaction';
import { Transaction } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-transaction-list",
    templateUrl:'./transaction-list.component.html'
})
export class TransactionListComponent extends AbstractTransaction implements OnInit, OnDestroy {
    transaction: List<Transaction>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Transaction>) => {
            this.transaction = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
