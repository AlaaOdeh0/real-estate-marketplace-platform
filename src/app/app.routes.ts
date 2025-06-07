import { Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

import {RealestatePageComponent} from './realestate-page/realestate-page.component';
import {FinancialtransactionPageComponent} from './financialtransaction-page/financialtransaction-page.component';
import {UserPageComponent} from './users-page/user-page.component';
import {LayoutDashboardComponent} from './layout-dashboard/layout-dashboard.component';


export const routes: Routes = [
  {
    path: '',
    component:LayoutDashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'users-page', component: UserPageComponent },
      { path: 'financialtransaction-page', component: FinancialtransactionPageComponent },
      { path: 'realestate-page', component: RealestatePageComponent }
    ]
  }

];
