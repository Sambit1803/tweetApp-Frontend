import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';
import { UserDataService } from '../service/data/users/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId = ''
  password = ''

  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, private autheneticationService: AuthenticationService, private service : UserDataService) { }

  ngOnInit(): void {
  }

  handleLogin() {

    this.service.authenticateUser(this.loginId, this.password).subscribe(response => {
      console.log("response: "+response)
      if (response === true) {
        console.log("inside if")
        sessionStorage.setItem('authenticatedUser', this.loginId)
        this.router.navigate(['tweets', this.loginId,'home'])
        this.invalidLogin = false
      }
      else {
        console.log("inside else")
        this.invalidLogin = true
      }

    })

    // if (this.hardcodedAutheneticationService.authenticate(this.loginId,this.password)) {

    //   this.router.navigate(['tweets', this.loginId,'home'])
    //   this.invalidLogin = false
    // }
    // else {
    //   this.invalidLogin = true;
    // }
  }

}
