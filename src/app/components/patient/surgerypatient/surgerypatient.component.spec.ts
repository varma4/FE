import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgerypatientComponent } from './surgerypatient.component';

describe('SurgerypatientComponent', () => {
  let component: SurgerypatientComponent;
  let fixture: ComponentFixture<SurgerypatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgerypatientComponent]
    });
    fixture = TestBed.createComponent(SurgerypatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
