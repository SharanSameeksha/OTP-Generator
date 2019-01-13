import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../../services/contacts-service.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  contact = {};
  otp: number;
  loading = false;
  ShowSuccess = false;
  ShowFailure = false;
  constructor( private contactService: ContactsServiceService) { }

  ngOnInit() {
    this.contact = this.contactService.selectedContact;
    if (this.contact['FirstName']) {
      this.generateOTP();
    }
  }

  generateOTP() {
    this.otp = _.random(100000, 1000001);
  }
  sendOTP() {
    console.log('sending');
    this.loading = true;
    this.contactService.sendOTP(this.contact, this.otp).subscribe((data) => {
      this.loading = false;
      if (data['status'] === 'sucess') {
        this.ShowSuccess = true;
        this.ShowFailure = false;
      } else {
        this.ShowFailure = true;
        this.ShowSuccess = false;
      }
    }, (error) => {
      this.loading = false;
      this.ShowFailure = true;
      this.ShowSuccess = false;
    });
  }

}
