import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorappointmentsComponent } from './doctorappointments.component';

describe('DoctorappointmentsComponent', () => {
  let component: DoctorappointmentsComponent;
  let fixture: ComponentFixture<DoctorappointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorappointmentsComponent]
    });
    fixture = TestBed.createComponent(DoctorappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
