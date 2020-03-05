import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './allow-annoymous-.cs.routing'

import { AllowAnnoymous.csListComponent } from './list/allow-annoymous-.cs-list.component'
import { AllowAnnoymous.csEditComponent } from './edit/allow-annoymous-.cs-edit.component';
import { AllowAnnoymous.csAddComponent } from './add/allow-annoymous-.cs-add.component';
import { AllowAnnoymous.csSharedModule } from './allow-annoymous-.cs-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,AllowAnnoymous.csSharedModule,
        ROUTING
    ],
    declarations: [AllowAnnoymous.csListComponent,AllowAnnoymous.csEditComponent,AllowAnnoymous.csAddComponent],
    exports: [RouterModule],
    providers: []
})
export class AllowAnnoymous.csModule { }


