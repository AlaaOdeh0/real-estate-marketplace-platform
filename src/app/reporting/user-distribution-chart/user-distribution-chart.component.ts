import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-user-distribution-chart',
  templateUrl: './user-distribution-chart.component.html'
})
export class UserDistributionChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    const ctx = document.getElementById('userPieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Buyers', 'Sellers', 'Agents'],
        datasets: [{
          data: [45, 30, 25],
          backgroundColor: ['#CCD5AE', '#E9EDC9', '#D4A373']
        }]
      }
    });
  }
}
