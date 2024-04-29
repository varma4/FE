import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-patient-billing',
  templateUrl: './patient-billing.component.html',
  styleUrls: ['./patient-billing.component.css'],
})
export class PatientBillingComponent implements OnInit {
  newBill: any = {};
  bills: any[] = [];

  data:any = {}


  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.newBill.PatientID = localStorage.getItem('id');
    this.loadData();
  }

  loadData() {
    let id = localStorage.getItem('id');
    this.authSrv.getBillById(id).subscribe((val) => {
      this.bills = val;
      console.log(this.bills);

    });
  }

  submitForm() {
    this.authSrv.createBilling(this.newBill).subscribe(
      (data) => {
        console.log('Bill created successfully:', data);
        this.resetForm();
      },
      (error) => {
        console.error('Error creating bill:', error);
      }
    );
  }
  showPaymentForm(bill: any) {
    bill.showForm = !bill.showForm;
  }

  submitBill() {
    this.authSrv.paybill(this.data).subscribe(
      (data: any) => {
        console.log('Bill created successfully:', data);
        this.resetForm();
      },
      (error) => {
        console.error('Error creating bill:', error);
      }
    );
  }




  resetForm() {
    this.newBill = {};
  }
}
