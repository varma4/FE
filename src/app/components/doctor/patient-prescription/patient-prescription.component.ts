import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-prescription',
  templateUrl: './patient-prescription.component.html',
  styleUrls: ['./patient-prescription.component.css']
})
export class PatientPrescriptionComponent implements OnInit{

  prescriptions: any

  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
    this.authSrv.getPatientsPrescription().subscribe(data => {
      console.log(data[0]);
      this.prescriptions = data

    })
  }

}
