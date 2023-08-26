import { Bucket, type StackContext, Table } from 'sst/constructs'

export function Storage({ app, stack }: StackContext) {
  const table = new Table(stack, 'table', {
    fields: {
      pk: 'string',
      sk: 'string',
      gsi1pk: 'string',
      gsi1sk: 'string',
      gsi2pk: 'string',
      gsi2sk: 'string',
    },
    primaryIndex: {
      partitionKey: 'pk',
      sortKey: 'sk',
    },
    globalIndexes: {
      gsi1: {
        partitionKey: 'gsi1pk',
        sortKey: 'gsi1sk',
        projection: 'all',
      },
      gsi2: {
        partitionKey: 'gsi2pk',
        sortKey: 'gsi2sk',
        projection: 'all',
      },
    },
    timeToLiveAttribute: 'TTL', // uses epoch timestamp
  })
  // TODO: configure S3 bucket
  const bucket = new Bucket(stack, 'bucket')
  return {
    table,
    bucket,
  }
}
