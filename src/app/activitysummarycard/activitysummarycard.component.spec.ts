import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysummarycardComponent } from './activitysummarycard.component';

describe('ActivitysummarycardComponent', () => {
  let component: ActivitysummarycardComponent;
  let fixture: ComponentFixture<ActivitysummarycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitysummarycardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitysummarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
