import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './seller-product.routing'

import { SellerProductListComponent } from './list/seller-product-list.component'
import { SellerProductEditComponent } from './edit/seller-product-edit.component';
import { SellerProductAddComponent } from './add/seller-product-add.component';
import { SellerProductSharedModule } from './seller-product-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,SellerProductSharedModule,
        ROUTING
    ],
    declarations: [SellerProductListComponent,SellerProductEditComponent,SellerProductAddComponent],
    exports: [RouterModule],
    providers: []
})
export class SellerProductModule { }


