<template>
  <div>
    403!
    <button @click="setToken">
      Set token
    </button>
    <button @click="$router.push('/')">
      Index
    </button>
  </div>
</template>

<script>
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMDA4IiwiZW1haWwiOiJ5b2Rhc2tpbGxtZUBnbWFpbC5jb20iLCJqdGkiOiIwODUxOTUyYS1mMmVlLTQwOGEtYjVlYi0yNGE1MzAzMzE5ZGQiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsInN1YmNhdCI6WyIxIiwiMiJdLCJwZXJtaXNzaW9uIjpbIkNvbnRlbnRQYWdlcyIsIkdlbmVyYWxTZXR0aW5ncyIsIkxvY2FsaXphdGlvbnMiLCJOYXZpZ2F0aW9uRWxlbWVudHMiLCJMZWFkcyIsIk5ld3MiLCJSZWdpb25zIiwiU3ViY2F0ZWdvcmllcyIsIlN1cHBvcnRBZmZpbGlhdGlvbnMiLCJTdXBwb3J0VHlwZXMiLCJTdXBwb3J0TWVhc3VyZXMiXSwibmJmIjoxNjE2NTAyNDU5LCJleHAiOjE2MTY1MDI3NTksImlhdCI6MTYxNjUwMjQ1OX0.gWmYtDScOlbGoM3PARdCxw1mnseTccPEuDkdW-HTDbs'

export default {
  methods: {
    setToken () {
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
