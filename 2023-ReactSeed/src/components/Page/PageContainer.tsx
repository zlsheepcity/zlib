import React from 'react'
import { PageLayout } from 'Components'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
interface IProps {
  children?: React.ReactNode;
};
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Component:React.FC<IProps> = ({
  children,
}) => {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const PageContainer = Component
export default PageContainer
