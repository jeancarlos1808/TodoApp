import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { RouterModule } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
