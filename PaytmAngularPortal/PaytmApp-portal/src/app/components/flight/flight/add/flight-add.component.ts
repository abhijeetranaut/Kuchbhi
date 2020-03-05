import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Flight } from '@app/models';
import { AbstractFlight } from '../domain/abstract-flight';

@Component({
    selector: "app-flight-add",
    templateUrl: './flight-add.component.html'
})
export class FlightAddComponent extends AbstractFlight implements OnInit, OnDestroy {
    flight: Flight;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.flight = new Flight();
        this.flightFormGroup = this.formBuilder.formGroup(this.flight) as IFormGroup<Flight>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
