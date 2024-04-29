import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent {
  doctor: any = {};

  constructor(private authSrv: AuthService, private router: Router){}

  onSubmit() {
    // Send the patient data to the server for insertion
    this.authSrv.doctorLogin(this.doctor)
      .subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
          // Reset the form after successful submission
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('doctorId', response.doctorId);
          this.router.navigate(['/doctorhome'])
          this.doctor = {};
        },
        (error) => {
          console.error('Error adding patient:', error);
          // Handle error response here
        }
      );
  }

}
