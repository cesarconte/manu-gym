<script setup>
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppNavigation />

  <v-main class="d-flex flex-column" style="min-height: 100%">
    <slot />
  </v-main>

  <AppFooter />
</template>
