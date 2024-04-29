import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit{
  newNurse: any = {};
  nurses: any[] = []
  adminStaff: any[] = []
  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.authSrv.getAllNurses().subscribe(data => {
      this.nurses = data
    })

    this.authSrv.getAdminStaff().subscribe(data2 => {
      this.adminStaff = data2
      console.log(this.adminStaff);

    })
  }

  submitCreateNurseForm() {
    // Call your service to create a new nurse
    this.authSrv.createNurse(this.newNurse).subscribe(() => {
      // Clear the form after submission
      this.newNurse = {};
      this.loadData()
    });
  }
}
