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
  <v-footer class="app-footer" color="surface" elevation="8">
    <v-container>
      <v-row>
        <!-- Información del gimnasio -->
        <v-col cols="12" md="4" class="mb-4">
          <div class="footer-section">
            <h3 class="footer-title">
              <v-icon color="primary" class="me-2">mdi-dumbbell</v-icon>
              {{ gymInfo.name }}
            </h3>
            <p class="footer-description">
              Tu mejor versión te está esperando. Únete a nuestra comunidad de fitness y transforma
              tu vida.
            </p>

            <!-- Redes sociales -->
            <div class="social-links">
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
          </div>
        </v-col>

        <!-- Enlaces rápidos -->
        <v-col cols="12" sm="6" md="2" class="mb-4">
          <div class="footer-section">
            <h4 class="footer-subtitle">Enlaces Rápidos</h4>
            <v-list class="footer-list" density="compact">
              <v-list-item
                v-for="link in quickLinks"
                :key="link.title"
                :to="link.to"
                class="footer-link"
              >
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>

        <!-- Información de contacto -->
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <div class="footer-section">
            <h4 class="footer-subtitle">Contacto</h4>
            <div class="contact-info">
              <div class="contact-item">
                <v-icon size="small" class="me-2">mdi-map-marker</v-icon>
                <span>{{ gymInfo.address }}</span>
              </div>
              <div class="contact-item">
                <v-icon size="small" class="me-2">mdi-phone</v-icon>
                <a :href="`tel:${gymInfo.phone}`">{{ gymInfo.phone }}</a>
              </div>
              <div class="contact-item">
                <v-icon size="small" class="me-2">mdi-email</v-icon>
                <a :href="`mailto:${gymInfo.email}`">{{ gymInfo.email }}</a>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Horarios -->
        <v-col cols="12" md="3" class="mb-4">
          <div class="footer-section">
            <h4 class="footer-subtitle">Horarios</h4>
            <div class="schedule-info">
              <div class="schedule-item">
                <v-icon size="small" class="me-2">mdi-clock-outline</v-icon>
                <div>
                  <div class="schedule-text">{{ gymInfo.schedule.weekdays }}</div>
                  <div class="schedule-text">{{ gymInfo.schedule.weekend }}</div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Copyright -->
      <v-divider class="my-4" />

      <v-row align="center">
        <v-col cols="12" md="6">
          <p class="copyright">
            © {{ currentYear }} {{ gymInfo.name }}. Todos los derechos reservados.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-end">
          <div class="footer-links">
            <a href="#" class="footer-link-inline">Política de Privacidad</a>
            <span class="mx-2">•</span>
            <a href="#" class="footer-link-inline">Términos de Servicio</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.app-footer {
  margin-top: auto;
  border-top: 1px solid rgba(var(--v-theme-outline), 0.12);
}

.footer-section {
  height: 100%;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.footer-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 1rem;
}

.footer-description {
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  align-items: center;
}

.footer-list {
  background: transparent;
  padding: 0;
}

.footer-link {
  padding: 0.25rem 0;
  min-height: auto;
}

.footer-link :deep(.v-list-item-title) {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-link:hover :deep(.v-list-item-title) {
  color: rgb(var(--v-theme-primary));
}

.contact-info,
.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item,
.schedule-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.875rem;
}

.contact-item a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: rgb(var(--v-theme-primary));
}

.schedule-text {
  line-height: 1.4;
}

.copyright {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.875rem;
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-link-inline {
  color: rgb(var(--v-theme-on-surface-variant));
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-link-inline:hover {
  color: rgb(var(--v-theme-primary));
}

/* Responsive */
@media (max-width: 960px) {
  .footer-links {
    justify-content: center;
    margin-top: 0.5rem;
  }
}
</style>
