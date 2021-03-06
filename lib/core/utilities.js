import { Base64 } from 'js-base64'
import { cookies } from './cookies'

export const utilities = {
  get (ctx) {
    return parseToken(cookies.getCookie(ctx))
  },
  check (name, value, superValue, ctx) {
    const claims = parseToken(cookies.getCookie(ctx))

    if (!claims) {
      return
    }

    if (Array.isArray(claims[name])) {
      return (
        claims[name].includes(superValue) ||
        (Array.isArray(value)
          ? value.some(item => claims[name].includes(item))
          : claims[name].includes(value))
      )
    } else {
      return (
        claims[name] === superValue ||
        (Array.isArray(value)
          ? value.includes(claims[name])
          : claims[name] === value)
      )
    }
  }
}

function parseToken (token) {
  if (!token) {
    return
  }

  try {
    const tokenBase64 = token.split('.')[1]
    return JSON.parse(Base64.decode(tokenBase64))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[TOKEN_CLAIMS] parseToken error: ', e)
  }
}
