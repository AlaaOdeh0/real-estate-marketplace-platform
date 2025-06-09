import { Component } from '@angular/core';
import {UserrequestComponent} from '../userrequest/userrequest.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    UserrequestComponent

  ],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
