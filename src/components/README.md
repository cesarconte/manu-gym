# Componentes

Esta carpeta contiene los componentes reutilizables de la aplicación.

## Componentes actuales:

### AppNavigation.vue

Barra de navegación principal de la aplicación.

**Características:**

- ✅ Responsive (desktop/mobile)
- ✅ Navigation drawer para móviles
- ✅ Toggle de tema claro/oscuro
- ✅ Logo animado con gradiente
- ✅ Iconos Material Design
- ✅ Estados activos para rutas

**Props:** Ninguno
**Emits:** Ninguno

**Uso:**

```vue
<AppNavigation />
```

### AppFooter.vue

Footer informativo con datos del gimnasio.

**Características:**

- ✅ Información de contacto
- ✅ Enlaces rápidos
- ✅ Redes sociales
- ✅ Horarios del gimnasio
- ✅ Copyright dinámico
- ✅ Responsive design

**Props:** Ninguno
**Emits:** Ninguno

**Uso:**

```vue
<AppFooter />
```

## Futuros componentes:

### UI Base

- `BaseButton.vue` - Botón personalizado
- `BaseCard.vue` - Tarjeta con estilos del gimnasio
- `BaseInput.vue` - Input personalizado
- `BaseModal.vue` - Modal reutilizable

### Específicos del Gimnasio

- `ClassCard.vue` - Tarjeta de clase
- `TrainerCard.vue` - Tarjeta de entrenador
- `MembershipCard.vue` - Tarjeta de membresía
- `ScheduleTable.vue` - Tabla de horarios
- `ContactForm.vue` - Formulario de contacto

### Estructura recomendada:

```
components/
├── base/           # Componentes UI básicos
├── forms/          # Componentes de formularios
├── navigation/     # Componentes de navegación
├── cards/          # Componentes tipo card
└── common/         # Componentes comunes
```
