import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCountersComponent } from './stat-counters.component';

describe('StatCountersComponent', () => {
  let component: StatCountersComponent;
  let fixture: ComponentFixture<StatCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCountersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
