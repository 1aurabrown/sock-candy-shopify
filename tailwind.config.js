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
      'base-mob': ['0.875rem', theme('lineHeight.normal')],             // 14px
      'lg-mob': ['1.125rem', theme('lineHeight.normal')],               // 18px
      'xl-mob': ['1.5rem', theme('lineHeight.tight-mob')],              // 24px
      '2xl-mob': ['2.0625rem', theme('lineHeight.tight-mob')],          // 33px
      // desktop styles
      'base-desk': ['1rem', theme('lineHeight.normal')],                // 16px
      'lg-desk': ['1.25rem', theme('lineHeight.normal')],               // 20px
      'lg-tight-desk': ['1.25rem', theme('lineHeight.tight-desk')],     // 20px
      'xl-desk': ['1.5625rem', theme('lineHeight.normal')],             // 25px
      'xl-tight-desk': ['1.5625rem', theme('lineHeight.tight-desk')],   // 25px
      '2xl-desk': ['2.4375rem', theme('lineHeight.normal')],            // 39px
      '2xl-tight-desk': ['2.4375rem', theme('lineHeight.tight-desk')],  // 39px
      '3xl-tight-desk': ['3rem', theme('lineHeight.tight-desk')],       // 48px
      '4xl-tight-desk': ['3.5rem', theme('lineHeight.tight-desk')]      // 56px
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
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '60': 60,
      '70': 70,
      '80': 80,
      '90': 90,
      '100': 100,
      'auto': 'auto',
    },
    lineHeight: {
      'normal': '1.3',
      'tight-mob': '1.12',
      'tight-desk': '1.11'
    },
    extend: {
      screens: {
        'hoverable': {'raw': '(hover: hover)'},
      },
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
    colors: [],
    objectFit: [],
    textOpacity: [],
    borderOpacity: [],
    whitespace: [],
    borderRadius: [],
    rotate: []
  },
  corePlugins: {
    float: false,
    clear: false,
    objectPosition: false,
    alignSelf: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridAutoFlow: false,
    fontStyle: false,
    fontWeight: false,
    letterSpacing: false,
    listStyleType: false,
    listStylePosition: false,
    placeholderColor: false,
    placeholderOpacity: false,
    textDecoration: false,
    textTransform: false,
    wordBreak: false,
    backgroundAttachment: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderStyle: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    borderCollapse: false,
    tableLayout: false,
    boxShadow: false,
    scale: false,
    skew: false,
    transformOrigin: false,
    resize: false,
    userSelect: false,
    strokeWidth: false,
    fill: false,
    stroke: false
  }
}
