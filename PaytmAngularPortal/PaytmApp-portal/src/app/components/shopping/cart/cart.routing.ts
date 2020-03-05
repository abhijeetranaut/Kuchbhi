import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartListComponent } from './list/cart-list.component';
import { CartAddComponent } from './add/cart-add.component';
import { CartEditComponent } from './edit/cart-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CartListComponent
    },
    {
        path: 'add',
        component: CartAddComponent
    },
    {
        path: ':id',
        component:  CartEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
