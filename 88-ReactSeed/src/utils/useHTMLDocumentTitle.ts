/**
 * useHTMLDocumentTitle
 * React hook to change html <title> text
 */
import React from 'react'
import appConfig from 'Src/AppConfig'

export function useHTMLDocumentTitle(
  title: string,
  prevailOnUnmount: boolean = false
) {
  const defaultTitle = React.useRef(document.title);

  React.useEffect(() => {
    const titleWithVersion = `${title} [v${appConfig.v}]`
    const titleWithProjectName = `${title}, IKVD`
    document.title = titleWithProjectName;
  }, [title]);

  React.useEffect(() => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
}

export default useHTMLDocumentTitle
