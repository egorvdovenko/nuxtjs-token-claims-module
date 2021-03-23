import Middleware from '../../middleware'
import { utilities } from './utilities'

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { middleware } = options

Middleware.tokenClaims = function (ctx) {
  const { route, error, redirect } = ctx

  route.meta.forEach((meta) => {
    if (
      meta.claims &&
      middleware.claims &&
      middleware.claims.every(claim =>
        process.server
          ? (!utilities.check(claim, meta.claims[claim], ctx))
          : (!utilities.check(claim, meta.claims[claim]))
      )
    ) {
      middleware.redirect
        ? redirect(middleware.redirect)
        : error({ statusCode: 403 })
    }
  })
}
