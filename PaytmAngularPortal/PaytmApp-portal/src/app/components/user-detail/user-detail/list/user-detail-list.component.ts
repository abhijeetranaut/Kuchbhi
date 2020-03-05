import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractUserDetail } from '../domain/abstract-user-detail';
import { UserDetail } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-user-detail-list",
    templateUrl:'./user-detail-list.component.html'
})
export class UserDetailListComponent extends AbstractUserDetail implements OnInit, OnDestroy {
    userDetail: List<UserDetail>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<UserDetail>) => {
            this.userDetail = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
