# Views (Vistas)

Esta carpeta contiene las vistas principales de la aplicación del gimnasio.

## Estructura de vistas planificadas:

### 🏠 **Páginas Principales**

- `HomeView.vue` - Página principal del gimnasio ✅
- `AboutView.vue` - Información sobre el gimnasio
- `ServicesView.vue` - Servicios y clases disponibles
- `ContactView.vue` - Información de contacto y ubicación

### 🔐 **Autenticación**

- `LoginView.vue` - Página de inicio de sesión
- `RegisterView.vue` - Página de registro
- `ForgotPasswordView.vue` - Recuperación de contraseña

### 👤 **Usuario**

- `ProfileView.vue` - Perfil del usuario
- `DashboardView.vue` - Dashboard personal
- `BookingsView.vue` - Gestión de reservas del usuario
- `MembershipView.vue` - Información de membresía

### 📅 **Clases y Reservas**

- `ClassesView.vue` - Lista de clases disponibles
- `ClassDetailView.vue` - Detalle de una clase específica
- `BookingView.vue` - Realizar nueva reserva
- `ScheduleView.vue` - Horarios del gimnasio

### 💳 **Pagos y Membresías**

- `PlansView.vue` - Planes y precios
- `PaymentView.vue` - Procesamiento de pagos
- `InvoicesView.vue` - Historial de facturación

### ⚙️ **Administración (roles admin)**

- `AdminDashboardView.vue` - Panel de administración
- `ManageUsersView.vue` - Gestión de usuarios
- `ManageClassesView.vue` - Gestión de clases
- `ReportsView.vue` - Reportes y estadísticas

### 📱 **Utilidades**

- `NotFoundView.vue` - Página 404
- `UnauthorizedView.vue` - Página 403
- `MaintenanceView.vue` - Página de mantenimiento

## Convenciones:

- Nombrar vistas con sufijo `View.vue`
- Usar `<script setup>` para la Composition API
- Incluir meta información para SEO cuando sea relevante
- Usar layouts apropiados para cada tipo de vista
- Implementar lazy loading para vistas no críticas
- Seguir estructura semántica en templates
