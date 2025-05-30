# Sistema de Diseño Material Design 3 - Manu Gym

Este documento describe el sistema de diseño implementado para la aplicación del gimnasio siguiendo las especificaciones de Material Design 3.

## 🎨 **Paleta de Colores**

### Colores Primarios (Naranja Energético)

- **Propósito**: Transmitir energía, motivación y dinamismo
- **Color base**: `#FF5722` (Deep Orange)
- **Contraste**: Cumple WCAG AA (4.5:1 para texto normal)
- **Uso**: Botones principales, enlaces importantes, elementos de acción

### Colores Secundarios (Azul Confianza)

- **Propósito**: Transmitir confianza, profesionalidad y calma
- **Color base**: `#2196F3` (Blue)
- **Contraste**: Cumple WCAG AA
- **Uso**: Elementos informativos, navegación secundaria

### Colores Terciarios (Verde Salud)

- **Propósito**: Representar salud, éxito y bienestar
- **Color base**: `#4CAF50` (Green)
- **Uso**: Estados de éxito, indicadores de salud, progreso

### Colores de Estado

- **Éxito**: `#4CAF50` (Verde)
- **Advertencia**: `#FF9800` (Naranja)
- **Error**: `#F44336` (Rojo)
- **Información**: `#2196F3` (Azul)

## 🌙 **Soporte de Temas**

### Modo Claro

- Fondo principal: `#FFFFFF`
- Superficie: `#FFFFFF`
- Texto sobre fondo: `#212121`

### Modo Oscuro

- Fondo principal: `#121212`
- Superficie: `#121212`
- Texto sobre fondo: `#E0E0E0`

### Cambio Automático

- Detecta preferencia del sistema (`prefers-color-scheme`)
- Soporte para forzar tema con `data-theme="light|dark"`

## 📏 **Sistema de Espaciado**

Basado en unidades de 4px para consistencia:

```css
--spacing-1: 4px /* xs */ --spacing-2: 8px /* sm */ --spacing-4: 16px /* md */ --spacing-6: 24px
  /* lg */ --spacing-8: 32px /* xl */;
```

## 🔤 **Tipografía**

### Fuentes

- **Primaria**: Roboto (Material Design estándar)
- **Fallback**: Sistema nativo (-apple-system, BlinkMacSystemFont, etc.)

### Tamaños

- **xs**: 12px - Texto muy pequeño, labels
- **sm**: 14px - Texto de interfaz
- **base**: 16px - Texto principal
- **lg**: 18px - Subtítulos
- **xl**: 20px - Títulos pequeños
- **2xl**: 24px - Títulos medianos
- **3xl**: 30px - Títulos grandes

### Pesos

- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## 🔘 **Componentes**

### Botones

- **Primario** (`.btn-primary`): Acciones principales
- **Secundario** (`.btn-secondary`): Acciones secundarias, outlined
- **Terciario** (`.btn-tertiary`): Acciones sutiles, solo texto
- **FAB** (`.btn-fab`): Acción flotante principal

### Formularios

- Inputs con bordes redondeados
- Soporte para etiquetas flotantes
- Estados de focus con color primario
- Validación visual integrada

### Cards

- Elevación sutil con sombras
- Bordes redondeados (12px)
- Hover states interactivos
- Estructura: header, body, footer

## 🎯 **Accesibilidad**

### Contraste

- **Texto normal**: Mínimo 4.5:1 (WCAG AA)
- **Texto grande**: Mínimo 3:1 (WCAG AA)
- **Soporte para alto contraste**: `prefers-contrast: high`

### Navegación por Teclado

- Focus visible en todos los elementos interactivos
- Outline personalizado con color primario
- Respeta `prefers-reduced-motion`

### Lectores de Pantalla

- Clase `.sr-only` para contenido solo para lectores
- Estructura semántica HTML5
- Roles ARIA cuando sea necesario

## 📱 **Responsive Design**

### Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

### Contenedores

- `.container`: 1200px max-width
- `.container-sm`: 640px max-width
- `.container-lg`: 1400px max-width
- `.container-fluid`: 100% width

## 🎨 **Elevaciones (Sombras)**

Sistema de 5 niveles basado en Material Design 3:

- **Nivel 0**: Sin sombra (elementos planos)
- **Nivel 1**: Sombra sutil (cards básicas)
- **Nivel 2**: Sombra media (cards elevadas)
- **Nivel 3**: Sombra pronunciada (modales)
- **Nivel 4**: Sombra fuerte (elementos flotantes)
- **Nivel 5**: Sombra máxima (overlays)

## 🚀 **Uso Recomendado**

1. **Usa variables CSS**: Siempre utiliza las variables definidas en lugar de valores hardcodeados
2. **Consistencia**: Mantén el uso de espaciados, colores y tipografía consistente
3. **Accesibilidad**: Verifica el contraste y la navegación por teclado
4. **Performance**: Las transiciones están optimizadas para 60fps
5. **Mantenibilidad**: El sistema es modular y fácil de actualizar

## 📋 **Próximas Mejoras**

- [ ] Integración con Vuetify 3 (opcional)
- [ ] Más variantes de componentes
- [ ] Sistema de iconografía
- [ ] Animaciones avanzadas
- [ ] Temas personalizables por usuario

## 🧩 **Integración con Vuetify 3**

### Framework UI

- **Versión**: Vuetify 3.8.7
- **Arquitectura**: Composition API
- **Iconos**: Material Design Icons (@mdi/font)

### Configuración del Tema

El sistema de diseño está completamente integrado con Vuetify 3 a través del archivo `src/plugins/vuetify.js`:

```javascript
// Colores principales integrados
primary: '#FF5722',        // Naranja energético
secondary: '#2196F3',      // Azul confianza
tertiary: '#4CAF50',       // Verde éxito
```

### Componentes Personalizados

#### AppNavigation

- Barra de navegación responsive
- Toggle de tema claro/oscuro integrado
- Navigation drawer para móviles
- Logo con gradiente del sistema de colores

#### AppFooter

- Footer informativo y completo
- Información de contacto del gimnasio
- Enlaces rápidos a secciones principales
- Redes sociales integradas

#### MainLayout

- Layout principal que envuelve toda la aplicación
- Estructura flex sticky footer
- Integración perfecta con v-app de Vuetify

### Breakpoints Responsive

```javascript
xs: 0,      // Móviles pequeños
sm: 600,    // Móviles grandes
md: 960,    // Tablets
lg: 1280,   // Desktop
xl: 1920,   // Desktop grande
xxl: 2560   // Ultrawide
```

### Uso en Componentes

```vue
<template>
  <!-- Botones con colores del sistema -->
  <v-btn color="primary">Acción Principal</v-btn>
  <v-btn color="secondary">Acción Secundaria</v-btn>

  <!-- Cards con elevación del sistema -->
  <v-card elevation="2">
    <v-card-title>Título</v-card-title>
    <v-card-text>Contenido</v-card-text>
  </v-card>

  <!-- Iconos Material Design -->
  <v-icon>mdi-dumbbell</v-icon>
  <v-icon>mdi-account-group</v-icon>
</template>
```

### Composables de Vuetify

```javascript
import { useTheme, useDisplay } from 'vuetify'

// Control de tema
const theme = useTheme()
theme.global.name.value = 'dark'

// Responsive helpers
const { mobile, mdAndUp } = useDisplay()
```

## ✅ **Estado Actual de Implementación**

### Completado

- ✅ Sistema de colores Material Design 3
- ✅ Soporte para modo claro/oscuro
- ✅ Variables CSS globales
- ✅ Biblioteca de componentes base
- ✅ Integración completa con Vuetify 3
- ✅ Navegación responsive
- ✅ Layout principal funcional
- ✅ Página de inicio con componentes de Vuetify

### En Desarrollo

- 🔄 Vistas específicas del gimnasio
- 🔄 Componentes especializados (ClassCard, TrainerCard)
- 🔄 Formularios de contacto y registro

### Próximos Pasos

- ⏳ Integración con Firebase
- ⏳ Sistema de autenticación
- ⏳ Dashboard de usuario
- ⏳ Panel de administración
