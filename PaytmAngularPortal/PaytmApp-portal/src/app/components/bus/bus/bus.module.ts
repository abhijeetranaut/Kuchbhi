import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './bus.routing'

import { BusListComponent } from './list/bus-list.component'
import { BusEditComponent } from './edit/bus-edit.component';
import { BusAddComponent } from './add/bus-add.component';
import { BusSharedModule } from './bus-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BusSharedModule,
        ROUTING
    ],
    declarations: [BusListComponent,BusEditComponent,BusAddComponent],
    exports: [RouterModule],
    providers: []
})
export class BusModule { }


