<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppCardlist from '@/components/AppCardlist.vue'
</script>

<template>
  <!-- Здесь Header -->
  <AppHeader />

  <!-- Здесь CardList -->
  <AppCardlist />
</template>

<style>
@font-face {
  font-family: 'SF Pro Display';
  src: url('@/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
}

.app {
  max-width: 390px;
  min-height: 100vh;
  background: linear-gradient(169.61deg, #2e3358 2.83%, #1c1b33 94.85%);
  margin: 0 auto;
  z-index: -1;
}
</style>
