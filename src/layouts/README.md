# Layouts

Esta carpeta contiene los layouts reutilizables de la aplicación.

## MainLayout.vue

Layout principal de la aplicación que incluye:

### Componentes integrados:

- **AppNavigation**: Barra de navegación superior con menú responsive
- **AppFooter**: Footer con información del gimnasio y enlaces

### Características:

- ✅ Navegación responsive (desktop/mobile)
- ✅ Toggle de tema claro/oscuro
- ✅ Menú drawer para móviles
- ✅ Footer informativo con contacto y redes sociales
- ✅ Estructura flex para contenido pegajoso

### Uso:

```vue
<MainLayout>
  <router-view />
</MainLayout>
```

### Estructura:

```
┌─────────────────────────┐
│     AppNavigation       │
├─────────────────────────┤
│                         │
│     Contenido           │
│     (slot)              │
│                         │
├─────────────────────────┤
│     AppFooter           │
└─────────────────────────┘
```

## Futuros layouts:

- `AuthLayout.vue` - Para páginas de login/registro
- `AdminLayout.vue` - Para panel de administración
- `EmptyLayout.vue` - Para páginas sin navegación
