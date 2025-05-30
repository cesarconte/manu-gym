/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  // Agregar soporte para gradientes globales
  treeShakable: true,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          // Colores principales del sistema de diseño del gimnasio
          primary: '#FF5722', // Naranja energético
          'primary-darken-1': '#E64A19',
          'primary-lighten-1': '#FF7043',
          'primary-lighten-2': '#FF8A65',
          'primary-lighten-3': '#FFAB91',
          'primary-lighten-4': '#FFCCBC',
          'primary-lighten-5': '#FFF3E0',

          secondary: '#2196F3', // Azul confianza
          'secondary-darken-1': '#1976D2',
          'secondary-lighten-1': '#42A5F5',
          'secondary-lighten-2': '#64B5F6',
          'secondary-lighten-3': '#90CAF9',
          'secondary-lighten-4': '#BBDEFB',
          'secondary-lighten-5': '#E3F2FD',

          tertiary: '#4CAF50', // Verde éxito
          'tertiary-darken-1': '#388E3C',
          'tertiary-lighten-1': '#66BB6A',
          'tertiary-lighten-2': '#81C784',
          'tertiary-lighten-3': '#A5D6A7',
          'tertiary-lighten-4': '#C8E6C9',
          'tertiary-lighten-5': '#E8F5E8',

          accent: '#FF9800', // Naranja accent
          error: '#F44336', // Rojo error
          warning: '#FF9800', // Naranja warning
          info: '#2196F3', // Azul info
          success: '#4CAF50', // Verde success

          // Colores de superficie
          background: '#FAFAFA',
          surface: '#FFFFFF',
          'surface-variant': '#F5F5F5',
          'on-background': '#1C1B1F',
          'on-surface': '#1C1B1F',
          'on-surface-variant': '#49454F',
          outline: '#79747E',
          'outline-variant': '#CAC4D0',
        },
      },
      dark: {
        colors: {
          // Colores principales para modo oscuro
          primary: '#FF7043', // Naranja más suave para dark mode
          'primary-darken-1': '#FF5722',
          'primary-lighten-1': '#FF8A65',
          'primary-lighten-2': '#FFAB91',
          'primary-lighten-3': '#FFCCBC',
          'primary-lighten-4': '#FFE0B2',
          'primary-lighten-5': '#FFF3E0',

          secondary: '#64B5F6', // Azul más suave para dark mode
          'secondary-darken-1': '#42A5F5',
          'secondary-lighten-1': '#90CAF9',
          'secondary-lighten-2': '#BBDEFB',
          'secondary-lighten-3': '#E1F5FE',
          'secondary-lighten-4': '#E3F2FD',
          'secondary-lighten-5': '#F3F9FF',

          tertiary: '#81C784', // Verde más suave para dark mode
          'tertiary-darken-1': '#66BB6A',
          'tertiary-lighten-1': '#A5D6A7',
          'tertiary-lighten-2': '#C8E6C9',
          'tertiary-lighten-3': '#E8F5E8',
          'tertiary-lighten-4': '#F1F8E9',
          'tertiary-lighten-5': '#F9FBE7',

          accent: '#FFB74D',
          error: '#EF5350',
          warning: '#FFB74D',
          info: '#64B5F6',
          success: '#81C784',

          // Colores de superficie para modo oscuro
          background: '#121212',
          surface: '#1E1E1E',
          'surface-variant': '#2C2C2C',
          'on-background': '#E6E1E5',
          'on-surface': '#E6E1E5',
          'on-surface-variant': '#CAC4D0',
          outline: '#938F99',
          'outline-variant': '#49454F',
        },
      },
    },
  },
  defaults: {
    // Configuraciones por defecto para componentes de Vuetify
    VBtn: {
      style: 'text-transform: none;', // Sin mayúsculas automáticas
      ripple: true,
    },
    VCard: {
      elevation: 2,
    },
    VTextField: {
      variant: 'outlined',
      color: 'primary',
    },
    VTextarea: {
      variant: 'outlined',
      color: 'primary',
    },
    VSelect: {
      variant: 'outlined',
      color: 'primary',
    },
    VAutocomplete: {
      variant: 'outlined',
      color: 'primary',
    },
    VCombobox: {
      variant: 'outlined',
      color: 'primary',
    },
    VFileInput: {
      variant: 'outlined',
      color: 'primary',
    },
    VSwitch: {
      color: 'primary',
    },
    VCheckbox: {
      color: 'primary',
    },
    VRadio: {
      color: 'primary',
    },
    VSlider: {
      color: 'primary',
    },
    VRangeSlider: {
      color: 'primary',
    },
    VProgressLinear: {
      color: 'primary',
    },
    VProgressCircular: {
      color: 'primary',
    },
    VChip: {
      size: 'default',
    },
    VAvatar: {
      size: 'default',
    },
    VTooltip: {
      openDelay: 300,
    },
  },
  display: {
    // Configuración responsive basada en Material Design
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
})
