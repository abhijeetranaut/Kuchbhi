import { Component, OnInit } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { CoreComponent } from '@rxweb/angular-router';
import { LoggedInMiddleware } from '../../domain/security/middleware/logged-in.middleware';

@middleware([LoggedInMiddleware])
@multilingual("loginComponent")
@anonymous()
@Component({
    selector:'login',
    templateUrl: './login.component.html'
    // template: `Welcome To Login
    // <button (click)=Onclick()>Submit<button>
    // `
})
export class LoginComponent extends CoreComponent implements OnInit {
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }
    // Onclick(){
    //     console.log("Welcome");
        
    // }
    
}
