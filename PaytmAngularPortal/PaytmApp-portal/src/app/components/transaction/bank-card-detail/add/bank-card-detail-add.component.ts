import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { BankCardDetail } from '@app/models';
import { AbstractBankCardDetail } from '../domain/abstract-bank-card-detail';

@Component({
    selector: "app-bank-card-detail-add",
    templateUrl: './bank-card-detail-add.component.html'
})
export class BankCardDetailAddComponent extends AbstractBankCardDetail implements OnInit, OnDestroy {
    bankCardDetail: BankCardDetail;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.bankCardDetail = new BankCardDetail();
        this.bankCardDetailFormGroup = this.formBuilder.formGroup(this.bankCardDetail) as IFormGroup<BankCardDetail>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
