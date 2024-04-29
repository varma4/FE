import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './components/appointment/appointment/appointment.component';
import { DoctorloginComponent } from './components/auth/doctorlogin/doctorlogin.component';
import { DoctorsignupComponent } from './components/auth/doctorsignup/doctorsignup.component';
import { PatientsDataComponent } from './components/doctor/patients-data/patients-data.component';
import { HomeComponent } from './components/doctor/home/home.component';
import { PatientPrescriptionComponent } from './components/doctor/patient-prescription/patient-prescription.component';
import { MedicalRecordsComponent } from './components/doctor/medical-records/medical-records.component';
import { PatientBillingComponent } from './components/patient/patient-billing/patient-billing.component';
import { DoctorComponent } from './components/admin/doctor/doctor.component';
import { BillingComponent } from './components/admin/billing/billing.component';
import { MedicalRecordsComponentAdmin } from './components/admin/medical-records/medical-records.component';
import { NurseComponent } from './components/admin/nurse/nurse.component';
import { AllAppointmentsComponent } from './components/admin/all-appointments/all-appointments.component';
import { PatientHomeComponent } from './components/patient/patient-home/patient-home.component';
import { PatientAppointmentComponent } from './components/patient/patient-appointment/patient-appointment.component';
import {  PatientprescriptionComponentById } from './components/patient/patientprescription/patientprescription.component';
import { LabResultsComponent } from './components/patient/lab-results/lab-results.component';
import { DoctorappointmentsComponent } from './components/doctor/doctorappointments/doctorappointments.component';
import { DoctorLabResultsComponent } from './components/doctor/doctor-lab-results/doctor-lab-results.component';
import { SurgerydoctorComponent } from './components/doctor/surgerydoctor/surgerydoctor.component';
import { SurgerypatientComponent } from './components/patient/surgerypatient/surgerypatient.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AppointmentComponent,
    DoctorloginComponent,
    DoctorsignupComponent,
    PatientsDataComponent,
    HomeComponent,
    PatientPrescriptionComponent,
    MedicalRecordsComponent,
    MedicalRecordsComponentAdmin,
    PatientBillingComponent,
    DoctorComponent,
    BillingComponent,
    NurseComponent,
    AllAppointmentsComponent,
    PatientHomeComponent,
    PatientAppointmentComponent,
    PatientprescriptionComponentById,
    LabResultsComponent,
    DoctorappointmentsComponent,
    DoctorLabResultsComponent,
    SurgerydoctorComponent,
    SurgerypatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
