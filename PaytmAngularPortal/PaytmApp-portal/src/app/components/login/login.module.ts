import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule} from '@angular/router';

//import { RxLocalizationModule } from '@rxweb/angular-localization'RxLocalizationModule
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import {  RxRoutingModule} from "@rxweb/angular-router"

import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routing';




@NgModule({             
    declarations: [LoginComponent],
    imports: [FormsModule, ReactiveFormsModule, RxReactiveFormsModule,
        RouterModule.forChild(LOGIN_ROUTES), RxRoutingModule, 
    ],
    exports: [RouterModule]
})
export class LoginModule { }

