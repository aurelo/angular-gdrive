import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  authenticated$ = this.oidcSecurityService.isAuthenticated$
   .pipe(
     tap((authenticatedResult: AuthenticatedResult) => {
       console.log("authenticatedResult.isAuthenticated", authenticatedResult.isAuthenticated);
      //  if (authenticatedResult.isAuthenticated) {
      //    console.log("navigate to gdrive")
      //    this.router.navigate(["/gdrive"]);
      //   } else {
      //    console.log("navigate to ROOT")
      //    this.router.navigate(["/"]);
      //  }
     })
   );

  constructor(private oidcSecurityService: OidcSecurityService,
    private router: Router) { }

  ngOnInit() {
    
    // this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, errorMessage }) => {
    //   console.log("isAuthenticated", isAuthenticated);
    //   console.log("user data", userData);
    //   console.log("access token", accessToken);
    //   if (!!errorMessage) {
    //     console.error("error message", errorMessage);
    //   }
    // });
  }
}
