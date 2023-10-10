import type { UserConfig } from 'vite'
import type { UserConfig as VitestConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

const config: UserConfig & Pick<VitestConfig, 'test'> = {
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    }
  },
}

export default config