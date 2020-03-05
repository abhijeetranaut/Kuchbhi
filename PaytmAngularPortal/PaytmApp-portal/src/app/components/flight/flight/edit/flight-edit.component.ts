import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractFlight } from '../domain/abstract-flight';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Flight } from '@app/models';

@Component({
    selector: "app-flight-edit",
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent extends AbstractFlight implements OnInit, OnDestroy {
    flight: Flight;
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
            this.flightFormGroup = this.formBuilder.formGroup(Flight,t) as IFormGroup<Flight>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
