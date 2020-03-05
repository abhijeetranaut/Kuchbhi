import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractWallet } from '../domain/abstract-wallet';
import { Wallet } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-wallet-list",
    templateUrl:'./wallet-list.component.html'
})
export class WalletListComponent extends AbstractWallet implements OnInit, OnDestroy {
    wallet: List<Wallet>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Wallet>) => {
            this.wallet = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
