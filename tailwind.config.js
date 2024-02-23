export default {
  mode: 'jit',
  content: [
    "*.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    zIndex: {
      1: '1'
    },
    screens: {
      xs: "648px",
      sm: '768px',
      md: "920px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      backgroundImage: {
        'contact': "url('/src/assets/icons/contact-background.svg')"
      },
      borderWidth: {
        1: "1px"
      },
      width: {
        "21": "5.2rem"
      },
      lineHeight: {
        11: '44px'
      },
      margin: {
        "5.5": '22px'
      },
      fontSize: {
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
        40: "40px",
        44: "44px",
        46: "46px",
        48: "48px",
        54: "54px",
        60: "60px",
        64: "64px",
        72: "72px",
        80: "80px",
        90: "90px",
        100: "100px",
      },
      fontFamily: {
        shalimar: ['Shalimar', 'sans'],
        oswald: ['Oswald', 'sans'],
        "oswald-light": ['Oswald Light', 'sans'],
        "oswald-medium": ['Oswald Medium', 'sans'],
        "oswald-bold": ['Oswald Bold', 'sans'],
        karla: ['Karla', 'sans'],
        'karla-medium': ['Karla Medium', 'sans'],
        "karla-light": ['Karla Light', 'sans'],
        "karla-bold": ['Karla Bold', 'sans']
      },
      colors: {
        "mako-shark-light": '#40424B',
        "mako-shark-dark": '#1C1D24',
        'olive-dark': '#46521F',
        'olive-light': '#5A682E',
        'mango': '#FAAF52',
        'lemon-chiffon-light': '#FFFACD',
        'lemon-chiffon-dark': '#F8F2BD',
        'goldenrod-dark': '#B8860B',
        'ash-gray': '#B2BEB5',
        'crayola': '#B5E48C',
        'cinopya': '#dc2f02'
      },
      animation: {
        'marquee': 'marquee 20s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'} 
        }
      }
    },
  },
  variants: {
    extend: {
      textOpacity: ['active'],
      borderOpacity: ['active']
    }
  },
  plugins: [
    // require('@tailwindcss/animation')
  ],
  
}

