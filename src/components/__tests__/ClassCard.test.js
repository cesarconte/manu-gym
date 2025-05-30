import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ClassCard from '../ClassCard.vue'

describe('ClassCard', () => {
  const mockClassInfo = {
    name: 'Yoga Matutino',
    type: 'yoga',
    description: 'Comienza tu día con energía y tranquilidad',
    duration: 60,
    difficulty: 'Principiante',
    instructor: {
      name: 'Ana García',
      title: 'Instructora Certificada',
      avatar: null,
    },
    schedule: [
      { day: 'Lun', time: '07:00' },
      { day: 'Mié', time: '07:00' },
      { day: 'Vie', time: '07:00' },
    ],
    maxParticipants: 15,
    equipment: 'Mat incluido',
  }

  it('renders class information correctly', () => {
    const wrapper = mount(ClassCard, {
      props: { classInfo: mockClassInfo },
    })

    expect(wrapper.text()).toContain('Yoga Matutino')
    expect(wrapper.text()).toContain('Ana García')
  })

  it('applies correct gradient class based on class type', () => {
    const wrapper = mount(ClassCard, {
      props: { classInfo: mockClassInfo },
    })

    const component = wrapper.vm
    expect(component.gradientClass).toBe('bg-gradient-yoga')
  })

  it('falls back to primary gradient for unknown class type', () => {
    const unknownTypeClass = { ...mockClassInfo, type: 'unknown' }
    const wrapper = mount(ClassCard, {
      props: { classInfo: unknownTypeClass },
    })

    const component = wrapper.vm
    expect(component.gradientClass).toBe('bg-gradient-primary')
  })
})
