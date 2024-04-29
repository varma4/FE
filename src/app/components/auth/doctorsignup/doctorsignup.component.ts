import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent {
  doctor: any = {};

  constructor(private authSrv: AuthService, private router: Router){}

  onSubmit() {
    // Send the patient data to the server for insertion
    this.authSrv.doctorSignup(this.doctor)
      .subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
          // Reset the form after successful submission
          this.router.navigate(['/doctorLogin'])
          this.doctor = {};
        },
        (error) => {
          console.error('Error adding patient:', error);
          // Handle error response here
        }
      );
  }

}
