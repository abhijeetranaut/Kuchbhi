import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBus } from '../domain/abstract-bus';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Bus } from '@app/models';

@Component({
    selector: "app-bus-edit",
    templateUrl: './bus-edit.component.html'
})
export class BusEditComponent extends AbstractBus implements OnInit, OnDestroy {
    bus: Bus;
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
            this.busFormGroup = this.formBuilder.formGroup(Bus,t) as IFormGroup<Bus>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
