import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private authService: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('next', next);
    console.log('state', state);

    if (this.authService.isAuthenticated()) {
      console.log('Success');
      return true;
    } else {
      console.log('Blocked by guard');
      return false;
    }
  }

}
