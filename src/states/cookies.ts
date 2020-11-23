import { createContainer } from 'unstated-next'
import { useCookies } from 'react-cookie';

export function useCookieStorage() {
  const [cookies, setCookie] = useCookies(['name']);

  return { self, setCookie }
}
export const Cookies = createContainer(useCookieStorage)
