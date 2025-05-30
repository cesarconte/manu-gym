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
  <v-card class="class-card" elevation="2" hover>
    <!-- Header con imagen/icono -->
    <div class="class-header" :class="gradientClass">
      <v-icon size="48" color="white" class="class-icon">{{ classIcon }}</v-icon>
      <v-chip
        v-if="classInfo.difficulty"
        :color="difficultyColor"
        size="small"
        class="difficulty-chip"
        variant="elevated"
      >
        {{ classInfo.difficulty }}
      </v-chip>
    </div>

    <!-- Contenido principal -->
    <v-card-text class="class-content">
      <div class="class-info">
        <h3 class="class-name">{{ classInfo.name }}</h3>
        <p class="class-description">{{ classInfo.description }}</p>

        <!-- Información del instructor -->
        <div class="instructor-info">
          <v-avatar size="32" class="me-2">
            <v-img
              v-if="classInfo.instructor.avatar"
              :src="classInfo.instructor.avatar"
              :alt="classInfo.instructor.name"
            />
            <v-icon v-else>mdi-account</v-icon>
          </v-avatar>
          <div>
            <p class="instructor-name">{{ classInfo.instructor.name }}</p>
            <p class="instructor-title">{{ classInfo.instructor.title || 'Instructor' }}</p>
          </div>
        </div>

        <!-- Detalles de la clase -->
        <div class="class-details">
          <div class="detail-item">
            <v-icon size="16" class="me-1">mdi-clock-outline</v-icon>
            <span>{{ classInfo.duration }} min</span>
          </div>

          <div v-if="classInfo.maxParticipants" class="detail-item">
            <v-icon size="16" class="me-1">mdi-account-group</v-icon>
            <span>Máx. {{ classInfo.maxParticipants }} personas</span>
          </div>

          <div v-if="classInfo.equipment" class="detail-item">
            <v-icon size="16" class="me-1">mdi-dumbbell</v-icon>
            <span>{{ classInfo.equipment }}</span>
          </div>
        </div>

        <!-- Horarios disponibles -->
        <div v-if="classInfo.schedule?.length" class="class-schedule">
          <h4 class="schedule-title">Próximas sesiones:</h4>
          <div class="schedule-chips">
            <v-chip
              v-for="(session, index) in classInfo.schedule.slice(0, 3)"
              :key="index"
              variant="outlined"
              size="small"
              class="schedule-chip"
            >
              <v-icon start size="14">mdi-calendar</v-icon>
              {{ session.day }} {{ session.time }}
            </v-chip>
          </div>
        </div>
      </div>
    </v-card-text>

    <!-- Acciones -->
    <v-card-actions class="class-actions">
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

<style scoped>
.class-card {
  max-width: 100%;
  transition: all 0.3s ease;
}

.class-card:hover {
  transform: translateY(-2px);
}

/* Header de la clase */
.class-header {
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.class-icon {
  opacity: 0.9;
}

.difficulty-chip {
  position: absolute;
  top: 12px;
  right: 12px;
}

/* Contenido */
.class-content {
  padding: 1.5rem;
}

.class-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.5rem;
}

.class-description {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

/* Información del instructor */
.instructor-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgba(var(--v-theme-surface-variant), 0.3);
  border-radius: 8px;
}

.instructor-name {
  font-weight: 500;
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
}

.instructor-title {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-on-surface-variant));
  margin: 0;
}

/* Detalles de la clase */
.class-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: rgb(var(--v-theme-on-surface-variant));
  background-color: rgba(var(--v-theme-surface-variant), 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

/* Horarios */
.class-schedule {
  margin-bottom: 0.5rem;
}

.schedule-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.5rem;
}

.schedule-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.schedule-chip {
  font-size: 0.75rem;
}

/* Acciones */
.class-actions {
  padding: 0.75rem 1.5rem;
  border-top: 1px solid rgba(var(--v-theme-outline), 0.12);
}

/* Responsive */
@media (max-width: 600px) {
  .class-header {
    height: 100px;
  }

  .class-content {
    padding: 1rem;
  }

  .class-actions {
    padding: 0.75rem 1rem;
  }
}
</style>
