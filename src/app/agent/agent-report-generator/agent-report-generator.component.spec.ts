import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReportGeneratorComponent } from './agent-report-generator.component';

describe('AgentReportGeneratorComponent', () => {
  let component: AgentReportGeneratorComponent;
  let fixture: ComponentFixture<AgentReportGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentReportGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentReportGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
