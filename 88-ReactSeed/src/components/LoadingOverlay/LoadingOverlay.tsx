import React from 'react'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
interface IProps {
  loading?: boolean;
  children?: React.ReactNode;
}
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component:React.FC<IProps> = ({
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

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const LoadingOverlay = Component
export default LoadingOverlay
