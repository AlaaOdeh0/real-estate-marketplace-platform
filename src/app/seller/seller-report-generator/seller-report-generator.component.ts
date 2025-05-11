import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-report-generator',
  templateUrl: './seller-report-generator.component.html'
})
export class SellerReportGeneratorComponent {
  generateSellerReport() {
    alert('Seller report for your properties generated!');
  }
}
