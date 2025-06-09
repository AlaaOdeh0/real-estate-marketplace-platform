import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { InquiryModalComponent } from './inquiry-modal/inquiry-modal.component';
// import { LeaveReviewFormComponent } from './leave-review-form/leave-review-form';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { FinancialtransactionPageComponent } from './financialtransaction-page/financialtransaction-page.component';
import { RealestatePageComponent } from './realestate-page/realestate-page.component';

export const appRoutes: Routes = [
  // aya appRoutes
  { path: '', component: HomePageComponent },
  { path: 'property/:id', component: PropertyDetailsComponent },
  { path: 'add', component: AddPropertyComponent },
  { path: 'edit-listing/:id', component: EditListingComponent },
  { path: 'rent/:id', component: RentFormComponent },
  { path: 'buy/:id', component: BuyFormComponent },
  { path: 'inquiry/:id', component: InquiryModalComponent },
  { path: 'feedback/:id', component: FeedbackPageComponent },

  // main appRoutes
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },

  //Raghad routes
  {
    path: 'Admin',
    component: LayoutDashboardComponent,
    children: [
      { path: 'main-dashboard', component: DashboardComponent },
      { path: 'users-page', component: UsersPageComponent },
      { path: 'financialtransaction-page', component: FinancialtransactionPageComponent },
      { path: 'realestate-page', component: RealestatePageComponent }
    ]
  }
];