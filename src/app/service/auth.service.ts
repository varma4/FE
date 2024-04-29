import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  base_Url = 'http://localhost:3000/api/v1/'

  signup(data: any):Observable<any>{
    return this.http.post(this.base_Url+ 'patient', data)
  }

  login(data: any): Observable<any>{
    console.log(data);

    return this.http.post(this.base_Url+ 'patient/login', data)
  }

  doctorSignup(data: any):Observable<any>{
    return this.http.post(this.base_Url+ 'doctor', data)
  }

  doctorLogin(data: any): Observable<any>{
    return this.http.post(this.base_Url+ 'doctor/login', data)
  }

  getPatientsData(): Observable<any> {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Set token in the request headers
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    // Send the HTTP request with the headers
    return this.http.get(this.base_Url + 'patient', { headers });
  }

  getPatientsPrescription(): Observable<any> {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Set token in the request headers
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    // Send the HTTP request with the headers
    return this.http.get(this.base_Url + 'prescription', { headers });
  }
  getMedicalRecords(): Observable<any> {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Set token in the request headers
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    // Send the HTTP request with the headers
    return this.http.get(this.base_Url + 'medicalRecord', { headers });
  }
// ------------------------------
  getAlldoctors(): Observable<any>{
    return this.http.get(this.base_Url + 'doctor')
  }

  getAllMedicalRecords(): Observable<any>{
    return this.http.get(this.base_Url + 'medicalRecord')
  }

  getAllBillings(): Observable<any>{
    return this.http.get(this.base_Url + 'billing')
  }
  createBilling(data: any): Observable<any>{
    return this.http.post(this.base_Url + 'billing', data)
  }


  getAllNurses():Observable<any>{
    return this.http.get(this.base_Url + 'nurse')
  }

  createNurse(data: any):Observable <any>{
    return this.http.post(this.base_Url + 'nurse', data)
  }

  getAllAppointment():Observable<any>{
    return this.http.get(this.base_Url + 'appointment')
  }

  createAppointment(data: any):Observable<any>{
    return this.http.post(this.base_Url + 'appointment', data)
  }


  getAppointment(id: any): Observable<any> {
    return this.http.get(this.base_Url + `appointment/patient/${id}`);
  }

  getprescriptionById(id: any): Observable<any> {
    return this.http.get(this.base_Url + `prescription/patientId/${id}`);
  }

  getBillById(id: any): Observable<any> {
    return this.http.get(this.base_Url + `billing/patientId/${id}`);
  }

  paybill(data: any):Observable<any>{
    return this.http.post(this.base_Url+'payment', data)
  }

  getAdminStaff():Observable<any>{
    return this.http.get(this.base_Url + 'admin')
  }

  getAppointmentByDoctorId(id: any):Observable<any>{
    return this.http.get(this.base_Url + `appointment/doctorId/${id}`)
  }

  getPatientLabResultsById(id: any):Observable<any>{
    return this.http.get(this.base_Url + `testResult/test-result/patient/${id}`)
  }

  getPatientLabResultsByDoctorId(id: any):Observable<any>{
    return this.http.get(this.base_Url + `testResult/test-result/doctor/${id}`)
  }

  getSurgeryDetailsByPatientId(id: any):Observable<any>{
    return this.http.get(this.base_Url + `surgery/patient/${id}`)
  }

  getSurgeryDetailsByDoctorId(id: any):Observable<any>{
    return this.http.get(this.base_Url + `surgery/doctor/${id}`)
  }

}
