import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './wallet.routing'

import { WalletListComponent } from './list/wallet-list.component'
import { WalletEditComponent } from './edit/wallet-edit.component';
import { WalletAddComponent } from './add/wallet-add.component';
import { WalletSharedModule } from './wallet-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,WalletSharedModule,
        ROUTING
    ],
    declarations: [WalletListComponent,WalletEditComponent,WalletAddComponent],
    exports: [RouterModule],
    providers: []
})
export class WalletModule { }


