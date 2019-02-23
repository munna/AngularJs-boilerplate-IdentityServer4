import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User, WebStorageStateStore} from 'oidc-client';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Injectable()
export class AuthService {
  private manager = new UserManager(environment.openIdSettings);
  private user: User = null;
  constructor(private router: Router) {
    this.manager.getUser().then(user => {
      this.user = user;
      console.log(user);
  });
   }
   isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
}
getClaims(): any {
  if (this.user != null) {
    return this.user.profile;
  }  else {
    return null;
  }
}
getAuthorizationHeaderValue(): string {
  return `${this.user.token_type} ${this.user.access_token}`;
}
startAuthentication(): Promise<void> {
  return this.manager.signinRedirect();
}
Logout(): Promise<void> {
  
 return this.manager.signoutRedirect().then(() => {
    this.manager.clearStaleState();
    });
}

completeAuthentication(): Promise<void> {
  return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
  });
}

}
// export function getClientSettings(): UserManagerSettings {
//   return {
//       authority: 'https://demo.identityserver.io/',
//       client_id: 'implicit',
//       redirect_uri: 'http://localhost:4200/auth-callback',
//       post_logout_redirect_uri: 'http://localhost:4200/',
//       response_type: 'id_token token',
//       scope: 'openid profile api',
//       filterProtocolClaims: true,
//       loadUserInfo: true,
//       silent_redirect_uri: 'http://localhost:4200/silent_refresh.html'
//       //userStore: new WebStorageStateStore({ store: window.localStorage  })

//   };
// }
