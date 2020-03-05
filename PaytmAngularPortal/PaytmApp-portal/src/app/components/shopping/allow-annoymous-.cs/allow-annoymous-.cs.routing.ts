import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowAnnoymous.csListComponent } from './list/allow-annoymous-.cs-list.component';
import { AllowAnnoymous.csAddComponent } from './add/allow-annoymous-.cs-add.component';
import { AllowAnnoymous.csEditComponent } from './edit/allow-annoymous-.cs-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AllowAnnoymous.csListComponent
    },
    {
        path: 'add',
        component: AllowAnnoymous.csAddComponent
    },
    {
        path: ':id',
        component:  AllowAnnoymous.csEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
