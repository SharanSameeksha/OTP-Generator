import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './custom.material.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { Routes, RouterModule} from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageDashboardComponent } from './components/message-dashboard/message-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OtpguardGuard } from './guards/otpguard.guard';
import { NgxLoadingModule } from 'ngx-loading';

const route: Routes = [
  {path: '', pathMatch: 'full', component: DashboardComponent},
  { path: 'sendMessage', component: MessagesComponent, canActivate: [ OtpguardGuard ]},
  { path: 'allmessages', component: MessageDashboardComponent}
];
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    MessageDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CdkTableModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(route),
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
