import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgerydoctorComponent } from './surgerydoctor.component';

describe('SurgerydoctorComponent', () => {
  let component: SurgerydoctorComponent;
  let fixture: ComponentFixture<SurgerydoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgerydoctorComponent]
    });
    fixture = TestBed.createComponent(SurgerydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
