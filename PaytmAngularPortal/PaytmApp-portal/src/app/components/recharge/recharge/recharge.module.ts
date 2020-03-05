import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './recharge.routing'

import { RechargeListComponent } from './list/recharge-list.component'
import { RechargeEditComponent } from './edit/recharge-edit.component';
import { RechargeAddComponent } from './add/recharge-add.component';
import { RechargeSharedModule } from './recharge-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,RechargeSharedModule,
        ROUTING
    ],
    declarations: [RechargeListComponent,RechargeEditComponent,RechargeAddComponent],
    exports: [RouterModule],
    providers: []
})
export class RechargeModule { }


