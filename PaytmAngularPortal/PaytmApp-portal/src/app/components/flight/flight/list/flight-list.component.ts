import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractFlight } from '../domain/abstract-flight';
import { Flight } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-flight-list",
    templateUrl:'./flight-list.component.html'
})
export class FlightListComponent extends AbstractFlight implements OnInit, OnDestroy {
    flight: List<Flight>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Flight>) => {
            this.flight = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
