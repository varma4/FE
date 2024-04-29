import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment/appointment.component';
import { DoctorsignupComponent } from './components/auth/doctorsignup/doctorsignup.component';
import { DoctorloginComponent } from './components/auth/doctorlogin/doctorlogin.component';
import { PatientsDataComponent } from './components/doctor/patients-data/patients-data.component';
import { HomeComponent } from './components/doctor/home/home.component';
import { PatientPrescriptionComponent } from './components/doctor/patient-prescription/patient-prescription.component';
import { MedicalRecordsComponent } from './components/doctor/medical-records/medical-records.component';
import { MedicalRecordsComponentAdmin } from './components/admin/medical-records/medical-records.component';
import { DoctorComponent } from './components/admin/doctor/doctor.component';
import { BillingComponent } from './components/admin/billing/billing.component';
import { NurseComponent } from './components/admin/nurse/nurse.component';
import { AllAppointmentsComponent } from './components/admin/all-appointments/all-appointments.component';
import { PatientHomeComponent } from './components/patient/patient-home/patient-home.component';
import { PatientAppointmentComponent } from './components/patient/patient-appointment/patient-appointment.component';
import { PatientprescriptionComponentById } from './components/patient/patientprescription/patientprescription.component';
import { PatientBillingComponent } from './components/patient/patient-billing/patient-billing.component';
import { DoctorappointmentsComponent } from './components/doctor/doctorappointments/doctorappointments.component';
import { LabResultsComponent } from './components/patient/lab-results/lab-results.component';
import { DoctorLabResultsComponent } from './components/doctor/doctor-lab-results/doctor-lab-results.component';
import { SurgerydoctorComponent } from './components/doctor/surgerydoctor/surgerydoctor.component';
import { SurgerypatientComponent } from './components/patient/surgerypatient/surgerypatient.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'doctorSignup', component: DoctorsignupComponent },
  { path: 'doctorLogin', component: DoctorloginComponent },
  { path: 'doctorhome', component: HomeComponent },
  { path: 'patients', component: PatientsDataComponent },
  { path: 'prescriptions', component: PatientPrescriptionComponent },
  { path: 'medicalRecord', component: MedicalRecordsComponent },
  { path: 'doctorAppointments', component: DoctorappointmentsComponent },
  { path: 'doctortestResults', component: DoctorLabResultsComponent },
  { path: 'doctorSurgery', component: SurgerydoctorComponent },
  // admin
  { path: 'alldoctors', component: DoctorComponent },
  { path: 'allmedicalrecords', component: MedicalRecordsComponentAdmin },
  { path: 'allbillings', component: BillingComponent },
  { path: 'allnurses', component: NurseComponent },
  { path: 'allAppointments', component: AllAppointmentsComponent },
  { path: 'patientHome', component: PatientHomeComponent },
  { path: 'patientAppointment', component: PatientAppointmentComponent },
  { path: 'patientPrescription', component: PatientprescriptionComponentById },
  { path: 'patientBilling', component: PatientBillingComponent},
  { path: 'patientLabResults', component: LabResultsComponent},
  { path: 'patientSurgery', component: SurgerypatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
