<template>
  <div id="app">
    <h1>VueForm Builder Demo</h1>
    <CreateAccount />
  </div>
</template>

<script>
import CreateAccount from './components/CreateAccount.vue'

export default {
  name: 'App',
  components: {
    CreateAccount,
  },
}
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 24px;
}
h1 {
  font-size: 28px;
  margin-bottom: 16px;
}
</style>