import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLabResultsComponent } from './doctor-lab-results.component';

describe('DoctorLabResultsComponent', () => {
  let component: DoctorLabResultsComponent;
  let fixture: ComponentFixture<DoctorLabResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorLabResultsComponent]
    });
    fixture = TestBed.createComponent(DoctorLabResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
