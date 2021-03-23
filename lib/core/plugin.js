import { utilities } from './utilities'

const options = JSON.parse('<%= JSON.stringify(options) %>')
const { namespace } = options

export default function (ctx, inject) {
  inject(namespace, {
    ...utilities
  })
}
