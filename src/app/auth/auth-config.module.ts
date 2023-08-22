import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              configId: 'google',
              authority: 'https://accounts.google.com',
              // logout url: https://www.google.com/accounts/logout
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: '491499355097-0v04u87qvu9b1ei4kmmff3hu8jv3gk2t.apps.googleusercontent.com',
              scope: 'openid profile email', // 'openid profile offline_access ' + your scopes
              responseType: 'id_token',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
