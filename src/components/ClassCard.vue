<script setup>
import { computed } from 'vue'

// Props del componente
const props = defineProps({
  classInfo: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && value.name && value.instructor && value.duration
    },
  },
})

// Computed para obtener el color del nivel de dificultad
const difficultyColor = computed(() => {
  switch (props.classInfo.difficulty?.toLowerCase()) {
    case 'principiante':
      return 'success'
    case 'intermedio':
      return 'warning'
    case 'avanzado':
      return 'error'
    default:
      return 'primary'
  }
})

// Computed para obtener el icono según el tipo de clase
const classIcon = computed(() => {
  const type = props.classInfo.type?.toLowerCase()
  switch (type) {
    case 'yoga':
      return 'mdi-meditation'
    case 'pilates':
      return 'mdi-human-handsup'
    case 'zumba':
      return 'mdi-music'
    case 'spinning':
      return 'mdi-bike'
    case 'crossfit':
      return 'mdi-weight-lifter'
    case 'boxeo':
      return 'mdi-boxing-glove'
    case 'natacion':
      return 'mdi-swim'
    case 'funcional':
      return 'mdi-dumbbell'
    default:
      return 'mdi-run'
  }
})

// Computed para obtener la clase de gradiente apropiada
const gradientClass = computed(() => {
  const type = props.classInfo.type?.toLowerCase()
  const availableGradients = [
    'yoga',
    'pilates',
    'zumba',
    'spinning',
    'crossfit',
    'boxeo',
    'functional',
    'natacion',
  ]

  if (availableGradients.includes(type)) {
    return `bg-gradient-${type}`
  }
  return 'bg-gradient-primary' // Fallback al gradiente primario
})

// Emits para eventos
const emit = defineEmits(['reserve', 'view-details'])

// Métodos
const handleReserve = () => {
  emit('reserve', props.classInfo)
}

const handleViewDetails = () => {
  emit('view-details', props.classInfo)
}
</script>

<template>
  <v-card
    elevation="2"
    hover
    class="responsive-card h-100 animate-fade-in-scale"
    style="
      transition:
        transform var(--duration-normal) var(--ease-out),
        box-shadow var(--duration-normal) var(--ease-out);
    "
  >
    <!-- Header con imagen/icono mejorado -->
    <div
      class="d-flex align-center justify-center position-relative overflow-hidden"
      :class="gradientClass"
      style="height: 120px"
    >
      <v-icon size="48" color="white" style="opacity: 0.9">{{ classIcon }}</v-icon>
      <v-chip
        v-if="classInfo.difficulty"
        :color="difficultyColor"
        size="small"
        class="position-absolute"
        style="top: var(--space-sm); right: var(--space-sm)"
        variant="elevated"
      >
        {{ classInfo.difficulty }}
      </v-chip>
    </div>

    <!-- Contenido principal con layout moderno -->
    <v-card-text class="card-content pa-6">
      <div class="stack" style="--stack-space: var(--space-sm)">
        <h3 class="card-title text-fluid-heading-3 font-weight-semibold text-on-surface">
          {{ classInfo.name }}
        </h3>
        <p class="card-description text-fluid-small text-medium-emphasis" style="line-height: 1.5">
          {{ classInfo.description }}
        </p>
      </div>

      <!-- Información del instructor con mejor diseño -->
      <div
        class="d-flex align-center pa-3 mb-4 rounded-lg bg-surface-variant media-wrapper"
        style="
          background-color: rgba(var(--v-theme-surface-variant), 0.3);
          margin-top: var(--space-md);
        "
      >
        <v-avatar size="32" class="me-3">
          <v-img
            v-if="classInfo.instructor.avatar"
            :src="classInfo.instructor.avatar"
            :alt="classInfo.instructor.name"
          />
          <v-icon v-else>mdi-account</v-icon>
        </v-avatar>
        <div class="stack" style="--stack-space: var(--space-xs)">
          <p class="text-fluid-small font-weight-medium text-on-surface ma-0">
            {{ classInfo.instructor.name }}
          </p>
          <p class="text-caption text-medium-emphasis ma-0">
            {{ classInfo.instructor.title || 'Instructor' }}
          </p>
        </div>
      </div>

      <!-- Detalles de la clase con cluster layout -->
      <div
        class="cluster mb-4"
        style="--cluster-space: var(--space-xs); --cluster-justify: flex-start"
      >
        <v-chip size="small" variant="tonal" class="text-caption">
          <v-icon start size="16">mdi-clock-outline</v-icon>
          {{ classInfo.duration }} min
        </v-chip>

        <v-chip v-if="classInfo.maxParticipants" size="small" variant="tonal" class="text-caption">
          <v-icon start size="16">mdi-account-group</v-icon>
          Máx. {{ classInfo.maxParticipants }} personas
        </v-chip>

        <v-chip v-if="classInfo.equipment" size="small" variant="tonal" class="text-caption">
          <v-icon start size="16">mdi-dumbbell</v-icon>
          {{ classInfo.equipment }}
        </v-chip>
      </div>

      <!-- Información adicional con técnicas modernas -->
      <div
        class="cluster mt-4"
        style="--cluster-space: var(--space-lg); --cluster-justify: space-between"
      >
        <div class="d-flex align-center">
          <v-icon size="16" class="me-2 text-primary">mdi-clock-outline</v-icon>
          <span class="text-fluid-small text-medium-emphasis">{{ classInfo.duration }} min</span>
        </div>
        <div class="d-flex align-center">
          <v-icon size="16" class="me-2 text-primary">mdi-account-group</v-icon>
          <span class="text-fluid-small text-medium-emphasis">
            Max {{ classInfo.maxParticipants || 'N/A' }}
          </span>
        </div>
      </div>

      <!-- Horarios con diseño mejorado -->
      <div class="mt-4">
        <h4 class="text-fluid-small font-weight-medium text-on-surface mb-3">Horarios</h4>
        <div class="reel" style="--reel-space: var(--space-sm)">
          <v-chip
            v-for="schedule in classInfo.schedule || []"
            :key="`${schedule.day}-${schedule.time}`"
            size="small"
            variant="outlined"
            color="primary"
            class="flex-shrink-0"
          >
            {{ schedule.day }} {{ schedule.time }}
          </v-chip>
        </div>
      </div>

      <!-- Equipamiento si está disponible -->
      <div v-if="classInfo.equipment" class="mt-4">
        <div class="d-flex align-center">
          <v-icon size="16" class="me-2 text-success">mdi-check-circle</v-icon>
          <span class="text-fluid-small text-medium-emphasis">{{ classInfo.equipment }}</span>
        </div>
      </div>
    </v-card-text>

    <!-- Acciones con mejor diseño -->
    <v-card-actions class="card-actions pa-6 pt-0">
      <div class="w-100">
        <div class="cluster" style="--cluster-space: var(--space-sm); --cluster-justify: stretch">
          <v-btn
            color="primary"
            variant="elevated"
            size="default"
            class="btn-enhanced focus-visible-enhanced flex-grow-1"
            style="min-width: 0"
            @click="handleReserve"
          >
            <v-icon start size="18">mdi-calendar-plus</v-icon>
            <span class="text-truncate">Reservar</span>
          </v-btn>
          <v-btn
            color="primary"
            variant="outlined"
            size="default"
            class="focus-visible-enhanced flex-grow-1"
            style="min-width: 0"
            @click="handleViewDetails"
          >
            <v-icon start size="18">mdi-information-outline</v-icon>
            <span class="text-truncate">Detalles</span>
          </v-btn>
        </div>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
/* Estilos específicos del componente usando técnicas de Kevin Powell */
.card-title {
  text-wrap: balance;
  overflow-wrap: break-word;
}

.card-description {
  text-wrap: pretty;
  max-width: 45ch;
}

/* Enhanced hover effects */
.responsive-card:hover .media-wrapper img,
.responsive-card:hover .media-wrapper video {
  transform: scale(1.03);
}

/* Smooth focus transitions */
.responsive-card:focus-within {
  outline: 2px solid rgba(var(--v-theme-primary), 0.5);
  outline-offset: 2px;
}

/* Container queries for responsive card behavior */
.responsive-card {
  container-type: inline-size;
}

/* Small card adjustments */
@container (max-width: 280px) {
  .card-content {
    padding: var(--space-md) !important;
  }

  .cluster {
    flex-direction: column !important;
    align-items: stretch !important;
  }

  .card-actions .cluster {
    flex-direction: column !important;
    gap: var(--space-xs) !important;
  }
}

/* Medium card adjustments */
@container (min-width: 281px) and (max-width: 400px) {
  .reel {
    flex-wrap: wrap;
    gap: var(--space-xs);
  }
}

/* Large card enhancements */
@container (min-width: 401px) {
  .card-content {
    padding: var(--space-lg) !important;
  }

  .media-wrapper {
    margin-top: var(--space-lg) !important;
  }
}

/* Animation delays for staggered entrance */
.responsive-card:nth-child(1) {
  animation-delay: 0ms;
}
.responsive-card:nth-child(2) {
  animation-delay: 100ms;
}
.responsive-card:nth-child(3) {
  animation-delay: 200ms;
}
.responsive-card:nth-child(4) {
  animation-delay: 300ms;
}
.responsive-card:nth-child(5) {
  animation-delay: 400ms;
}
.responsive-card:nth-child(6) {
  animation-delay: 500ms;
}

/* Loading skeleton state */
.responsive-card.loading {
  pointer-events: none;
}

.responsive-card.loading .card-title,
.responsive-card.loading .card-description {
  background: var(--loading-skeleton);
  color: transparent;
  border-radius: var(--radius-sm);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .responsive-card,
  .media-wrapper img,
  .media-wrapper video {
    transition: none !important;
    animation: none !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .responsive-card {
    border: 2px solid;
  }

  .v-chip {
    border-width: 2px;
  }
}

/* Print styles */
@media print {
  .card-actions {
    display: none;
  }

  .responsive-card {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #000;
  }
}
</style>
