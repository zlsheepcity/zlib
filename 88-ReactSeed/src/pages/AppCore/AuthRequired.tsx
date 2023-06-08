import React from 'react'
import { PageContainer } from 'Components'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const Page:React.FC = () => {
  return (
    <PageContainer>
      AuthRequired
    </PageContainer>
  )
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const AuthRequired = Page
export default AuthRequired
