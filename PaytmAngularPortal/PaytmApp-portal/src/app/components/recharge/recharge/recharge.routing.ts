import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeListComponent } from './list/recharge-list.component';
import { RechargeAddComponent } from './add/recharge-add.component';
import { RechargeEditComponent } from './edit/recharge-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: RechargeListComponent
    },
    {
        path: 'add',
        component: RechargeAddComponent
    },
    {
        path: ':id',
        component:  RechargeEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
