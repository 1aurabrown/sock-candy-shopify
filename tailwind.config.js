module.exports = {
  theme: {
    fontFamily: {
      lausanne: ['"Lausanne"', 'sans-serif']
    },
    colors: {
      rose: '#E29FA0',
      'soft-blue': '#92A0AD',
      orange: '#EF9A60',
      black: '#221F1F',
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
    borderWidth: {
      default: '2px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
    },
    borderColor: theme => ({
      default: theme('colors.black', 'currentColor'),
    }),
    letterSpacing: {
      normal: 'auto',
    },
    lineHeight: {
      'normal': '1.3'
    }
  },
  variants: {
    fontFamily: [],
    lineHeight: [],
    letterSpacing: [],
    colors: []
  }
}