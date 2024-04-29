import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-surgerypatient',
  templateUrl: './surgerypatient.component.html',
  styleUrls: ['./surgerypatient.component.css']
})
export class SurgerypatientComponent implements OnInit{

  surgeries: any[] = []

  constructor(private authSrv: AuthService){}

  ngOnInit(): void {
    let id = localStorage.getItem('id')
    this.authSrv.getSurgeryDetailsByPatientId(id).subscribe(data => {
      this.surgeries = data
    })
  }

}
