import { vi } from 'vitest'
import { config } from '@vue/test-utils'

// Mock de archivos CSS y otros assets
vi.mock('*.css', () => ({}))
vi.mock('*.scss', () => ({}))
vi.mock('*.png', () => 'test-file-stub')
vi.mock('*.jpg', () => 'test-file-stub')
vi.mock('*.svg', () => 'test-file-stub')

// Mock básico de window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock de ResizeObserver
window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock de componentes de Vuetify para evitar dependencias complejas
const mockVuetifyComponents = {
  VCard: { template: '<div data-testid="v-card"><slot></slot></div>' },
  VCardTitle: { template: '<div data-testid="v-card-title"><slot></slot></div>' },
  VCardSubtitle: { template: '<div data-testid="v-card-subtitle"><slot></slot></div>' },
  VCardText: { template: '<div data-testid="v-card-text"><slot></slot></div>' },
  VCardActions: { template: '<div data-testid="v-card-actions"><slot></slot></div>' },
  VBtn: { template: '<button data-testid="v-btn"><slot></slot></button>' },
  VIcon: { template: '<i data-testid="v-icon"></i>' },
  VChip: { template: '<span data-testid="v-chip"><slot></slot></span>' },
  VProgressLinear: { template: '<div data-testid="v-progress-linear"></div>' },
  VImg: { template: '<img data-testid="v-img" />' },
  VContainer: { template: '<div data-testid="v-container"><slot></slot></div>' },
  VRow: { template: '<div data-testid="v-row"><slot></slot></div>' },
  VCol: { template: '<div data-testid="v-col"><slot></slot></div>' },
  VAvatar: { template: '<div data-testid="v-avatar"><slot></slot></div>' },
  VSpacer: { template: '<div data-testid="v-spacer"></div>' },
  VApp: { template: '<div data-testid="v-app"><slot></slot></div>' },
  VMain: { template: '<div data-testid="v-main"><slot></slot></div>' },
  VNavigationDrawer: { template: '<div data-testid="v-navigation-drawer"><slot></slot></div>' },
  VAppBar: { template: '<div data-testid="v-app-bar"><slot></slot></div>' },
  VToolbar: { template: '<div data-testid="v-toolbar"><slot></slot></div>' },
  VToolbarTitle: { template: '<div data-testid="v-toolbar-title"><slot></slot></div>' },
  VList: { template: '<div data-testid="v-list"><slot></slot></div>' },
  VListItem: { template: '<div data-testid="v-list-item"><slot></slot></div>' },
  VListItemTitle: { template: '<div data-testid="v-list-item-title"><slot></slot></div>' },
  VFooter: { template: '<div data-testid="v-footer"><slot></slot></div>' },
}

config.global.components = mockVuetifyComponents
