import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightListComponent } from './list/flight-list.component';
import { FlightAddComponent } from './add/flight-add.component';
import { FlightEditComponent } from './edit/flight-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: FlightListComponent
    },
    {
        path: 'add',
        component: FlightAddComponent
    },
    {
        path: ':id',
        component:  FlightEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
