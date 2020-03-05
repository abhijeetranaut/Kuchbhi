import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FashionCategoryListComponent } from './list/fashion-category-list.component';
import { FashionCategoryAddComponent } from './add/fashion-category-add.component';
import { FashionCategoryEditComponent } from './edit/fashion-category-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FashionCategoryListComponent
    },
    {
        path: 'add',
        component: FashionCategoryAddComponent
    },
    {
        path: ':id',
        component:  FashionCategoryEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
