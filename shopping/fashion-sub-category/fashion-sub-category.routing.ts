import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FashionSubCategoryListComponent } from './list/fashion-sub-category-list.component';
import { FashionSubCategoryAddComponent } from './add/fashion-sub-category-add.component';
import { FashionSubCategoryEditComponent } from './edit/fashion-sub-category-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FashionSubCategoryListComponent
    },
    {
        path: 'add',
        component: FashionSubCategoryAddComponent
    },
    {
        path: ':id',
        component:  FashionSubCategoryEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
