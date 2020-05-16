export async function run(core, request, logger) {
  try {
    const token = (await request({
      method: 'post',
      url: `https://${core.getInput('auth0-domain')}/oauth/token`,
      headers: {'content-type': 'application/json'},
      data: {
        'client_id': core.getInput('auth0-client-id'),
        'client_secret': core.getInput('auth0-client-secret'),
        'audience': core.getInput('auth0-audience'),
        'grant_type': 'client_credentials'
      }
    })).data.access_token;
    logger.log('obtained token');
    await request({ method: 'post',
      url: core.getInput('url'),
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {data: core.getInput('data')}
    });
    logger.log('sent request');
  } catch (error) {
    core.setFailed(error.message);
  }
}
