import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  doctors !: any
  constructor(private authSrv: AuthService){}

  ngOnInit(): void {
    this.authSrv.getAlldoctors().subscribe(data => {
      this.doctors = data
    })
  }

}
