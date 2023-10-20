/**
 * Helps to avoid hardcoded texts
 * i18next Documentation
 * https://www.i18next.com/overview/getting-started
 */
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'lv'
  })

export const t = (text: string) => {
  const { t } = useTranslation()
  return t(text)
}

export default t

/* Usage example

import React from 'react'
import { t } from 'Utils'
const MyComponent:React.FC = () => {
  const text = t('Custom text')
  return (
    <>
      {text}
    </>
  )
}

*/
