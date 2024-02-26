import { APIGatewayEvent, Context, Handler } from "aws-lambda";

export const hello: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      input: event,
    }),
  };
};
