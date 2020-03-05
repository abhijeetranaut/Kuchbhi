import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KycListComponent } from './list/kyc-list.component';
import { KycAddComponent } from './add/kyc-add.component';
import { KycEditComponent } from './edit/kyc-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: KycListComponent
    },
    {
        path: 'add',
        component: KycAddComponent
    },
    {
        path: ':id',
        component:  KycEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
