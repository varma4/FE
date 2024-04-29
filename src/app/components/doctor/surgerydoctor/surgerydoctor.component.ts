import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-surgerydoctor',
  templateUrl: './surgerydoctor.component.html',
  styleUrls: ['./surgerydoctor.component.css']
})
export class SurgerydoctorComponent implements OnInit{

  surgeries: any[] = []

  constructor(private authSrv: AuthService){}

  ngOnInit(): void {
    let id = localStorage.getItem('doctorId')
    this.authSrv.getSurgeryDetailsByDoctorId(id).subscribe(data => {
      this.surgeries = data
      console.log(this.surgeries);

    })
  }

}
