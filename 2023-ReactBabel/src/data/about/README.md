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

```js
import { dataRequest } from 'Data';
import {
  dataRequest,
  dataSources,
  dataSourceTemplate,
} from 'Data';

const MyComponent = () => {

  const loadData = async () => {
    // dataRequest props
    const sourceKey = 'dataSourceTemplate'
    const source    = dataSources[sourceKey]
    const document  = documentTemplate
    const params    = {}
    // dataRequest loadData
    const request = {
      sourceKey,
      source,
      document,
      params,
    };
    const response = await dataRequest(request);
  };

  const loadData = async () => {
     const request = {sourceKey:'dataSourceTemplate'};
     const response = await dataRequest(request);
    return response;
  };


  const postDocument = async () => {
    const request = {
      source: 'SourcePostKey',
      document: {id:1, name:'example'},
    };
    const response = await dataRequest(request);
  }

  return <>...</>;
}
```
