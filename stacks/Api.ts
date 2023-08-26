import { Api, type StackContext } from 'sst/constructs'

export function ApiGateway({ app, stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/root.handler',
      'GET /go': {
        function: {
          handler: 'packages/functions/src/root.go',
          runtime: 'go1.x',
          timeout: 20,
        },
      },
    },
  })
}
