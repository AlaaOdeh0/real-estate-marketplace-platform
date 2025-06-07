import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout-dashboard',
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './layout-dashboard.component.html',
  standalone: true,
  styleUrl: './layout-dashboard.component.css'
})
export class LayoutDashboardComponent {

}
