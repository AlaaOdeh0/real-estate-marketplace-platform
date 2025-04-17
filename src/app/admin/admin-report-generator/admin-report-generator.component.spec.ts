import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportGeneratorComponent } from './admin-report-generator.component';

describe('AdminReportGeneratorComponent', () => {
  let component: AdminReportGeneratorComponent;
  let fixture: ComponentFixture<AdminReportGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
