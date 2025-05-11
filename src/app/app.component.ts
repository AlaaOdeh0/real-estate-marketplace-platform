import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReportingDashboardComponent} from './reporting/reporting-dashboard/reporting-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReportingDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}
