/** Usage example

import { LoadingOverlay } from 'Components'
const MyComponent = () => {
  return (
    <>
      <LoadingOverlay loading={true} />
      {!loading && <>loaded content</>}
    </>
  );
};

**/

import React from 'react'

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component = ({
  loading = true,
  children,
}) => {

  if (!loading) return <></>;
  return (
    <>
      LoadingOverlay
      {children}
    </>
  )
}
//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const   LoadingOverlay = Component;
export default LoadingOverlay ;
