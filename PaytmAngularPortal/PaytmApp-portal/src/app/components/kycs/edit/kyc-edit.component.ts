import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractKyc } from '../domain/abstract-kyc';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { KycDetail } from '@app/models';

@Component({
    selector: "app-kyc-edit",
    templateUrl: './kyc-edit.component.html'
})
export class KycEditComponent extends AbstractKyc implements OnInit, OnDestroy {
    kyc: KycDetail;
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
            this.kycFormGroup = this.formBuilder.formGroup(KycDetail,t) as IFormGroup<KycDetail>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
