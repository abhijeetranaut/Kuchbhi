import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './flight.routing'

import { FlightListComponent } from './list/flight-list.component'
import { FlightEditComponent } from './edit/flight-edit.component';
import { FlightAddComponent } from './add/flight-add.component';
import { FlightSharedModule } from './flight-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,FlightSharedModule,
        ROUTING
    ],
    declarations: [FlightListComponent,FlightEditComponent,FlightAddComponent],
    exports: [RouterModule],
    providers: []
})
export class FlightModule { }


