const percentSpacing = {
  '1-per': '1%',
  '2-per': '2%',
  '3-per': '3%',
  '4-per': '4%',
  '5-per': '5%',
  '6-per': '6%',
  '7-per': '7%',
  '8-per': '8%',
  '9-per': '9%',
  '10-per': '10%',
  '15-per': '15%',
  '20-per': '20%',
  '25-per': '25%',
  '30-per': '30%',
  '40-per': '40%',
  '50-per': '50%',
  '60-per': '60%',
  '70-per': '70%',
  '75-per': '75%',
  '80-per': '80%',
  '90-per': '90%',
  '100-per': '100%',
  // common image aspect ratios
  '9:16': `${((16 / 9) * 100)}%`,
  '2:3': `${((3 / 2) * 100)}%`,
  '3:4': `${((4 / 3) * 100)}%`,
  '1:1': '100%', // alias 100-per
  '4:3': `${((3 / 4) * 100)}%`,
  '3:2': `${((2 / 3) * 100)}%`,
  '16:9': `${((9 / 16) * 100)}%`
}

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
      'base-mob': ['0.875rem', theme('lineHeight.normal')], // 14px
      'lg-mob': ['1.125rem', theme('lineHeight.normal')],   // 18px
      'xl-mob': ['1.5rem', '1.6875rem'],                    // 24px / 27px
      '2xl-mob': ['2.0625rem', '2.3125rem'],                // 33px / 37px
      // desktop styles
      'sm-desk': ['1.125rem', theme('lineHeight.normal')],  // 18px
      'base-desk': ['1.25rem', theme('lineHeight.normal')], // 20px
      'lg-desk': ['1.625rem', theme('lineHeight.normal')],  // 26px
      'lg-tight-desk': ['1.625rem', '1.8125rem'],           // 26px / 29px
      'xl-desk': ['1.75rem', theme('lineHeight.normal')],   // 28px
      '2xl-desk': ['3rem', theme('lineHeight.normal')],     // 48px
      '2xl-tight-desk': ['3rem', '3.3125rem'],              // 48px / 53px
      '3xl-tight-desk': ['3.9375rem', '4.375rem']           // 63px / 70px
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
      'normal': '1.3'
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
      margin: percentSpacing,
      padding: percentSpacing,
      transitionDelay: {
        '0': '0ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
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