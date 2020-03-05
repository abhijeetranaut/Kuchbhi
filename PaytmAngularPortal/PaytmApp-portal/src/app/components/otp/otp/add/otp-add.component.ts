import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { OTP } from '@app/models';
import { AbstractOtp } from '../domain/abstract-otp';

@Component({
    selector: "app-otp-add",
    templateUrl: './otp-add.component.html'
})
export class OtpAddComponent extends AbstractOtp implements OnInit, OnDestroy {
    otp: AbstractOtp;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.otp = new AbstractOtp();
        this.otpFormGroup = this.formBuilder.formGroup(this.otp) as IFormGroup<OTP>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
