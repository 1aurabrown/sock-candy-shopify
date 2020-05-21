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
        '0': '0ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      },
      margin: tailwindSpacing,
      padding: tailwindSpacing,
      spacing: tailwindSpacing,
    }
  },
  variants: {
    fontFamily: [],
    lineHeight: [],
    letterSpacing: [],
    colors: []
  }
}