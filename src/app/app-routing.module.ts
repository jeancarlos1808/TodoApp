import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

let DashboardComponent;
let LayoutSinHeaderComponent;
const routes: Routes = [
  {
    path:"",
    component: LayoutSinHeaderComponent,
    children: [
      {path:"", component: LoginComponent},
      {path:"register", component: LoginComponent},
    ]
  },
  {
    path: "",
    component: LoginComponent,
    children: [
      {path: "dashboard", component: DashboardComponent},
    ]
  },
  {path:"**", component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }