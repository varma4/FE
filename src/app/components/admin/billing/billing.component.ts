import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  billings: any[] = [];
  newBilling: any = {};

  constructor(private authSrv: AuthService){}

  ngOnInit(): void {
    this.loadBillings();
  }

  loadBillings() {
    this.authSrv.getAllBillings().subscribe(data => {
      this.billings = data;
    });
  }

  submitBillingForm() {
    // Call your billing service to submit the new billing details
    this.authSrv.createBilling(this.newBilling).subscribe(() => {
      // Clear the form and reload the billing data
      this.newBilling = {};
      this.loadBillings();
    });
  }

}
