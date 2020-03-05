import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './kyc.routing'

import { KycListComponent } from './list/kyc-list.component'
import { KycEditComponent } from './edit/kyc-edit.component';
import { KycAddComponent } from './add/kyc-add.component';
import { KycSharedModule } from './kyc-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,KycSharedModule,
        ROUTING
    ],
    declarations: [KycListComponent,KycEditComponent,KycAddComponent],
    exports: [RouterModule],
    providers: []
})
export class KycModule { }


