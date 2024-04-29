import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  patient: any = {}; // Object to store patient data from the form

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  onSubmit() {
    // Send the patient data to the server for insertion
    this.authSrv.signup(this.patient)
      .subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
          // Reset the form after successful submission
          this.patient = {};
        },
        (error) => {
          console.error('Error adding patient:', error);
          // Handle error response here
        }
      );
  }

}
