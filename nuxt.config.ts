import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import checker from 'vite-plugin-checker';
import svgLoader from 'vite-svg-loader';

const currentDir = dirname(fileURLToPath(import.meta.url));
const lifecycle = process.env.npm_lifecycle_event;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //
  css: [
    'element-plus/dist/index.css',
    'swiper/swiper-bundle.min.css',
    'ui-layer/assets/styles/index.scss',
    'app-layer/assets/styles/index.scss'
  ],
  alias: {
    'ui-layer': join(currentDir, './pricehack-ui'),
    'app-layer': join(currentDir)
  },
  extends: './pricehack-ui',
  app: {
    head: {
      title: 'SellersHack'
    }
  },
  typescript: {
    strict: true
  },
  modules: ['@element-plus/nuxt', '@vueuse/nuxt'],
  elementPlus: {
    importStyle: false
  },
  experimental: {
    typedPages: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "app-layer/assets/styles/libs/bootstrap-config/index.scss";'
        }
      }
    },
    plugins: [
      checker({
        vueTsc: true,
        eslint: {
          lintCommand:
            'eslint ./**/*.{ts,vue} --ignore-pattern "./**/*.test.ts" --ignore-pattern "./**/*.stories.ts"'
        }
      }),
      svgLoader({
        svgo: false
      })
    ]
  },
  build: {
    transpile: ['primevue', ...(lifecycle === 'build' ? ['element-plus'] : [])]
  }
});
