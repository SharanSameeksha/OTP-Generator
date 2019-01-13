import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsServiceService } from '../services/contacts-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OtpguardGuard implements CanActivate {
  constructor(private ContactsService: ContactsServiceService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.ContactsService.selectedContact && this.ContactsService.selectedContact['_id']) {
      return true;
    }
      this.router.navigate(['/']);
  }
}
