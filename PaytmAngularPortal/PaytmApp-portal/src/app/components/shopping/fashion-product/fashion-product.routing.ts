import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FashionProductListComponent } from './list/fashion-product-list.component';
import { FashionProductAddComponent } from './add/fashion-product-add.component';
import { FashionProductEditComponent } from './edit/fashion-product-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FashionProductListComponent
    },
    {
        path: 'add',
        component: FashionProductAddComponent
    },
    {
        path: ':id',
        component:  FashionProductEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
