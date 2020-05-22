import tailwindConfig from './tailwind-config';
import Breakpoints from "@pluginjs/breakpoints"

// Simple object
const tailwindScreens = tailwindConfig.theme.screens
const screens = Object.keys(tailwindScreens).reduce((acc, key) => {
  acc[key] = parseInt(tailwindScreens[key].replace('px', ''));
  return acc
}, {});

// Responsive event handling
Breakpoints({
  'xs': {
      min: 0,
      max: screens.sm - 1
  },
  'sm': {
      min: screens.sm,
      max: screens.md - 1
  },
  'md': {
      min: screens.md,
      max: screens.lg - 1
  },
  'lg': {
      min: screens.lg,
      max: screens.xl - 1
  },
  'xl': {
      min: screens.xl,
      max: Infinity
  },
})

export { screens, Breakpoints };