import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractWallet } from '../domain/abstract-wallet';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Wallet } from '@app/models';

@Component({
    selector: "app-wallet-edit",
    templateUrl: './wallet-edit.component.html'
})
export class WalletEditComponent extends AbstractWallet implements OnInit, OnDestroy {
    wallet: Wallet;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.walletFormGroup = this.formBuilder.formGroup(Wallet,t) as IFormGroup<Wallet>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
