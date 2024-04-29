import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.css']
})
export class PatientsDataComponent implements OnInit{

  patients: any

  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
    this.authSrv.getPatientsData().subscribe(data => {
      console.log(data[0]);
      this.patients = data

    })
  }
}
