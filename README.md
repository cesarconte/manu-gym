# 🏋️ Manu Gym - Aplicación Web

Una aplicación web moderna y completa para la gestión de un gimnasio, desarrollada con **Vue 3 + Vuetify 3 + Composition API**, siguiendo las mejores prácticas de desarrollo y un sistema de diseño Material Design 3.

## ✨ **Características Principales**

- 🎨 **Diseño Material Design 3** con tema personalizado
- 📱 **Responsive Design** - Funciona perfecto en móvil, tablet y desktop
- 🌙 **Modo Claro/Oscuro** automático y manual
- ⚡ **Vue 3 + Composition API** para máximo rendimiento
- 🎯 **Vuetify 3** con componentes modernos
- 🔥 **Vite** para desarrollo ultrarrápido
- ♿ **Accesibilidad** siguiendo estándares WCAG AA
- 📏 **TypeScript ready** con JSConfig

## 🎨 **Sistema de Diseño**

### Paleta de Colores

- **Primario**: `#FF5722` (Naranja energético)
- **Secundario**: `#2196F3` (Azul confianza)
- **Terciario**: `#4CAF50` (Verde salud)

### Arquitectura Visual

- Material Design 3 con personalización para gimnasio
- Sistema de spacing de 10 niveles (4px base)
- Tipografía Roboto con 8 tamaños
- Elevaciones y sombras consistentes
- Iconos Material Design Icons

Ver documentación completa en [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)

## 🚀 **Estado Actual**

### ✅ Completado

- [x] **Configuración base** del proyecto Vue 3
- [x] **Sistema de diseño** Material Design 3 completo
- [x] **Integración Vuetify 3** con Composition API
- [x] **Navegación responsive** con drawer móvil
- [x] **Layout principal** con header y footer
- [x] **Página de inicio** con secciones del gimnasio
- [x] **Toggle de tema** claro/oscuro
- [x] **Estructura de carpetas** escalable

### 🔄 En Desarrollo

- [ ] Vistas específicas (Clases, Horarios, Membresías)
- [ ] Componentes especializados (ClassCard, TrainerCard)
- [ ] Formularios de contacto y registro

### ⏳ Próximos Pasos

- [ ] Integración con Firebase
- [ ] Sistema de autenticación
- [ ] Dashboard de usuario
- [ ] Panel de administración

## 🛠️ **Tecnologías**

### Frontend

- **Vue 3** - Framework JavaScript progresivo
- **Vuetify 3** - Biblioteca de componentes Material Design
- **Vue Router 4** - Enrutamiento oficial de Vue
- **Pinia** - Store management moderno
- **Vite** - Build tool ultrarrápido

### Desarrollo

- **ESLint** - Linter JavaScript/Vue
- **Prettier** - Formatter de código
- **Vitest** - Testing unitario
- **Playwright** - Testing E2E

### Diseño

- **Material Design 3** - Sistema de diseño de Google
- **Material Design Icons** - Biblioteca de iconos
- **CSS Custom Properties** - Variables CSS modernas

## 🚀 **Instalación y Uso**

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Configuración del Proyecto

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd manu-gym

# Instalar dependencias
npm install

# Desarrollo con hot-reload
npm run dev

# Build para producción
npm run build

# Testing unitario
npm run test:unit

# Testing E2E
npm run test:e2e

# Linting y formato
npm run lint
npm run format
```

### Acceso Local

- **Desarrollo**: http://localhost:5173
- **Vista previa**: npm run preview

## 📁 **Estructura del Proyecto**

```
src/
├── assets/          # Estilos globales y recursos
├── components/      # Componentes reutilizables
├── composables/     # Lógica reactiva reutilizable
├── layouts/         # Layouts de página
├── middleware/      # Middleware de router
├── plugins/         # Plugins (Vuetify, Firebase)
├── router/          # Configuración de rutas
├── stores/          # Estados globales (Pinia)
└── views/           # Páginas/vistas principales
```

## 📖 **Documentación**

- [`BASES.md`](./BASES.md) - Fundamentos y arquitectura
- [`BUENAS_PRÁCTICAS.md`](./BUENAS_PRÁCTICAS.md) - Estándares de código
- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) - Sistema de diseño completo

## 🤝 **Contribución**

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 **Licencia**

Este proyecto está bajo la Licencia MIT - ver [`LICENSE`](./LICENSE) para detalles.

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
