import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit{
  newAppointment: any = {};
  appointments: any[] = []
  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.authSrv.getAllAppointment().subscribe(data => {
      this.appointments = data
      console.log(this.appointments);

    })
  }


  submitCreateAppointmentForm() {
    this.authSrv.createAppointment(this.newAppointment).subscribe(() => {
      // Clear the form after successful submission
      this.newAppointment = {};
      this.loadData()
    });
  }
}
