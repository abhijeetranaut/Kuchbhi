import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractRecharge } from '../domain/abstract-recharge';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Recharge } from '@app/models';

@Component({
    selector: "app-recharge-edit",
    templateUrl: './recharge-edit.component.html'
})
export class RechargeEditComponent extends AbstractRecharge implements OnInit, OnDestroy {
    recharge: Recharge;
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
            this.rechargeFormGroup = this.formBuilder.formGroup(Recharge,t) as IFormGroup<Recharge>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
