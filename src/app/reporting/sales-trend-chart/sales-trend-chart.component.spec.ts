import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTrendChartComponent } from './sales-trend-chart.component';

describe('SalesTrendChartComponent', () => {
  let component: SalesTrendChartComponent;
  let fixture: ComponentFixture<SalesTrendChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesTrendChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
