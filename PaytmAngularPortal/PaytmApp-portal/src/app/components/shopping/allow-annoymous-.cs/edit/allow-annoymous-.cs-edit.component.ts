import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractAllowAnnoymous.cs } from '../domain/abstract-allow-annoymous-.cs';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { AllowAnnoymous.cs } from '@app/models';

@Component({
    selector: "app-allow-annoymous-.cs-edit",
    templateUrl: './allow-annoymous-.cs-edit.component.html'
})
export class AllowAnnoymous.csEditComponent extends AbstractAllowAnnoymous.cs implements OnInit, OnDestroy {
    allowAnnoymous.cs: AllowAnnoymous.cs;
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
            this.allowAnnoymous.csFormGroup = this.formBuilder.formGroup(AllowAnnoymous.cs,t) as IFormGroup<AllowAnnoymous.cs>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
