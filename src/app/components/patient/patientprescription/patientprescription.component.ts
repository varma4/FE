import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patientprescription',
  templateUrl: './patientprescription.component.html',
  styleUrls: ['./patientprescription.component.css']
})
export class PatientprescriptionComponentById implements OnInit{
  prescriptions: any[] = []
  constructor(private authSrv: AuthService){}

  ngOnInit(): void {
    let id = localStorage.getItem('id')
      this.authSrv.getprescriptionById(id).subscribe(data => {
        this.prescriptions = data;
      })
  }
}
