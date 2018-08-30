import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}  from '@angular/forms';




import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendComponent } from './components/send/send.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { TopAccoountComponent } from './components/top-accoount/top-accoount.component';
import { MainserviceService } from './services/mainservice.service';


@NgModule({
  declarations: [
    AppComponent,   
    FooterComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    TransactionsComponent,
    ReceivedComponent,
    SendComponent,
    SendMoneyComponent,
    TopAccoountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,  
    AppRoutingModule
  ],
  providers: [MainserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
