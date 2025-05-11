import { Component } from '@angular/core';

@Component({
  selector: 'app-agent-report-generator',
  templateUrl: './agent-report-generator.component.html'
})
export class AgentReportGeneratorComponent {
  generateAgentReport() {
    alert('Agent report for managed properties generated!');
  }
}
