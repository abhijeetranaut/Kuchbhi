import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vFashionProductListComponent } from './list/v-fashion-product-list.component';
import { vFashionProductAddComponent } from './add/v-fashion-product-add.component';
import { vFashionProductEditComponent } from './edit/v-fashion-product-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vFashionProductListComponent
    },
    {
        path: 'add',
        component: vFashionProductAddComponent
    },
    {
        path: ':id',
        component:  vFashionProductEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
