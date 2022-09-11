import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
const hello = async (event) => {
    console.log(event, 'event');
    return formatJSONResponse({
        message: `Hello and welcome to the exciting Serverless world!`
    });
};
export const main = middyfy(hello);
//# sourceMappingURL=handler.js.map