import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerReportGeneratorComponent } from './seller-report-generator.component';

describe('SellerReportGeneratorComponent', () => {
  let component: SellerReportGeneratorComponent;
  let fixture: ComponentFixture<SellerReportGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerReportGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerReportGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
