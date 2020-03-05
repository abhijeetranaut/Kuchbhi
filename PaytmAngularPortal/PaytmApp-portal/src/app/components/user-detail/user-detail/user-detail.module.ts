import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './user-detail.routing'

import { UserDetailListComponent } from './list/user-detail-list.component'
import { UserDetailEditComponent } from './edit/user-detail-edit.component';
import { UserDetailAddComponent } from './add/user-detail-add.component';
import { UserDetailSharedModule } from './user-detail-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,UserDetailSharedModule,
        ROUTING
    ],
    declarations: [UserDetailListComponent,UserDetailEditComponent,UserDetailAddComponent],
    exports: [RouterModule],
    providers: []
})
export class UserDetailModule { }


