

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  // saveUserAddress() {
  //   this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value).subscribe((address: IAddress) => {
  //     this.toastr.success('Address saved');
  //     this.checkoutForm.get('addressForm').reset(address);
  //   }, error => {
  //     this.toastr.error(error.message);
  //     console.log(error);
  //   })
  // }

}