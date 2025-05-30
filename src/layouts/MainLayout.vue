<script setup>
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppNavigation />

  <v-main class="main-content">
    <slot />
  </v-main>

  <AppFooter />
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* Asegurar que el contenido principal tenga el espacio correcto */
:deep(.v-main__wrap) {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
