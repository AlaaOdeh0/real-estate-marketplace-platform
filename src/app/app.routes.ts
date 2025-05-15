import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

export const routes: Routes = [
  { path: 'details/:id', component: PropertyDetailsComponent },
  { path: '', component: HomePageComponent },
  { path: 'add', component: AddPropertyComponent },
  { path: 'edit/:id', component: EditListingComponent }
];