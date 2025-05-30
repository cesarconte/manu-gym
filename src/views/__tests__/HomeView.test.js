import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  it('renders home page content', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Bienvenido a Manu Gym')
    expect(wrapper.text()).toContain('Tu mejor versión te está esperando')
  })

  it('displays featured classes section', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Clases Destacadas')
  })

  it('has handleClassReserve method', () => {
    const wrapper = mount(HomeView)
    expect(typeof wrapper.vm.handleClassReserve).toBe('function')
  })

  it('has handleViewDetails method', () => {
    const wrapper = mount(HomeView)
    expect(typeof wrapper.vm.handleViewDetails).toBe('function')
  })
})
