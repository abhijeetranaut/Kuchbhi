import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailListComponent } from './list/user-detail-list.component';
import { UserDetailAddComponent } from './add/user-detail-add.component';
import { UserDetailEditComponent } from './edit/user-detail-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: UserDetailListComponent
    },
    {
        path: 'add',
        component: UserDetailAddComponent
    },
    {
        path: ':id',
        component:  UserDetailEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
