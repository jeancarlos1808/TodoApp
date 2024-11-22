import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    username: string = "";
    password: string = "";

    constructor(private router: Router) {
    }


    login() {

        if (this.username === 'admin' && this.password === '1234') {
            this.router.navigate(['/folders']);

        }else{
            alert('Usuario o contraseña incorrectas')
        }

    }
}
