import { Component } from '@angular/core';
import {UserrequestComponent} from '../userrequest/userrequest.component';
import {UserPageComponent} from '../users-page/user-page.component';
import {ActivitysummarycardComponent} from '../activitysummarycard/activitysummarycard.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RealestatePageComponent} from '../realestate-page/realestate-page.component';
import {FinancialtransactionPageComponent} from '../financialtransaction-page/financialtransaction-page.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    UserrequestComponent,
    UserPageComponent,
    ActivitysummarycardComponent,
    SidebarComponent,
    RealestatePageComponent,
    FinancialtransactionPageComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
