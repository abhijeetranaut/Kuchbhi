import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { AllowAnnoymous.cs } from '@app/models';
import { AbstractAllowAnnoymous.cs } from '../domain/abstract-allow-annoymous-.cs';

@Component({
    selector: "app-allow-annoymous-.cs-add",
    templateUrl: './allow-annoymous-.cs-add.component.html'
})
export class AllowAnnoymous.csAddComponent extends AbstractAllowAnnoymous.cs implements OnInit, OnDestroy {
    allowAnnoymous.cs: AllowAnnoymous.cs;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.allowAnnoymous.cs = new AllowAnnoymous.cs();
        this.allowAnnoymous.csFormGroup = this.formBuilder.formGroup(this.allowAnnoymous.cs) as IFormGroup<AllowAnnoymous.cs>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
