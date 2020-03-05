import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusListComponent } from './list/bus-list.component';
import { BusAddComponent } from './add/bus-add.component';
import { BusEditComponent } from './edit/bus-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: BusListComponent
    },
    {
        path: 'add',
        component: BusAddComponent
    },
    {
        path: ':id',
        component:  BusEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
