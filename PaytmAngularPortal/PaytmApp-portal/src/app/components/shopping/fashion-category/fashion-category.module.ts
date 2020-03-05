import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './fashion-category.routing'

import { FashionCategoryListComponent } from './list/fashion-category-list.component'
import { FashionCategoryEditComponent } from './edit/fashion-category-edit.component';
import { FashionCategoryAddComponent } from './add/fashion-category-add.component';
import { FashionCategorySharedModule } from './fashion-category-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FashionCategorySharedModule,
        ROUTING
    ],
    declarations: [FashionCategoryListComponent,FashionCategoryEditComponent,FashionCategoryAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FashionCategoryModule { }


