// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  openIdSettings: {
      authority: 'https://demo.identityserver.io/',
      client_id: 'implicit',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type: 'id_token token',
      scope: 'openid profile api',
      filterProtocolClaims: true,
      loadUserInfo: true,
      silent_redirect_uri: 'http://localhost:4200/silent_refresh.html'
  }
};
