import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './fashion-sub-category.routing'

import { FashionSubCategoryListComponent } from './list/fashion-sub-category-list.component'
import { FashionSubCategoryEditComponent } from './edit/fashion-sub-category-edit.component';
import { FashionSubCategoryAddComponent } from './add/fashion-sub-category-add.component';
import { FashionSubCategorySharedModule } from './fashion-sub-category-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FashionSubCategorySharedModule,
        ROUTING
    ],
    declarations: [FashionSubCategoryListComponent,FashionSubCategoryEditComponent,FashionSubCategoryAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FashionSubCategoryModule { }


