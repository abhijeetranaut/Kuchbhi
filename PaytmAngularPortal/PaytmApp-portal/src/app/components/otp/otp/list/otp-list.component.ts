import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractOtp } from '../domain/abstract-otp';
import { OTP } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-otp-list",
    templateUrl:'./otp-list.component.html'
})
export class OtpListComponent extends AbstractOtp implements OnInit, OnDestroy {
    otp: List<OTP>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<OTP>) => {
            this.otp = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
