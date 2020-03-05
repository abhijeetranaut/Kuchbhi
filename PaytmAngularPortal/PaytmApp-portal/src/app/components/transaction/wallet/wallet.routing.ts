import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletListComponent } from './list/wallet-list.component';
import { WalletAddComponent } from './add/wallet-add.component';
import { WalletEditComponent } from './edit/wallet-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: WalletListComponent
    },
    {
        path: 'add',
        component: WalletAddComponent
    },
    {
        path: ':id',
        component:  WalletEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
