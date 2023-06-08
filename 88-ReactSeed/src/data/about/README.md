# //nom:AboutData
- [index.ts](../index.ts)
- [interfaces.ts](../interfaces.ts)

# dataSources
- [dataSources.ts](../dataSources.ts)

```ts
import { IDataSource, IDataSources, dataSourceTemplate } from 'Data'
export const dataSources:IDataSources = {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  SourceKey: {
    ...dataSourceTemplate,
    endpoint: '/auth/login',
    method: 'POST',
  }
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
}
```

# dataRequest
- [dataRequest.ts](../dataRequest.ts)

```ts
import { IResponse } from 'Interfaces'
import { dataRequest, IDataRequest } from 'Data'
const MyComponent:React.FC = () => {
  const loadData = async () => {
    const request:IDataRequest = { source: 'SourceKey' }
    const response:IResponse = await dataRequest(request)
  }
  const postDocument = async () => {
    const request:IDataRequest = {
      source: 'SourcePostKey',
      document: {id:1, name:'example'},
    }
    const response:IResponse = await dataRequest(request)
  }
  return <>...</>;
}
```
