import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './paytm-user.routing'

import { PaytmUserListComponent } from './list/paytm-user-list.component'
import { PaytmUserEditComponent } from './edit/paytm-user-edit.component';
import { PaytmUserAddComponent } from './add/paytm-user-add.component';
import { PaytmUserSharedModule } from './paytm-user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,PaytmUserSharedModule,
        ROUTING
    ],
    declarations: [PaytmUserListComponent,PaytmUserEditComponent,PaytmUserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class PaytmUserModule { }


