# GitHub Action: Authorized Request
A GitHub action that gets an authorization token from Auth0 and uses it for a POST request to a configurable URL.

## Inputs
  * auth0-domain: Auth0 domain
  * auth0-client-id: Auth0 client id
  * auth0-client-secret: Auth0 client secret
  * auth0-audience: Auth0 audience
  * data: Data to send in the body of the request
  * url: URL of the request
