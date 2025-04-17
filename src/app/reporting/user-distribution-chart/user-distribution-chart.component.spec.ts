import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDistributionChartComponent } from './user-distribution-chart.component';

describe('UserDistributionChartComponent', () => {
  let component: UserDistributionChartComponent;
  let fixture: ComponentFixture<UserDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDistributionChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
