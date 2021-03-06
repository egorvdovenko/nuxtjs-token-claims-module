# Nuxt.js token claims module

Token claims handling module for Nuxt.js apps.

## Setup

Install with npm:
```bash
npm install nuxt-token-claims-module
```

Edit `nuxt.config.js`:
```js
modules: [
  'nuxt-token-claims-module'
]
```

## Middleware

You must enable `tokenClaims` middleware. 

Edit `nuxt.config.js`:
```js
router: {
  middleware: ['tokenClaims'],
},
tokenClaims: {
  // Settings
}
```

## Settings

Example:
```js
{
  middleware: {
    // It will be used to make redirect, after failed claims checking
    // By default exec error({ statusCode: 403 })
    redirect: '/errors/403',
    // List of claims, that will be used for cheking route
    // It's required
    claims: [
      {
        // Name of claim, it's required
        name: 'claimName',
        // You can specify a super value for claim
        // If claim contain this value, it will be valid no matter what
        superValue: 'claimSuperValue'
      }
    ]
  },
  cookie: {
    // Name of token cookie, it's required
    name: 'token'
  }
}
```

## Methods

Anywhere in your application you can use following methods:

### get

```js
this.$tokenClaims.get([ctx])
// return token claims object
// [ctx] - app context, it's required if app running in universal mode
```

### check

```js
this.$tokenClaims.check(name, value[, superValue, ctx])
// return boolean value
// name - name of claim
// value - value of claim, it can be primitive value or array
// [superValue] - if claim contain this value, it will be valid no matter what
// [ctx] - app context, it's required if app running in universal mode
```

## Usage example

### routing

```js
{
  path: 'exapmle',
  component: () => import('~/pages/exapmle.vue').then(m => m.default || m),
  meta: {
    claims: {
      role: 'ExampleRole',
      permission: 'ExamplePermission'
      // Array usage
      // role: ['ExampleRole1', 'ExampleRole2']
      // permission: ['ExamplePermission1', 'ExamplePermission2']
    }
  }
}
```

### component

```js
export default {
  methods: {
    checkRole () {
      return this.$tokenClaims.check('role', 'ExampleRole')
      // Array usage
      // return this.$tokenClaims.check('role', ['ExampleRole1', 'ExampleRole2']) - 
    },
    checkPermission () {
      return this.$tokenClaims.check('permission', 'ExamplePermission')
      // Array usage
      // return this.$tokenClaims.check('permission', ['ExamplePermission2', 'ExamplePermission2'])
    }
  }
}
</script>
```

## License

[ISC](https://opensource.org/licenses/ISC)
