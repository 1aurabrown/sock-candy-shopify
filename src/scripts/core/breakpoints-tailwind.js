import tailwindConfig from './tailwind-config';
import Breakpoints from "@pluginjs/breakpoints"

const screens = tailwindConfig.theme.screens
const bp = Object.keys(screens).reduce((acc, key) => {
  acc[key] = parseInt(screens[key].replace('px', ''));
  return acc
}, {});

Breakpoints({
  'xs': {
      min: 0,
      max: bp.sm - 1
  },
  'sm': {
      min: bp.sm,
      max: bp.md - 1
  },
  'md': {
      min: bp.md,
      max: bp.lg - 1
  },
  'lg': {
      min: bp.lg,
      max: bp.xl - 1
  },
  'xl': {
      min: bp.xl,
      max: Infinity
  },
})

export default Breakpoints
