import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent  implements OnInit{

  medicalRecords: any

  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
    this.authSrv.getMedicalRecords().subscribe(data => {
      console.log(data[0]);
      this.medicalRecords = data

    })
  }

}
