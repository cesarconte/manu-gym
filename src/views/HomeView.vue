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
  <div>
    <!-- Sección Hero -->
    <v-container
      fluid
      class="bg-gradient-primary d-flex align-center text-white"
      style="min-height: 70vh"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h1 class="text-h2 text-sm-h1 font-weight-bold mb-6">
            Bienvenido a
            <span class="text-gradient-light">Manu Gym</span>
          </h1>
          <p class="text-body-1 mb-8 mx-auto text-medium-emphasis" style="max-width: 600px">
            Tu mejor versión te está esperando. Únete a nuestra comunidad de fitness y transforma tu
            vida con nuestras instalaciones de primera clase.
          </p>
          <div class="mt-8">
            <v-btn size="large" color="primary" variant="elevated" class="me-4 mb-4">
              <v-icon start>mdi-account-plus</v-icon>
              Únete Ahora
            </v-btn>
            <v-btn size="large" color="white" variant="outlined" class="mb-4">
              <v-icon start>mdi-play-circle</v-icon>
              Ver Instalaciones
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección de Estadísticas -->
    <v-container class="py-16">
      <v-row>
        <v-col v-for="stat in stats" :key="stat.label" cols="6" md="3" class="text-center">
          <v-card variant="text" class="pa-4">
            <v-card-text>
              <div class="text-h3 font-weight-bold text-primary mb-2">{{ stat.number }}</div>
              <div class="text-body-1 text-medium-emphasis font-weight-medium">
                {{ stat.label }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección de Características -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">¿Por qué elegir Manu Gym?</h2>
          <p class="text-body-1 text-medium-emphasis mx-auto" style="max-width: 600px">
            Ofrecemos todo lo que necesitas para alcanzar tus objetivos de fitness
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="feature in features" :key="feature.title" cols="12" sm="6" md="3">
          <v-card class="h-100" elevation="2" hover rounded="xl">
            <v-card-text class="text-center">
              <v-avatar size="80" color="primary-lighten-4" class="mb-4">
                <v-icon size="40" color="primary">{{ feature.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
              <p class="text-body-2 text-medium-emphasis">{{ feature.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección de Clases Destacadas -->
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">Clases Destacadas</h2>
          <p class="text-body-1 text-medium-emphasis mx-auto" style="max-width: 600px">
            Descubre nuestras clases más populares y encuentra la perfecta para ti
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="classInfo in featuredClasses" :key="classInfo.name" cols="12" md="4">
          <ClassCard
            :class-info="classInfo"
            @reserve="handleClassReserve"
            @view-details="handleViewDetails"
          />
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn
            color="primary"
            variant="outlined"
            size="large"
            prepend-icon="mdi-calendar-multiple"
          >
            Ver Todos los Horarios
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Sección de Call to Action -->
    <v-container fluid class="py-16 bg-gradient-subtle">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-bold mb-4">¿Listo para comenzar tu transformación?</h2>
          <p class="text-body-1 text-medium-emphasis mb-8">
            Únete a nosotros hoy y descubre todo lo que puedes lograr
          </p>
          <v-btn size="x-large" color="primary" variant="elevated" class="px-8 py-4 rounded-pill">
            <v-icon start>mdi-rocket</v-icon>
            Comienza Ahora
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
