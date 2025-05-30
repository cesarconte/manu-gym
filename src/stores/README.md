# Stores (Pinia)

Esta carpeta contiene las stores de Pinia para el manejo del estado global de la aplicación del gimnasio.

## Estructura de stores planificadas:

### 🔐 **Auth Store**

- `useAuthStore` - Manejo de autenticación de usuarios
- Estado: usuario actual, estado de login, permisos
- Acciones: login, logout, registro, recuperación de contraseña

### 👥 **Users Store**

- `useUsersStore` - Gestión de usuarios y perfiles
- Estado: lista de usuarios, perfil actual, roles
- Acciones: CRUD de usuarios, actualización de perfiles

### 🏋️ **Gym Store**

- `useGymStore` - Información general del gimnasio
- Estado: información del gimnasio, horarios, servicios
- Acciones: obtener información, actualizar datos

### 📅 **Classes Store**

- `useClassesStore` - Gestión de clases y actividades
- Estado: clases disponibles, horarios, instructores
- Acciones: CRUD de clases, gestión de horarios

### 📋 **Bookings Store**

- `useBookingsStore` - Sistema de reservas
- Estado: reservas del usuario, disponibilidad
- Acciones: crear/cancelar reservas, verificar disponibilidad

### 💳 **Payments Store**

- `usePaymentsStore` - Gestión de pagos y membresías
- Estado: historial de pagos, membresías activas
- Acciones: procesar pagos, gestionar membresías

### 🔧 **UI Store**

- `useUIStore` - Estado de la interfaz de usuario
- Estado: loading, notificaciones, tema, navegación
- Acciones: mostrar/ocultar elementos, cambiar tema

## Convenciones:

- Usar la Composition API con `defineStore()`
- Nombrar stores con el prefijo `use` y sufijo `Store`
- Separar estado, getters y acciones claramente
- Documentar cada store con comentarios
- Manejar errores de forma consistente
