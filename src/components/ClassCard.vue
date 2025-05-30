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
    class="transition-all-ease"
    style="transition: all 0.3s ease; max-width: 100%"
  >
    <!-- Header con imagen/icono -->
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
        style="top: 12px; right: 12px"
        variant="elevated"
      >
        {{ classInfo.difficulty }}
      </v-chip>
    </div>

    <!-- Contenido principal -->
    <v-card-text class="pa-6">
      <h3 class="text-h6 font-weight-semibold text-on-surface mb-2">{{ classInfo.name }}</h3>
      <p class="text-body-2 text-medium-emphasis mb-4" style="line-height: 1.4">
        {{ classInfo.description }}
      </p>

      <!-- Información del instructor -->
      <div
        class="d-flex align-center pa-3 mb-4 rounded-lg bg-surface-variant"
        style="background-color: rgba(var(--v-theme-surface-variant), 0.3)"
      >
        <v-avatar size="32" class="me-3">
          <v-img
            v-if="classInfo.instructor.avatar"
            :src="classInfo.instructor.avatar"
            :alt="classInfo.instructor.name"
          />
          <v-icon v-else>mdi-account</v-icon>
        </v-avatar>
        <div>
          <p class="text-body-2 font-weight-medium text-on-surface ma-0">
            {{ classInfo.instructor.name }}
          </p>
          <p class="text-caption text-medium-emphasis ma-0">
            {{ classInfo.instructor.title || 'Instructor' }}
          </p>
        </div>
      </div>

      <!-- Detalles de la clase -->
      <div class="d-flex flex-wrap ga-3 mb-4">
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

      <!-- Horarios disponibles -->
      <div v-if="classInfo.schedule?.length" class="mb-2">
        <h4 class="text-body-2 font-weight-medium text-on-surface mb-2">Próximas sesiones:</h4>
        <div class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="(session, index) in classInfo.schedule.slice(0, 3)"
            :key="index"
            variant="outlined"
            size="small"
            class="text-caption"
          >
            <v-icon start size="14">mdi-calendar</v-icon>
            {{ session.day }} {{ session.time }}
          </v-chip>
        </div>
      </div>
    </v-card-text>

    <!-- Acciones -->
    <v-card-actions class="pa-3 pt-0 border-t-thin">
      <v-btn variant="text" size="small" @click="handleViewDetails">
        <v-icon start>mdi-information</v-icon>
        Detalles
      </v-btn>

      <v-spacer />

      <v-btn
        color="primary"
        variant="elevated"
        size="small"
        @click="handleReserve"
        :disabled="classInfo.status === 'full'"
      >
        <v-icon start>{{ classInfo.status === 'full' ? 'mdi-lock' : 'mdi-calendar-plus' }}</v-icon>
        {{ classInfo.status === 'full' ? 'Completa' : 'Reservar' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
