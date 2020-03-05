import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Wallet } from '@app/models';
import { AbstractWallet } from '../domain/abstract-wallet';

@Component({
    selector: "app-wallet-add",
    templateUrl: './wallet-add.component.html'
})
export class WalletAddComponent extends AbstractWallet implements OnInit, OnDestroy {
    wallet: Wallet;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.wallet = new Wallet();
        this.walletFormGroup = this.formBuilder.formGroup(this.wallet) as IFormGroup<Wallet>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
