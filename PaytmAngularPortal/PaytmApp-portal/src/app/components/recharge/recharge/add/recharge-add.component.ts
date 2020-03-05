import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Recharge } from '@app/models';
import { AbstractRecharge } from '../domain/abstract-recharge';

@Component({
    selector: "app-recharge-add",
    templateUrl: './recharge-add.component.html'
})
export class RechargeAddComponent extends AbstractRecharge implements OnInit, OnDestroy {
    recharge: Recharge;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.recharge = new Recharge();
        this.rechargeFormGroup = this.formBuilder.formGroup(this.recharge) as IFormGroup<Recharge>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
