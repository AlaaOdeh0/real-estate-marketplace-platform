import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-stat-counters',
  templateUrl: './stat-counters.component.html'
})
export class StatCountersComponent implements OnInit {
  totalProperties = 0;
  activeUsers = 0;

  constructor(private statsService: StatisticsService) {}

  ngOnInit(): void {
    this.totalProperties = this.statsService.getPropertyCount();
    this.activeUsers = this.statsService.getActiveUserCount();
  }
}
