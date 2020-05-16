import {run} from './action';
import {SequenceSpy} from './sequenceSpy';

describe('Action run', () => {
  it('can get a token and send a request', async () => {
    const requestObj = new SequenceSpy([
      {name: 'request', args: [{
        method: 'post',
        url: `https://auth0Domain/oauth/token`,
        headers: {'content-type': 'application/json'},
        data: {
          'client_id': 'auth0ClientId',
          'client_secret': 'auth0ClientSecret',
          'audience': 'auth0Audience',
          'grant_type': 'client_credentials'
        }
      }], return: {data: {access_token: 'token'}}},
      {name: 'request', args: [{
        method: 'post',
        url: 'url',
        headers: {authorization: `Bearer token`},
        data: {data: 'data'}
      }]}
    ]);
    await run(new SequenceSpy([
      {name: 'getInput', args: ['auth0-domain'], return: 'auth0Domain'},
      {name: 'getInput', args: ['auth0-client-id'], return: 'auth0ClientId'},
      {name: 'getInput', args: ['auth0-client-secret'], return: 'auth0ClientSecret'},
      {name: 'getInput', args: ['auth0-audience'], return: 'auth0Audience'},
      {name: 'getInput', args: ['url'], return: 'url'},
      {name: 'getInput', args: ['data'], return: 'data'}
    ]), requestObj.request, new SequenceSpy([
      {name: 'log', args: ['obtained token']},
      {name: 'log', args: ['sent request']}
    ]));
  });
});
