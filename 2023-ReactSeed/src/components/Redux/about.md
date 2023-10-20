# Store config example
- [storeExample.ts](./storeExample.ts)
- [store.ts](./store.ts)

#### storeExample.js
```ts
import { createSlice } from '@reduxjs/toolkit'
import { IObject as IO } from 'Interfaces'

export interface ISliceExampleState {
  title: string;
}

const sliceExample = createSlice({
  name: 'storeExample',
  initialState: {
    title: 'initial',
  },
  reducers: {
    storeExampleSetTitle: (state, action) => {
      state.title = action.payload
    },
  },
})

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ setters

export const {
  storeExampleSetTitle,
} = sliceExample.actions

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ getters

export const storeExampleGetTitle = (state:any) => state?.title || ''

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const sliceExampleReducer = sliceExample.reducer
export default sliceExampleReducer
```

#### store.js
```ts
import { configureStore } from '@reduxjs/toolkit'
import { sliceExampleReducer } from './storeExample'

export const store = configureStore({
  reducer: {
    storeExample: sliceExampleReducer,
  },
})

export default store
```

# Store provider init
- [ReactProviderRedux.tsx](./ReactProviderRedux.tsx)

#### App.tsx
```tsx
import { ReactProviderRedux } from 'Components/Redux'

export const App:React.FC = () => {
  return (
    <div id="App">
      <ReactProviderRedux>
        ...
      </ReactProviderRedux>
    </div>
  );
}
```

# Store usage example

#### MyComponent.tsx
```tsx
import {
  useDispatch,
  useSelector,
  storeExampleGetTitle,
  storeExampleSetTitle,
} from 'Components/Redux'
export const MyComponent:React.FC = () => {

  // get value
  const title = useSelector(storeExampleGetTitle)

  // set value
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(storeExampleSetTitle('New value'))
  }, [])

  //
  return <></>;
}
```
