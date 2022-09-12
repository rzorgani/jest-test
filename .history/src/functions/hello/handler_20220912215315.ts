import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// import { formatJSONResponse } from '@libs/api-gateway';
// import { middyfy } from '@libs/lambda'

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(`Hello and welcome to the exciting Serverless world!`)
  }
  // return formatJSONResponse({
  //   message: `Hello and welcome to the exciting Serverless world!`
  // });
};

export const main = hello;
