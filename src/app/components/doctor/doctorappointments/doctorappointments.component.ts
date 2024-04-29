import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-doctorappointments',
  templateUrl: './doctorappointments.component.html',
  styleUrls: ['./doctorappointments.component.css']
})
export class DoctorappointmentsComponent implements OnInit{
  appointments: any[] = []
  constructor(private authServ: AuthService){}

  ngOnInit(): void {
    const id = localStorage.getItem('doctorId')
      this.authServ.getAppointmentByDoctorId(id).subscribe(data => {
        this.appointments = data
        // console.log(this.appointments);

      })
  }
}
