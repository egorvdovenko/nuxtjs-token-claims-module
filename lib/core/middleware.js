import Middleware from '../../middleware'
import { utilities } from './utilities'

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { middleware = {} } = options

Middleware.tokenClaims = function (ctx) {
  const { route, error, redirect } = ctx

  route.meta.forEach((meta) => {
    if (
      meta.claims &&
      middleware.claims &&
      middleware.claims.every(({ name, superValue }) =>
        process.server
          ? (!utilities.check(name, meta.claims[name], superValue, ctx))
          : (!utilities.check(name, meta.claims[name], superValue))
      )
    ) {
      middleware.redirect
        ? redirect(middleware.redirect)
        : error({ statusCode: 403 })
    }
  })
}
