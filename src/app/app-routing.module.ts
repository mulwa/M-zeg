import { ReceivedComponent } from './components/received/received.component';
import { TopAccoountComponent } from './components/top-accoount/top-accoount.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/authGuard';

const routes: Routes = [
  { path: 'transactions', component:TransactionsComponent,
  canActivate:[AuthGuard],
  children : [
    {path: '', redirectTo: 'received',  pathMatch: 'full'},    
    { path: 'send',component:SendMoneyComponent},
    { path: 'topUp', component:TopAccoountComponent},
    { path: 'received', component:ReceivedComponent},
    
  ]
  }, 
  { path: 'register', component:RegisterComponent},
  { path: 'login', component:LoginComponent},
  {path: '', redirectTo: 'register',  pathMatch: 'full'},
  {path: '**', component: RegisterComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

 }
