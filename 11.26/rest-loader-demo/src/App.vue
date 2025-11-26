<template>
  <Navbar :current="currentView" @switch="switchView"/>
  <RestApiSection v-if="currentView==='rest'"/>
  <GraphQLSection v-else/>
</template>
<script>
import Navbar from './components/Navbar.vue'
import RestApiSection from './components/RestApiSection.vue'
import GraphQLSection from './components/GraphQLSection.vue'
export default {
  components: { Navbar, RestApiSection, GraphQLSection },
  data() { return { currentView: 'rest' } },
  methods: { switchView(view){ this.currentView = view } }
}
</script>