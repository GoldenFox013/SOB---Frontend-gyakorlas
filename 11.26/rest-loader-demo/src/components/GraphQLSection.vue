<template>
  <div class="panel">
    <h2 class="restapi-title">GraphQL API</h2>
    <button class="load-btn" @click="fetchUsersGraphQL" :disabled="loading">
      {{ loading ? 'Betöltés...' : 'Load Users (GraphQL)' }}
    </button>
     <LoadingSpinner v-if="loading"/>
<ProgressBar v-if="progress > 0 && progress < 100" :progress="progress"/>
    <div v-if="error" class="error">{{ error }}</div>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-card">
        <strong>{{ user.name }}</strong><br>
        <span><span class="icon-mail">📧</span>{{ user.email }}</span><br>
        <span><span class="icon-phone">📞</span>{{ user.phone }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"
import LoadingSpinner from "./LoadingSpinner.vue"
import ProgressBar from "./ProgressBar.vue"
export default {
  components: { LoadingSpinner, ProgressBar },  
  data() {
  return {
    users: [],
    loading: false,
    error: "",
    progress: 0
  }
},
  methods: {
    async fetchUsersGraphQL() {
      this.loading = true; this.error = ""; this.users = [];this.progress = 20;
      const query = `{
        users { data { id name username email phone } }
      }`
      try {
        setTimeout(() => { this.progress = 70 }, 500);
        const resp = await axios.post("https://graphqlzero.almansi.me/api",
          { query },
          { headers: { "Content-Type": "application/json" } }
        );
        if (resp.data.errors) throw new Error(resp.data.errors[0].message);
        this.users = resp.data.data.users.data;
      } catch (e) {
        this.error = "Hiba történt: " + e.message;
      } finally { this.loading = false;
        this.progress = 0;
       }
    }
  }
}
</script>