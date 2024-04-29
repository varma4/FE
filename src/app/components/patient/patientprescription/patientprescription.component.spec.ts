import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientprescriptionComponent } from './patientprescription.component';

describe('PatientprescriptionComponent', () => {
  let component: PatientprescriptionComponent;
  let fixture: ComponentFixture<PatientprescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientprescriptionComponent]
    });
    fixture = TestBed.createComponent(PatientprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
