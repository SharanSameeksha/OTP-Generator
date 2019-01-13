import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }
  fetchMessages() {
    return this.http.get('http://localhost:3000/otp/messages');
  }
}
