import { Component } from '@angular/core';
import {PropertyStatisticsComponent} from '../property-statistics/property-statistics.component';
import {SalesTrendChartComponent} from '../sales-trend-chart/sales-trend-chart.component';
import {UserDistributionChartComponent} from '../user-distribution-chart/user-distribution-chart.component';
import {StatCountersComponent} from '../stat-counters/stat-counters.component';
import {ReportLayoutComponent} from '../report-layout/report-layout.component';
import {AdminReportGeneratorComponent} from '../../admin/admin-report-generator/admin-report-generator.component';
import {SellerReportGeneratorComponent} from '../../seller/seller-report-generator/seller-report-generator.component';
import {AgentReportGeneratorComponent} from '../../agent/agent-report-generator/agent-report-generator.component';
import {ModerationPanelComponent} from '../../moderation/moderation-panel/moderation-panel.component';
import {UserNotificationsComponent} from '../../notifications/user-notifications/user-notifications.component';

@Component({
  selector: 'app-reporting-dashboard',
  imports: [
    PropertyStatisticsComponent,
    SalesTrendChartComponent,
    UserDistributionChartComponent,
    StatCountersComponent,
    ReportLayoutComponent,
    AdminReportGeneratorComponent,
    SellerReportGeneratorComponent,
    AgentReportGeneratorComponent,
    ModerationPanelComponent,
    UserNotificationsComponent
  ],
  templateUrl: './reporting-dashboard.component.html',
  styleUrl: './reporting-dashboard.component.css'
})
export class ReportingDashboardComponent {

}
