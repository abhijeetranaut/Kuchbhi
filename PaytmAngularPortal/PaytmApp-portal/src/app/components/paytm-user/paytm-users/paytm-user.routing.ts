import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaytmUserListComponent } from './list/paytm-user-list.component';
import { PaytmUserAddComponent } from './add/paytm-user-add.component';
import { PaytmUserEditComponent } from './edit/paytm-user-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: PaytmUserListComponent
    },
    {
        path: 'add',
        component: PaytmUserAddComponent
    },
    {
        path: ':id',
        component:  PaytmUserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
