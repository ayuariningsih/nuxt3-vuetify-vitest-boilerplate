import { describe, expect, afterEach, vi, beforeEach, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Example from './Example.vue'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Example component', () => {
  it('should work', () => {
    // const wrapper = shallowMount(Example, {
    //   global: {
    //     components: {
    //       Example,
    //     },
    //     plugins: [vuetify],
    //   }
    // })
    
    const wrapper = shallowMount(Example)
    const searchForm = wrapper.find('[data-testid="search"]')
    
    expect(searchForm.exists()).toBe(true)
  })
})