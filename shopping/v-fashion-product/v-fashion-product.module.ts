import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-fashion-product.routing'

import { vFashionProductListComponent } from './list/v-fashion-product-list.component'
import { vFashionProductEditComponent } from './edit/v-fashion-product-edit.component';
import { vFashionProductAddComponent } from './add/v-fashion-product-add.component';
import { vFashionProductSharedModule } from './v-fashion-product-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vFashionProductSharedModule,
        ROUTING
    ],
    declarations: [vFashionProductListComponent,vFashionProductEditComponent,vFashionProductAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vFashionProductModule { }


