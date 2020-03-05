import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractAllowAnnoymous.cs } from '../domain/abstract-allow-annoymous-.cs';
import { AllowAnnoymous.cs } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-allow-annoymous-.cs-list",
    templateUrl:'./allow-annoymous-.cs-list.component.html'
})
export class AllowAnnoymous.csListComponent extends AbstractAllowAnnoymous.cs implements OnInit, OnDestroy {
    allowAnnoymous.cs: List<AllowAnnoymous.cs>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<AllowAnnoymous.cs>) => {
            this.allowAnnoymous.cs = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
