<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>
<script>
export default { props: ["progress"] }
</script>
<style>
.progress-bar { width: 100%; background: #eee; height: 8px; border-radius: 3px; }
.progress { background: #1976d2; height: 100%; }
</style>