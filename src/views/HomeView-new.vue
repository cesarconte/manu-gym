<script setup>
import { ref } from 'vue'
import ClassCard from '@/components/ClassCard.vue'

// Datos reactivos para la página principal
const features = ref([
  {
    icon: 'mdi-dumbbell',
    title: 'Equipamiento Moderno',
    description: 'Las mejores máquinas y pesas para tu entrenamiento',
  },
  {
    icon: 'mdi-account-group',
    title: 'Entrenadores Expertos',
    description: 'Personal calificado para guiarte en tu rutina',
  },
  {
    icon: 'mdi-clock-outline',
    title: 'Horarios Flexibles',
    description: 'Abierto desde las 6:00 AM hasta las 11:00 PM',
  },
  {
    icon: 'mdi-heart-pulse',
    title: 'Clases Grupales',
    description: 'Yoga, Pilates, Zumba y más actividades',
  },
])

const stats = ref([
  { number: '500+', label: 'Miembros Activos' },
  { number: '10+', label: 'Años de Experiencia' },
  { number: '24/7', label: 'Soporte' },
  { number: '15+', label: 'Clases Semanales' },
])

// Clases destacadas para mostrar los gradientes
const featuredClasses = ref([
  {
    name: 'Yoga Matutino',
    type: 'yoga',
    description: 'Comienza tu día con energía y tranquilidad',
    duration: 60,
    difficulty: 'Principiante',
    instructor: {
      name: 'Ana García',
      title: 'Instructora Certificada',
      avatar: null,
    },
    schedule: [
      { day: 'Lun', time: '07:00' },
      { day: 'Mié', time: '07:00' },
      { day: 'Vie', time: '07:00' },
    ],
    maxParticipants: 15,
    equipment: 'Mat incluido',
  },
  {
    name: 'CrossFit Intensivo',
    type: 'crossfit',
    description: 'Entrenamiento funcional de alta intensidad',
    duration: 45,
    difficulty: 'Avanzado',
    instructor: {
      name: 'Carlos Ruiz',
      title: 'Coach CrossFit Level 2',
      avatar: null,
    },
    schedule: [
      { day: 'Mar', time: '18:00' },
      { day: 'Jue', time: '18:00' },
    ],
    maxParticipants: 12,
    equipment: 'Incluido',
  },
  {
    name: 'Boxeo Avanzado',
    type: 'boxeo',
    description: 'Aprende técnicas de boxeo y mejora tu resistencia',
    duration: 55,
    difficulty: 'Intermedio',
    instructor: {
      name: 'Miguel Torres',
      title: 'Entrenador de Boxeo',
      avatar: null,
    },
    schedule: [
      { day: 'Mar', time: '20:00' },
      { day: 'Vie', time: '20:00' },
    ],
    maxParticipants: 10,
    equipment: 'Guantes y vendas incluidos',
  },
])

// Métodos para manejar eventos de las clases
const handleClassReserve = (classInfo) => {
  console.log('Reservar clase:', classInfo.name)
  // Aquí iría la lógica para reservar la clase
}

const handleViewDetails = (classInfo) => {
  console.log('Ver detalles de:', classInfo.name)
  // Aquí iría la lógica para mostrar detalles de la clase
}
</script>

<template>
  <div class="smooth-scroll">
    <!-- Sección Hero con técnicas modernas -->
    <section class="cover bg-gradient-primary-animated text-white" style="--cover-min-height: 70vh">
      <div class="cover-centered">
        <v-container class="content-container">
          <div class="stack text-center" style="--stack-space: var(--space-xl)">
            <div class="stack" style="--stack-space: var(--space-lg)">
              <h1 class="text-fluid-hero font-weight-bold animate-slide-in-up text-wrap-balance">
                Bienvenido a
                <span class="text-gradient-light">Manu Gym</span>
              </h1>
              <p
                class="text-fluid-body-large text-white text-wrap-pretty mx-auto animate-fade-in-scale"
                style="max-width: 60ch; animation-delay: 200ms; opacity: 0.9"
              >
                Tu mejor versión te está esperando. Únete a nuestra comunidad de fitness y
                transforma tu vida con nuestras instalaciones de primera clase.
              </p>
            </div>
            <div
              class="cluster"
              style="--cluster-justify: center; --cluster-space: var(--space-md)"
            >
              <v-btn
                size="x-large"
                color="white"
                variant="elevated"
                class="btn-enhanced focus-visible-enhanced animate-slide-in-up"
                style="animation-delay: 400ms"
              >
                <v-icon start>mdi-account-plus</v-icon>
                Únete Ahora
              </v-btn>
              <v-btn
                size="x-large"
                color="white"
                variant="outlined"
                class="focus-visible-enhanced animate-slide-in-up"
                style="animation-delay: 500ms"
              >
                <v-icon start>mdi-play-circle</v-icon>
                Ver Instalaciones
              </v-btn>
            </div>
          </div>
        </v-container>
      </div>
    </section>

    <!-- Sección de Estadísticas con Container Queries -->
    <section class="region bg-surface-container-low">
      <v-container class="content-container">
        <div class="stats-container">
          <div class="card-grid-adaptive stagger-animation">
            <v-card
              v-for="stat in stats"
              :key="stat.label"
              variant="elevated"
              class="stat-card text-center interactive-card h-100"
              elevation="1"
            >
              <v-card-text class="pa-6">
                <div class="stack" style="--stack-space: var(--space-sm)">
                  <div class="text-fluid-3xl font-weight-bold text-gradient-animated">
                    {{ stat.number }}
                  </div>
                  <div class="text-fluid-body font-weight-medium text-on-surface-variant">
                    {{ stat.label }}
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Sección de Características con Layout Moderno -->
    <section class="region">
      <v-container class="content-container">
        <div class="cover text-center mb-8">
          <div class="cover-centered">
            <div class="stack" style="--stack-space: var(--space-md)">
              <h2 class="text-fluid-display font-weight-bold text-wrap-balance">
                ¿Por qué elegir Manu Gym?
              </h2>
              <p
                class="text-fluid-body-large text-on-surface-variant mx-auto text-wrap-pretty"
                style="max-width: 60ch"
              >
                Ofrecemos todo lo que necesitas para alcanzar tus objetivos de fitness con las
                mejores instalaciones y el equipo más moderno
              </p>
            </div>
          </div>
        </div>

        <div class="card-grid-adaptive">
          <v-card
            v-for="feature in features"
            :key="feature.title"
            class="h-100 interactive-card"
            elevation="2"
          >
            <v-card-text class="card-content">
              <div class="stack text-center" style="--stack-space: var(--space-md)">
                <div class="frame" style="--frame-n: 1; --frame-d: 1">
                  <v-avatar
                    size="80"
                    :color="`${feature.icon.includes('dumbbell') ? 'primary' : feature.icon.includes('heart') ? 'error' : feature.icon.includes('clock') ? 'warning' : 'success'}-lighten-4`"
                    class="animate-float"
                  >
                    <v-icon
                      size="40"
                      :color="`${feature.icon.includes('dumbbell') ? 'primary' : feature.icon.includes('heart') ? 'error' : feature.icon.includes('clock') ? 'warning' : 'success'}`"
                    >
                      {{ feature.icon }}
                    </v-icon>
                  </v-avatar>
                </div>
                <div class="text-content-flow">
                  <h3 class="text-fluid-heading-3 font-weight-semibold text-wrap-balance">
                    {{ feature.title }}
                  </h3>
                  <p class="text-fluid-body text-on-surface-variant text-wrap-pretty">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </section>

    <!-- Sección de Clases Destacadas con Container Queries -->
    <section class="region bg-gradient-mesh-subtle">
      <v-container class="content-container">
        <div class="cover text-center mb-8">
          <div class="cover-centered">
            <div class="stack" style="--stack-space: var(--space-md)">
              <h2 class="text-fluid-display font-weight-bold text-wrap-balance">
                Clases Destacadas
              </h2>
              <p
                class="text-fluid-body-large text-on-surface-variant mx-auto text-wrap-pretty"
                style="max-width: 60ch"
              >
                Descubre nuestras clases más populares y encuentra la perfecta para ti. Cada clase
                está diseñada para diferentes niveles y objetivos
              </p>
            </div>
          </div>
        </div>

        <div class="card-grid-adaptive classes-container">
          <ClassCard
            v-for="classInfo in featuredClasses"
            :key="classInfo.name"
            :class-info="classInfo"
            class="class-card-item"
            @reserve="handleClassReserve"
            @view-details="handleViewDetails"
          />
        </div>

        <div
          class="cluster mt-8"
          style="--cluster-justify: center; --cluster-space: var(--space-lg)"
        >
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
            prepend-icon="mdi-calendar-multiple"
            class="btn-enhanced focus-visible-enhanced"
          >
            Ver Todos los Horarios
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Sección de Call to Action con Layout Moderno -->
    <section class="cover bg-gradient-primary-animated text-white" style="--cover-min-height: 60vh">
      <div class="cover-centered">
        <v-container class="content-container text-center">
          <div class="stack" style="--stack-space: var(--space-xl)">
            <div class="stack" style="--stack-space: var(--space-md)">
              <h2 class="text-fluid-hero font-weight-bold animate-slide-in-up text-wrap-balance">
                ¿Listo para comenzar tu transformación?
              </h2>
              <p
                class="text-fluid-body-large text-white text-wrap-pretty animate-fade-in-scale mx-auto"
                style="animation-delay: 200ms; max-width: 50ch; opacity: 0.9"
              >
                Únete a nuestra comunidad de más de 500 miembros activos y descubre todo lo que
                puedes lograr con el mejor equipo y entrenadores
              </p>
            </div>
            <div
              class="cluster"
              style="--cluster-justify: center; --cluster-space: var(--space-md)"
            >
              <v-btn
                size="x-large"
                color="white"
                variant="elevated"
                class="btn-enhanced focus-visible-enhanced animate-slide-in-up"
                style="animation-delay: 400ms"
              >
                <v-icon start>mdi-rocket</v-icon>
                Comienza Ahora
              </v-btn>
              <v-btn
                size="x-large"
                color="white"
                variant="outlined"
                class="focus-visible-enhanced animate-slide-in-up"
                style="animation-delay: 500ms"
              >
                <v-icon start>mdi-phone</v-icon>
                Contáctanos
              </v-btn>
            </div>
          </div>
        </v-container>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Estilos específicos de la vista usando técnicas de Kevin Powell */

/* Hero gradient con mesh moderno */
.hero-gradient {
  background: var(--gradient-mesh-1);
  position: relative;
  overflow: hidden;
}

.hero-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  pointer-events: none;
}

/* Estadísticas container */
.stats-container {
  container-type: inline-size;
}

/* Classes container */
.classes-container {
  container-type: inline-size;
}

/* Gradient mesh sutil para secciones */
.bg-gradient-mesh-subtle {
  background:
    radial-gradient(at 20% 80%, rgba(var(--v-theme-primary-rgb), 0.05) 0px, transparent 50%),
    radial-gradient(at 80% 20%, rgba(var(--v-theme-secondary-rgb), 0.05) 0px, transparent 50%),
    radial-gradient(at 40% 40%, rgba(var(--v-theme-tertiary-rgb), 0.05) 0px, transparent 50%);
}

/* Enhanced text gradient for light backgrounds */
.text-gradient-light {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: white; /* Fallback */
}

/* Responsive animations with reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-in-up,
  .animate-fade-in-scale,
  .animate-float {
    animation: none !important;
  }
}

/* Container queries for responsive layout */
@container (max-width: 600px) {
  .cover-centered .cluster {
    flex-direction: column !important;
    align-items: stretch !important;
  }
}

/* Enhanced focus states */
.hero-gradient .v-btn:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}

/* Print styles */
@media print {
  .hero-gradient,
  .bg-gradient-primary-animated {
    background: #333 !important;
    color: white !important;
  }

  .animate-slide-in-up,
  .animate-fade-in-scale {
    animation: none !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .text-gradient-animated,
  .text-gradient-light {
    background: none !important;
    -webkit-text-fill-color: unset !important;
    color: currentColor !important;
  }
}
</style>
