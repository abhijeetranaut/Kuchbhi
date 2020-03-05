import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './bank-card-detail.routing'

import { BankCardDetailListComponent } from './list/bank-card-detail-list.component'
import { BankCardDetailEditComponent } from './edit/bank-card-detail-edit.component';
import { BankCardDetailAddComponent } from './add/bank-card-detail-add.component';
import { BankCardDetailSharedModule } from './bank-card-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BankCardDetailSharedModule,
        ROUTING
    ],
    declarations: [BankCardDetailListComponent,BankCardDetailEditComponent,BankCardDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class BankCardDetailModule { }


