import { Component } from '@angular/core';

@Component({
  selector: 'app-gdrive',
  templateUrl: './gdrive.component.html',
  styleUrls: ['./gdrive.component.less']
})
export class GdriveComponent {

  logout() {
    // this.http.get("https://www.google.com/accounts/logout").subscribe((data) => {
    //   console.log(data);
    //   this.router.navigate(["/"]);
    // });
    // this.oidcSecurityService.logoff().subscribe((result) => {
    //   console.log(result);
      //this.router.navigate(["/"]);
    // })
  }
}
