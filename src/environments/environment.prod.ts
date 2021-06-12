export const environment = {
  production: true,
  openIdSettings: {
    authority: 'https://auth.matareha.com/',//'https://demo.identityserver.io/',
    client_id: 'implicit',
    redirect_uri: 'https://munna.github.io/AngularJs-boilerplate-IdentityServer4/auth-callback',
    post_logout_redirect_uri: 'https://munna.github.io/AngularJs-boilerplate-IdentityServer4/',
    response_type: 'id_token token',
    scope: 'openid profile api',
    filterProtocolClaims: true,
    loadUserInfo: true,
    silent_redirect_uri: 'https://munna.github.io/AngularJs-boilerplate-IdentityServer4/silent_refresh.html'
}
};
