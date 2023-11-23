import React from 'react';
import { LinearProgress } from '@mui/material';

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component = ({
  loading = true, // state
  children,       // custom content
}) => {
  return loading? (
    <>
      <LinearProgress />
      {children}
    </>
  ):(
    <>
      <LinearProgress sx={{visibility:'hidden'}} />
    </>
  );
}

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const   LoadingOverlay = Component;
export default LoadingOverlay ;

/** ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
Usage example:

import { LoadingOverlay } from 'Components';
const MyComponent = () => {
  const loading = true;
  return (
    <>
      <LoadingOverlay loading={loading} />
      {!loading && <>loaded content</>}
    </>
  );
};

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ **/
