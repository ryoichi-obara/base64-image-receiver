import test from 'ava'
import dotenv from 'dotenv'

import lambda from '../src/index'

dotenv.config()

// Parmeters for lambda function. (This is default values of lambda function test.)
const event = {
  resource: '/receive',
  path: '/receive',
  httpMethod: 'POST',
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json'
  },
  multiValueHeaders: {
    Accept: [ '*/*' ],
    'Content-Type': [ 'application/json' ],
  },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: {
    resourcePath: '/receive',
    httpMethod: 'POST',
    requestTime: '22/Aug/2019:11:39:15 +0000',
    path: '/prod/receive',
    protocol: 'HTTP/1.1',
    stage: 'prod',
    identity: {
      cognitoIdentityPoolId: null,
      accountId: null,
      cognitoIdentityId: null,
      caller: null,
      principalOrgId: null,
      accessKey: null,
      cognitoAuthenticationType: null,
      cognitoAuthenticationProvider: null,
      userArn: null,
      user: null
    },
  },
  body: '{ "encodedFileContent": "" }',
  isBase64Encoded: false,
}

test('execute lambda', async (t) => {
  console.time('execute lambda.handler')
  const data = await lambda.handler(event)
  console.log('----------------------------------------')
  console.log(data)
  console.timeEnd('execute lambda.handler')
  // t.pass()
	// t.is(data, { statusCode: '200', body: '"Success"' })
	t.deepEqual(data, { statusCode: '200', body: '"Success"' })
	// t.deepEqual(data, { statusCode: '500', body: '"Internal Server Error"' })
});
