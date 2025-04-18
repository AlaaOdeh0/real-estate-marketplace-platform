import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestatePageComponent } from './realestate-page.component';

describe('RealestatePageComponent', () => {
  let component: RealestatePageComponent;
  let fixture: ComponentFixture<RealestatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealestatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealestatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
