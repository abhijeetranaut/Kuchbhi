import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankCardDetailListComponent } from './list/bank-card-detail-list.component';
import { BankCardDetailAddComponent } from './add/bank-card-detail-add.component';
import { BankCardDetailEditComponent } from './edit/bank-card-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: BankCardDetailListComponent
    },
    {
        path: 'add',
        component: BankCardDetailAddComponent
    },
    {
        path: ':id',
        component:  BankCardDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
