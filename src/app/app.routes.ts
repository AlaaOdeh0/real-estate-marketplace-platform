import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: "Home", component: HomeComponent },
    { path: "Login", component: LoginComponent },
    { path: "Register", component: RegisterComponent },
    { path: "**", component: NotFoundComponent }
];

