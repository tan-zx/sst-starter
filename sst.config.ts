import { type SSTConfig } from 'sst'
import { ApiGateway } from 'stacks/Api'

export default {
  config(_input) {
    return {
      name: 'sst-starter',
      region: 'ap-southeast-1',
    }
  },
  stacks(app) {
    if (app.stage !== 'prod') {
      app.setDefaultRemovalPolicy('destroy')
    }
    app.setDefaultFunctionProps({
      timeout: 30,
      architecture: 'arm_64', // can load test arm_64 vs x86_64 in the future
      runtime: 'nodejs18.x',
      environment: {
        NODE_OPTIONS: '--enable-source-maps',
      },
      nodejs: {
        sourcemap: true,
      },
    })
    app.stack(ApiGateway)
  },
} satisfies SSTConfig
