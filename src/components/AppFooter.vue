<script setup>
import { ref } from 'vue'

// Información del gimnasio
const gymInfo = ref({
  name: 'Manu Gym',
  address: 'Calle Principal 123, Ciudad',
  phone: '+34 123 456 789',
  email: 'info@manugym.com',
  schedule: {
    weekdays: 'Lunes a Viernes: 6:00 - 23:00',
    weekend: 'Sábados y Domingos: 8:00 - 21:00',
  },
})

// Links útiles
const quickLinks = ref([
  { title: 'Inicio', to: '/' },
  { title: 'Clases', to: '/clases' },
  { title: 'Horarios', to: '/horarios' },
  { title: 'Membresías', to: '/membresias' },
])

// Redes sociales
const socialLinks = ref([
  { icon: 'mdi-facebook', url: '#', name: 'Facebook' },
  { icon: 'mdi-instagram', url: '#', name: 'Instagram' },
  { icon: 'mdi-twitter', url: '#', name: 'Twitter' },
  { icon: 'mdi-youtube', url: '#', name: 'YouTube' },
])

// Año actual
const currentYear = new Date().getFullYear()
</script>

<template>
  <v-footer color="surface" elevation="8" class="mt-auto border-t-thin">
    <v-container>
      <v-row>
        <!-- Información del gimnasio -->
        <v-col cols="12" md="4" class="mb-4">
          <h3 class="text-h5 font-weight-bold text-on-surface mb-4 d-flex align-center">
            <v-icon color="primary" class="me-2">mdi-dumbbell</v-icon>
            {{ gymInfo.name }}
          </h3>
          <p class="text-body-2 text-medium-emphasis mb-6" style="line-height: 1.6">
            Tu mejor versión te está esperando. Únete a nuestra comunidad de fitness y transforma tu
            vida.
          </p>

          <!-- Redes sociales -->
          <div class="d-flex align-center">
            <v-btn
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              variant="text"
              icon
              size="small"
              class="me-2"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Enlaces rápidos -->
        <v-col cols="12" sm="6" md="2" class="mb-4">
          <h4 class="text-subtitle-1 font-weight-semibold text-on-surface mb-4">Enlaces Rápidos</h4>
          <v-list density="compact" class="bg-transparent pa-0">
            <v-list-item
              v-for="link in quickLinks"
              :key="link.title"
              :to="link.to"
              class="pa-1 rounded"
              min-height="auto"
            >
              <v-list-item-title class="text-body-2 text-medium-emphasis">{{
                link.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Información de contacto -->
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <h4 class="text-subtitle-1 font-weight-semibold text-on-surface mb-4">Contacto</h4>
          <div class="d-flex flex-column ga-3">
            <div class="d-flex align-start ga-2 text-body-2 text-medium-emphasis">
              <v-icon size="small">mdi-map-marker</v-icon>
              <span>{{ gymInfo.address }}</span>
            </div>
            <div class="d-flex align-start ga-2 text-body-2 text-medium-emphasis">
              <v-icon size="small">mdi-phone</v-icon>
              <a :href="`tel:${gymInfo.phone}`" class="text-decoration-none text-medium-emphasis">
                {{ gymInfo.phone }}
              </a>
            </div>
            <div class="d-flex align-start ga-2 text-body-2 text-medium-emphasis">
              <v-icon size="small">mdi-email</v-icon>
              <a
                :href="`mailto:${gymInfo.email}`"
                class="text-decoration-none text-medium-emphasis"
              >
                {{ gymInfo.email }}
              </a>
            </div>
          </div>
        </v-col>

        <!-- Horarios -->
        <v-col cols="12" md="3" class="mb-4">
          <h4 class="text-subtitle-1 font-weight-semibold text-on-surface mb-4">Horarios</h4>
          <div class="d-flex align-start ga-2 text-body-2 text-medium-emphasis">
            <v-icon size="small">mdi-clock-outline</v-icon>
            <div style="line-height: 1.4">
              <div>{{ gymInfo.schedule.weekdays }}</div>
              <div>{{ gymInfo.schedule.weekend }}</div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Copyright -->
      <v-divider class="my-4" />

      <v-row align="center">
        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis ma-0">
            © {{ currentYear }} {{ gymInfo.name }}. Todos los derechos reservados.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-end text-center text-md-end">
          <div class="d-flex align-center justify-center justify-md-end mt-2 mt-md-0">
            <a href="#" class="text-decoration-none text-body-2 text-medium-emphasis">
              Política de Privacidad
            </a>
            <span class="mx-2 text-medium-emphasis">•</span>
            <a href="#" class="text-decoration-none text-body-2 text-medium-emphasis">
              Términos de Servicio
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
