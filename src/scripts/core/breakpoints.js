import SimpleBreakpoints from 'simple-breakpoints';
import tailwindConfig from './tailwind-config';

const screens = tailwindConfig.theme.screens
const tailwindBreakpoints = new SimpleBreakpoints(Object.keys(screens).reduce((acc, key) => {
  acc[key] = parseInt(screens[key].replace('px', ''));
  return acc
}, {}));

export default tailwindBreakpoints
