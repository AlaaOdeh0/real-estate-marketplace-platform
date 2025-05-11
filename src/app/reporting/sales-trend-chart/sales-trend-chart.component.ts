import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sales-trend-chart',
  templateUrl: './sales-trend-chart.component.html'
})
export class SalesTrendChartComponent implements AfterViewInit {
  ngAfterViewInit() {
    const ctx = document.getElementById('salesLineChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [120, 190, 300, 250, 400],
          fill: true,
          backgroundColor: '#CCD5AE',
          borderColor: '#D4A373',
          tension: 0.4
        }]
      }
    });
  }
}
