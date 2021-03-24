<template>
  <div>
    403!
    <button @click="setToken(token)">
      Set token
    </button>
    <button @click="setToken(generalToken)">
      Set general token
    </button>
    <button @click="$router.push('/')">
      Index
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDA4IiwiZW1haWwiOiJ5b2Rhc2tpbGxtZUBnbWFpbC5jb20iLCJqdGkiOiIwODUxOTUyYS1mMmVlLTQwOGEtYjVlYi0yNGE1MzAzMzE5ZGQiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsInN1YmNhdCI6WyIxIiwiMiJdLCJwZXJtaXNzaW9uIjpbIkNvbnRlbnRQYWdlcyIsIkdlbmVyYWxTZXR0aW5ncyIsIkxvY2FsaXphdGlvbnMiLCJOYXZpZ2F0aW9uRWxlbWVudHMiLCJMZWFkcyIsIk5ld3MiLCJSZWdpb25zIiwiU3ViY2F0ZWdvcmllcyIsIlN1cHBvcnRBZmZpbGlhdGlvbnMiLCJTdXBwb3J0VHlwZXMiLCJTdXBwb3J0TWVhc3VyZXMiXSwibmJmIjoxNjE2NTAyNDU5LCJleHAiOjE2MTY1MDI3NTksImlhdCI6MTYxNjUwMjQ1OX0.gWmYtDScOlbGoM3PARdCxw1mnseTccPEuDkdW-HTDbs',
      generalToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDA4IiwiZW1haWwiOiJ5b2Rhc2tpbGxtZUBnbWFpbC5jb20iLCJqdGkiOiI2OTM1ZTk5YS1lMzVjLTRhZGMtYTk2Ny03MWEwYTU0OGIwMDQiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsInN1YmNhdCI6WyIxIiwiMiJdLCJwZXJtaXNzaW9uIjoiR2VuZXJhbCIsIm5iZiI6MTYxNjU3MDg4MSwiZXhwIjoxNjE2NTcxMTgxLCJpYXQiOjE2MTY1NzA4ODF9.97mBZIkcdwAa5_tiGpOFgLk62kiuaQKMwsGzZ9Yh6e8'
    }
  },
  methods: {
    setToken (token) {
      const date = new Date()

      document.cookie = `token=${token};expires=${new Date(
        date.getFullYear() + 1,
        date.getMonth(),
        date.getDate()
      )};path=/`
    }
  }
}
</script>
