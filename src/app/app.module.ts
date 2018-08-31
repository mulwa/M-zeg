import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}  from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';




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
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


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
    TopAccoountComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),  
    AppRoutingModule
  ],
  providers: [MainserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
