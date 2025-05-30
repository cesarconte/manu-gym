# Plugins

Esta carpeta contiene los plugins y configuraciones externas de la aplicación.

## Vuetify 3

### Configuración (`vuetify.js`)

- **Framework UI**: Vuetify 3 con Material Design 3
- **Tema personalizado**: Integrado con el sistema de diseño del gimnasio
- **Colores principales**:
  - Primary: #FF5722 (Naranja energético)
  - Secondary: #2196F3 (Azul confianza)
  - Tertiary: #4CAF50 (Verde éxito)

### Características implementadas:

- ✅ Modo claro/oscuro automático
- ✅ Sistema de colores completo con variantes
- ✅ Configuraciones por defecto para componentes
- ✅ Breakpoints responsive
- ✅ Iconos Material Design
- ✅ Accesibilidad integrada

### Uso en componentes:

```vue
<template>
  <v-btn color="primary">Botón Principal</v-btn>
  <v-card elevation="2">
    <v-card-title>Título</v-card-title>
    <v-card-text>Contenido</v-card-text>
  </v-card>
</template>
```

### Iconos disponibles:

- Usa el prefijo `mdi-` para iconos de Material Design
- Ejemplo: `mdi-dumbbell`, `mdi-account`, `mdi-home`
- Lista completa: https://materialdesignicons.com/

### Composables de Vuetify:

```javascript
import { useTheme, useDisplay } from 'vuetify'

// En setup()
const theme = useTheme()
const { mobile, mdAndUp } = useDisplay()
```

## Futuros plugins:

- `firebase.js` - Configuración de Firebase
- `pinia-persistedstate.js` - Persistencia de stores
