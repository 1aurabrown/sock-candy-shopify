import tailwindConfig from './tailwind-config';
import Breakpoints from "@pluginjs/breakpoints"

// Simple object
const screens = tailwindConfig.theme.screens
function parseScreen(screen) {
  return parseInt(screen.replace('px', ''));
}

// Responsive event handling
Breakpoints({
  'xs': {
      min: 0,
      max: parseScreen(screens.sm) - 1
  },
  'sm': {
      min: parseScreen(screens.sm),
      max: parseScreen(screens.md) - 1
  },
  'md': {
      min: parseScreen(screens.md),
      max: parseScreen(screens.lg) - 1
  },
  'lg': {
      min: parseScreen(screens.lg),
      max: parseScreen(screens.xl) - 1
  },
  'xl': {
      min: parseScreen(screens.xl),
      max: Infinity
  },
})

export default Breakpoints;