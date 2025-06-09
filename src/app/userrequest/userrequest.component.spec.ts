import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrequestComponent } from './userrequest.component';

describe('UserrequestComponent', () => {
  let component: UserrequestComponent;
  let fixture: ComponentFixture<UserrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserrequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
