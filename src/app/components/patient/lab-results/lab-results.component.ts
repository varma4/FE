import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.css']
})
export class LabResultsComponent implements OnInit{

  testResults: any[] = []

  constructor(private authSrv : AuthService){}

  ngOnInit(): void {
    let id = localStorage.getItem('id')
    this.authSrv.getPatientLabResultsById(id).subscribe(data => {
      this.testResults = data
      console.log(this.testResults);

    })
  }

}
