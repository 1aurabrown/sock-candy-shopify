const tailwindSpacing = require('./tailwind_custom/tailwind-spacing');

module.exports = {
  theme: {
    fontFamily: {
      lausanne: ['"Lausanne"', 'sans-serif']
    },
    colors: {
      rose: '#E29FA0',
      'soft-blue': '#92A0AD',
      orange: '#EF9A60',
      black: {
        default: '#221F1F',
        tint: '#FBE6D7'
      },
      'off-white': '#F1EAE4'
    },
    fontSize: theme => ({
      // mobile styles
      'base-mob': ['0.875rem', theme('lineHeight.normal')],            // 14px
      'lg-mob': ['1.125rem', theme('lineHeight.normal')],              // 18px
      'xl-mob': ['1.5rem', theme('lineHeight.tight-mob')],             // 24px
      '2xl-mob': ['2.0625rem', theme('lineHeight.tight-mob')],         // 33px
      // desktop styles
      'sm-desk': ['1.125rem', theme('lineHeight.normal')],             // 18px
      'base-desk': ['1.25rem', theme('lineHeight.normal')],            // 20px
      'lg-desk': ['1.625rem', theme('lineHeight.normal')],             // 26px
      'lg-tight-desk': ['1.625rem', theme('lineHeight.tight-desk')],   // 26px
      'xl-desk': ['1.75rem', theme('lineHeight.normal')],              // 28px
      'xl-tight-desk': ['1.75rem', theme('lineHeight.tight-desk')],    // 28px
      '2xl-desk': ['3rem', theme('lineHeight.normal')],                // 48px
      '2xl-tight-desk': ['3rem', theme('lineHeight.tight-desk')],      // 48px
      '3xl-tight-desk': ['3.9375rem', theme('lineHeight.tight-desk')]  // 63px
    }),
    borderWidth: {
      default: '2px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
    },
    borderColor: theme => ({
      default: theme('colors.black.default', 'currentColor'),
      black: {
        default: theme('colors.black.default', 'currentColor'),
        tint: theme('colors.black.tint', 'currentColor'),
      }
    }),
    letterSpacing: {
      normal: 'auto',
    },
    lineHeight: {
      'normal': '1.3',
      'tight-mob': '1.12',
      'tight-desk': '1.11'
    },
    extend: {
      opacity: {
        '0': '0',
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
        '100': '1'
      },
      transitionDelay: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1400': '1400ms',
        '1500': '1500ms',
        '1600': '1600ms',
        '1800': '1800ms',
        '2000': '2000ms',
        '2200': '2200ms',
        '2400': '2400ms',
        '2500': '2500ms',
        '2600': '2600ms',
        '2800': '2800ms',
        '3000': '3000ms'
      },
      margin: tailwindSpacing,
      padding: tailwindSpacing,
      spacing: tailwindSpacing,
      cursor: {
        'e-resize': 'e-resize',
        'w-resize': 'w-resize'
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%'
      }
    }
  },
  variants: {
    fontFamily: [],
    lineHeight: [],
    letterSpacing: [],
    colors: []
  }
}