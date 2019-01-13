import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-dashboard',
  templateUrl: './message-dashboard.component.html',
  styleUrls: ['./message-dashboard.component.css']
})
export class MessageDashboardComponent implements OnInit {
  displayedColumns: string[] = ['TImestamp', 'firstName', 'lastName', 'mobile', 'Otp'];
  messages = [];
  errorOccured = false;
  EmptyRecords = false;
  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messageService.fetchMessages().subscribe((data) => {
      if (data['response'] && data['response'].length > 0) {
        this.messages = data['response'];
        this.EmptyRecords = false;
      } else {
        this.EmptyRecords = true;
      }
    }, (error) => {
      this.errorOccured = true;
    });
  }

}
