import { Injectable } from '@angular/core';
import { UserDataService } from './data/users/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  getUser() {
    let user = sessionStorage.getItem('authenticatedUser');
    return user;
  }
}
