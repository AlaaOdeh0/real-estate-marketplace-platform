import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ActivitysummarycardComponent} from './activitysummarycard/activitysummarycard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {UserrequestComponent} from './userrequest/userrequest.component';
import {LayoutDashboardComponent} from './layout-dashboard/layout-dashboard.component';


@Component({
  selector: 'app-root',
  imports: [LayoutDashboardComponent, RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-estate-marketplace-platform';
}
