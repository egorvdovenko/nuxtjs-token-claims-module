<template>
  <div>
    Index!
    <button @click="clearToken">
      Clear token
    </button>
    <button @click="$router.push('test')">
      Test
    </button>
    <div>
      <b>claims:</b> {{ claims }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    claims () {
      return this.$tokenClaims.get(this.$nuxt.context)
    }
  },
  methods: {
    clearToken () {
      document.cookie = `token=${null};expires=${new Date(-1)};path=/`
    }
  }
}
</script>
