import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerProductListComponent } from './list/seller-product-list.component';
import { SellerProductAddComponent } from './add/seller-product-add.component';
import { SellerProductEditComponent } from './edit/seller-product-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: SellerProductListComponent
    },
    {
        path: 'add',
        component: SellerProductAddComponent
    },
    {
        path: ':id',
        component:  SellerProductEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
