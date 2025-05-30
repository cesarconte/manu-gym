<script setup>
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <v-app>
    <MainLayout>
      <RouterView />
    </MainLayout>
  </v-app>
</template>

<style scoped>
/* Los estilos globales están en assets/main.css */
</style>
