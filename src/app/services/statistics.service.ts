import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  getPropertyCount() {
    return 3200;
  }

  getActiveUserCount() {
    return 1250;
  }

  getChartData() {
    return {
      labels: ['Buyers', 'Sellers', 'Agents'],
      values: [45, 30, 25]
    };
  }
}
