import { type APIGatewayProxyEvent } from 'aws-lambda'

export const handler = async (_: APIGatewayProxyEvent) => {
  return {
    statusCode: 200,
    message: 'You have reached our API Gateway endpoint!',
  }
}
