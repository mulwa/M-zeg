import { MainserviceService } from './mainservice.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {  

  constructor(private service:MainserviceService, private router: Router) {}

  canActivate():boolean{
      if(!this.service.isAuthenticated()){
          this.router.navigate(['login']);
          console.log('Authentication  failed');
          return false;
          
      }
      console.log('Token good');
      return true;
     
  }

}
