import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ActivitysummarycardComponent} from './activitysummarycard/activitysummarycard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {UserrequestComponent} from './userrequest/userrequest.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-estate-marketplace-platform';
}
