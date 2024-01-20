import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import {
  presetUno,
  presetWind,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    UnoCSS({
    presets: [  
      presetUno(),
      presetWind(),
      presetAttributify(),
    ],
    transformers: [
      transformerVariantGroup(), 
      transformerDirectives()
    ],
  })
],
})
