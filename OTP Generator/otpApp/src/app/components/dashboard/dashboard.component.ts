import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../../services/contacts-service.service';
import { MatTable } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'mobile', 'lastOtp', 'Action'];
  contacts = [];

  constructor( private contactsService: ContactsServiceService, private router: Router) { }

  ngOnInit() {
    this.contactsService.fetchContacts().subscribe((data) => {
      if (data['response']) {
        this.contacts = data['response'];
      }
    });
  }
  sendOTP(element) {
    console.log(element);
    this.contactsService.selectContact(element);
    this.router.navigate(['sendMessage']);


  }

}


