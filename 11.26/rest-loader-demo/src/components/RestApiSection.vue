<template>
  <div class="panel">
    <h2 class="restapi-title">Rest API</h2>
    <button class="load-btn" @click="fetchUsers" :disabled="loading">
      {{ loading ? 'Betöltés...' : 'Load Users (Rest API)' }}
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
import LoadingSpinner from "./LoadingSpinner.vue";
import ProgressBar from "./ProgressBar.vue";
export default {
    components: { LoadingSpinner, ProgressBar },
  data() {
    return { users: [], loading: false, error: "" }
  },
  methods: {
    async fetchUsers() {
      this.loading = true; this.error = "";
      try {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.users = resp.data.slice(0, 5);
      } catch (e) {
        this.error = "Hiba történt: " + e.message;
      } finally {
        this.loading = false;
        this.progress = 0;   // ez eltünteti a progress bart
      }
    }
  }
}
</script>