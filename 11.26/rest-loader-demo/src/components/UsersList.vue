<template>
  <div class="panel">
    <h2 class="restapi-title">Rest API</h2>
    <button class="load-btn" @click="fetchUsers" :disabled="loading">
      {{ loading ? 'Betöltés...' : 'Load Users (Rest API)' }}
    </button>    
    <div v-if="error" class="error">{{ error }}</div>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-card">
        <strong>{{ user.name }}</strong><br>
        <span>
          <span class="icon-mail">📧</span>
          {{ user.email }}
        </span><br>
        <span>
          <span class="icon-phone">📞</span>
          {{ user.phone }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      users: [],
      loading: false,
      error: null,
      progress: 0
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      this.progress = 10;
      try {
        // Progress példa hosszú lekérésnél (demó)
        setTimeout(() => { this.progress = 50 }, 1000);
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.users = response.data.slice(0, 5);
        this.progress = 100;
      } catch (err) {
        this.error = "Hiba: " + err.message;
      } finally {
        this.loading = false;
        this.progress = 0;
      }
    }
  }
};
</script>

<style>
.panel {
  margin: 32px;
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 12px;
  background: #fff;
}
.restapi-title {
  color: #e10098;
  font-size: 2rem;
  margin-bottom: 12px;
  font-weight: bold;
}
.load-btn {
  background: #e10098;
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1rem;
}
.user-card {
  background: #f6f6f6;
  border-radius: 6px;
  padding: 8px 12px;          /* Volt: 16px */
  margin-bottom: 8px;         /* Volt: 14px */
  font-size: 1em;             /* Volt: 1.1em */
}
.user-card strong {
  font-size: 1.1em;
}
.user-card span {
  font-size: 0.97em;
}
.icon-mail, .icon-phone {
  color: #e10098;
  margin-right: 5px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>