import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: "Home", component: HomeComponent},
    {path:"Register", component: RegisterComponent},
    {path: "Login", component: LoginComponent},
    {path:"**", component: NotFoundComponent}
];

