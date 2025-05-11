import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-report-generator',
  templateUrl: './admin-report-generator.component.html'
})
export class AdminReportGeneratorComponent {
  generateReport() {
    alert('Admin monthly report generated!');
  }
}
