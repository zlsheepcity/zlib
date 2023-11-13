/**
 * useHTMLDocumentTitle('new title');
 * React hook to change html <title> text
 */
import React from 'react'
import appConfig from 'Src/AppConfig'

export function useHTMLDocumentTitle(
  title,
  prevailOnUnmount = false
) {
  const defaultTitle = React.useRef(document.title);

  React.useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  React.useEffect(() => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [])
}

export default useHTMLDocumentTitle;
