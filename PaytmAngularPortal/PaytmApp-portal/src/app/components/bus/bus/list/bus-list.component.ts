import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBus } from '../domain/abstract-bus';
import { Bus } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-bus-list",
    templateUrl:'./bus-list.component.html'
})
export class BusListComponent extends AbstractBus implements OnInit, OnDestroy {
    bus: List<Bus>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Bus>) => {
            this.bus = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
