import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

function noop() {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // globals: true,
    // environment: 'jsdom',
    include: ['test/*.test.ts'],
    open: true,
    isolate: false,
    browser: {
      enabled: true,

      // @ts-expect-error ignore, we don't have the type here
      enableUI: true,
      name: 'chrome',
      headless: false,
      provider: 'webdriverio',
    },
    reporters: ['json', {
      onInit: noop,
      onPathsCollected: noop,
      onCollected: noop,
      onFinished: noop,
      onTaskUpdate: noop,
      onTestRemoved: noop,
      onWatcherStart: noop,
      onWatcherRerun: noop,
      onServerRestart: noop,
      onUserConsoleLog: noop,
    }, 'default'],

    // setupFiles: ['./test/setup.vitest.ts'],
    // transformMode: {
    //   web: [/.[tj]sx$/],
    // },
  },
})
