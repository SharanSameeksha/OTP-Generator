import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService implements OnInit {
  selectedContact = {};
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  fetchContacts() {
    return this.http.get('http://localhost:3000/contacts/fetch');
  }
  selectContact(contact) {
    this.selectedContact = contact;
  }
  sendOTP(contact, otp) {
    const data = {
      'receiver': {
        'id': contact._id,
        'FirstName': contact.FirstName,
        'LastName': contact.LastName,
        'Mobile': contact.Mobile
      },
        'otp': otp
      };
    return this.http.post('http://localhost:3000/otp/sms', data);
  }
}
