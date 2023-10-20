## LoadingOverlay usage example

```tsx
import { LoadingOverlay } from 'Components'
const MyComponent:React.FC = () => {
  return (
    <>
      <LoadingOverlay loading={true} />
      {!loading && <>Loaded</>}
    </>
  )
}
```
