import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-medical-records-admin',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponentAdmin {

  medicalRecords!: any

  constructor(private authSrv: AuthService){}

  ngOnInit(): void {
    this.authSrv.getAllMedicalRecords().subscribe(data => {
      this.medicalRecords = data
    })
  }

}
