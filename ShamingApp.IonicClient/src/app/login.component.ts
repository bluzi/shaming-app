import { Component } from '@angular/core'; 
import { User } from '../models/user';

@Component({
    selector: '<facebook-login></facebook-login>',
    templateUrl: '../pages/facebook-login/login.html'
})
export class LoginComponent {
    user: User;
    constructor() {
        this.user = new User();
    }    

    fbLogin() {
        alert(`TODO: Calling server facebook api to login "${this.user.userName}"`);
    }
}


/*
    position:fixed;
    top: 50%;
    left: 50%;
    width:30em;
    height:18em;
    margin-top: -9em; 
    margin-left: -15em; 
    border: 1px solid #ccc;
    background-color: #f3f3f3;
 */