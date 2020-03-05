import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Bus } from '@app/models';
import { AbstractBus } from '../domain/abstract-bus';

@Component({
    selector: "app-bus-add",
    templateUrl: './bus-add.component.html'
})
export class BusAddComponent extends AbstractBus implements OnInit, OnDestroy {
    bus: Bus;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.bus = new Bus();
        this.busFormGroup = this.formBuilder.formGroup(this.bus) as IFormGroup<Bus>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
