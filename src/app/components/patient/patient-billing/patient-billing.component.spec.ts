import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBillingComponent } from './patient-billing.component';

describe('PatientBillingComponent', () => {
  let component: PatientBillingComponent;
  let fixture: ComponentFixture<PatientBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientBillingComponent]
    });
    fixture = TestBed.createComponent(PatientBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
