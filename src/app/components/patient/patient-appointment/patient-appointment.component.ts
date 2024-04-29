import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit{
  appointments: any[] = []
  newAppointment: any = {};

  constructor(private authsrv: AuthService){}

  ngOnInit(): void {
    this.newAppointment.PatientID = localStorage.getItem('id')
    this.loadData()
  }

  loadData(){
    let id = localStorage.getItem('id')
      this.authsrv.getAppointment(id).subscribe(data => {
        this.appointments = data
        console.log(this.appointments);

      })
  }
  submitCreateAppointmentForm() {
    this.authsrv.createAppointment(this.newAppointment).subscribe(() => {
      // Clear the form after successful submission
      this.newAppointment = {};
      this.loadData()
    });
  }


}
