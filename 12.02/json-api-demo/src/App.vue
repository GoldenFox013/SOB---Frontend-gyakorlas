<template>
<div>
<nav class="bg-gray-200 px-6 py-3 flex space-x-4">
<router-link to="/" class="text-blue-600 hover:underline">
Főoldal
</router-link>
<router-link to="/adatok" class="text-blue-600 hover:underline">
Adatok
</router-link>
</nav>
<router-view />
</div>
</template>