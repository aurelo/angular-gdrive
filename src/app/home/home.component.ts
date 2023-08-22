import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) { }

  login() {
    this.oidcSecurityService.authorize("google");
      // .authorizeWithPopUp()
      // .subscribe(({ isAuthenticated, userData, accessToken, errorMessage }) => {
      //   /* use data */
      //   console.log(isAuthenticated);
      //   console.log("user data", userData);
      //   console.log("access token", accessToken);
      //   console.error("error message", errorMessage);


      //   if (errorMessage == null) {
      //     this.router.navigate(["/gdrive"]);
      //   }

      // });
  }

}
