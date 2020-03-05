import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './components/start/routing';
import { AppComponent } from './components/start/app.component';
import {LoginModule} from '../app/components/login/login.module';
import { RouterModule,Route } from '@angular/router';
//import {BusModule} from './components/bus/bus/bus.module'

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
