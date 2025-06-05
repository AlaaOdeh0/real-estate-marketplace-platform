import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { InquiryModalComponent } from './inquiry-modal/inquiry-modal.component';
// import { FeedbackComponent } from './feedback/feedback.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  // aya routes
  { path: '', component: HomePageComponent },
  { path: 'property/:id', component: PropertyDetailsComponent },
  { path: 'add', component: AddPropertyComponent },
  { path: 'edit-listing/:id', component: EditListingComponent },
  { path: 'rent/:id', component: RentFormComponent },
  { path: 'buy/:id', component: BuyFormComponent },
  { path: 'inquiry/:id', component: InquiryModalComponent },
  // { path: 'feedback', component: FeedbackComponent },

  // main routes
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },


];

