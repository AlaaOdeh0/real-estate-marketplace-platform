import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialtransactionPageComponent } from './financialtransaction-page.component';

describe('FinancialtransactionPageComponent', () => {
  let component: FinancialtransactionPageComponent;
  let fixture: ComponentFixture<FinancialtransactionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialtransactionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialtransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
