<template>
  <div>
    Index!
    <button @click="clearToken">
      Clear token
    </button>
    <button @click="$router.push('test')">
      Test
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clearToken () {
      document.cookie = `token=${null};expires=${new Date(-1)};path=/`
    }
  }
}
</script>
