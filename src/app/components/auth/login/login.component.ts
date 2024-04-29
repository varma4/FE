import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  patient: any = {}; // Object to store patient data from the form

  constructor(private http: HttpClient, private authSrv: AuthService, private router: Router) { }

  onSubmit() {
    // Send the patient data to the server for insertion
    this.authSrv.login(this.patient).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.token)
      localStorage.setItem('id', data.patientID)
      this.router.navigate(['/patientHome'])
    })
  }

}


