import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './cart.routing'

import { CartListComponent } from './list/cart-list.component'
import { CartEditComponent } from './edit/cart-edit.component';
import { CartAddComponent } from './add/cart-add.component';
import { CartSharedModule } from './cart-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CartSharedModule,
        ROUTING
    ],
    declarations: [CartListComponent,CartEditComponent,CartAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CartModule { }


