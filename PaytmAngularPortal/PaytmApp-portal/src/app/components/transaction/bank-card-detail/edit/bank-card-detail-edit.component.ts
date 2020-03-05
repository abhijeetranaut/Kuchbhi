import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBankCardDetail } from '../domain/abstract-bank-card-detail';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { BankCardDetail } from '@app/models';

@Component({
    selector: "app-bank-card-detail-edit",
    templateUrl: './bank-card-detail-edit.component.html'
})
export class BankCardDetailEditComponent extends AbstractBankCardDetail implements OnInit, OnDestroy {
    bankCardDetail: BankCardDetail;
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
            this.bankCardDetailFormGroup = this.formBuilder.formGroup(BankCardDetail,t) as IFormGroup<BankCardDetail>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
