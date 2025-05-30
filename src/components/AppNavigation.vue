<script setup>
import { ref } from 'vue'
import { useDisplay, useTheme } from 'vuetify'

// Composables de Vuetify
const { mobile } = useDisplay()
const theme = useTheme()

// Estado del drawer en móvil
const drawer = ref(false)

// Navegación principal
const navigationItems = ref([
  { title: 'Inicio', icon: 'mdi-home', to: '/' },
  { title: 'Clases', icon: 'mdi-dumbbell', to: '/clases' },
  { title: 'Horarios', icon: 'mdi-clock-outline', to: '/horarios' },
  { title: 'Membresías', icon: 'mdi-card-account-details', to: '/membresias' },
  { title: 'Entrenadores', icon: 'mdi-account-group', to: '/entrenadores' },
  { title: 'Contacto', icon: 'mdi-phone', to: '/contacto' },
])

// Toggle del tema
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <!-- App Bar -->
  <v-app-bar :elevation="2" color="surface" scroll-behavior="elevate">
    <!-- Menu button para móvil -->
    <v-app-bar-nav-icon v-if="mobile" @click="drawer = !drawer" />

    <!-- Logo -->
    <v-app-bar-title class="d-flex align-center text-h6 font-weight-bold">
      <v-icon size="32" color="primary" class="me-2">mdi-dumbbell</v-icon>
      <span class="text-gradient-primary">Manu Gym</span>
    </v-app-bar-title>

    <v-spacer />

    <!-- Navegación en desktop -->
    <template v-if="!mobile">
      <v-btn
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        variant="text"
        class="mx-1 text-none font-weight-medium"
      >
        <v-icon start>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </template>

    <!-- Toggle de tema -->
    <v-btn @click="toggleTheme" icon variant="text" size="small">
      <v-icon>{{
        theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
      }}</v-icon>
    </v-btn>

    <!-- Botón de registro -->
    <v-btn color="primary" variant="elevated" class="ms-2" :size="mobile ? 'small' : 'default'">
      <v-icon start>mdi-account-plus</v-icon>
      {{ mobile ? '' : 'Únete' }}
    </v-btn>
  </v-app-bar>

  <!-- Navigation Drawer para móvil -->
  <v-navigation-drawer v-model="drawer" temporary location="left" width="280">
    <!-- Header del drawer -->
    <v-list-item class="pa-4 bg-gradient-subtle">
      <template #prepend>
        <v-avatar size="40" color="primary">
          <v-icon color="white">mdi-dumbbell</v-icon>
        </v-avatar>
      </template>
      <v-list-item-title class="font-weight-bold"> Manu Gym </v-list-item-title>
      <v-list-item-subtitle> Tu gimnasio de confianza </v-list-item-subtitle>
    </v-list-item>

    <v-divider />

    <!-- Items de navegación -->
    <v-list nav>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :to="item.to"
        @click="drawer = false"
        rounded="xl"
        class="ma-2"
      >
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-spacer />

    <!-- Footer del drawer -->
    <template #append>
      <v-divider />
      <v-list-item class="pa-2">
        <v-btn @click="toggleTheme" variant="text" block>
          <v-icon start>{{
            theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
          }}</v-icon>
          {{ theme.global.current.value.dark ? 'Modo Claro' : 'Modo Oscuro' }}
        </v-btn>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>
