import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctor-lab-results',
  templateUrl: './doctor-lab-results.component.html',
  styleUrls: ['./doctor-lab-results.component.css']
})
export class DoctorLabResultsComponent implements OnInit{
  testResults: any[] = []

  constructor(private authSrv : AuthService){}

  ngOnInit(): void {
    let id = localStorage.getItem('doctorId')
    this.authSrv.getPatientLabResultsByDoctorId(id).subscribe(data => {
      this.testResults = data

    })
  }

}
