import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './fashion-product.routing'

import { FashionProductListComponent } from './list/fashion-product-list.component'
import { FashionProductEditComponent } from './edit/fashion-product-edit.component';
import { FashionProductAddComponent } from './add/fashion-product-add.component';
import { FashionProductSharedModule } from './fashion-product-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FashionProductSharedModule,
        ROUTING
    ],
    declarations: [FashionProductListComponent,FashionProductEditComponent,FashionProductAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FashionProductModule { }


