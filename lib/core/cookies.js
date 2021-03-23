const options = JSON.parse('<%= JSON.stringify(options) %>')
const { cookie } = options

export const cookies = {
  getCookie (ctx) {
    const cookies = process.server
      ? ctx.req.headers.cookie
      : document.cookie

    if (!cookies) {
      return
    }

    return _getCookiesPOJO(cookies)[cookie.name]
  }
}

function _getCookiesPOJO (cookies) {
  const cookiesPOJO = {}

  cookies
    .split(';')
    .forEach((cookie) => {
      const parts = cookie.match(/(.*?)=(.*)$/)

      cookiesPOJO[parts[1].trim()] = (parts[2] || '').trim()
    })

  return cookiesPOJO
}
