<template>
  <nav class="navbar">
    <button :class="{active: current==='rest'}" @click="$emit('switch','rest')">REST API</button>
    <button :class="{active: current==='graphql'}" @click="$emit('switch','graphql')">GraphQL API</button>
  </nav>
</template>
<script>
export default { props: ['current'] }
</script>