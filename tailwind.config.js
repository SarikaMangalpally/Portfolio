/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
    zIndex: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      10: '10',
      20: '20',
      50: '50',
      100: '100',
    },
    screens: {
      xs: "648px",
      sm: '768px',
      md: "920px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      boxShadow: {
        'front-contact-card': '5px 5px 15px #374151',
        'back-contact-card': '5px 5px 15px #ffffff'
      },
      backgroundImage: {
        
      },
      borderWidth: {
        1: "1px"
      },
      width: {
       
      },
      lineHeight: {
        
      },
      margin: {
       
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
        "alex-brush": ['Alex Brush'],
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
        'platinum': {
          200 : '#E5E3DC'
        },
        'pearl': {
          200: '#E9E2C8',
          400: '#f5f5ef'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-out': 'fadeInRight 0.8s ease-in forwards',
        moveRightToLeft: 'moveRightToLeft 1s ease-out infinite'
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: 0, transform: '-translateX(25%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(25%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' }
        },
        moveRightToLeft: {
          '0%': { transform: 'translateX(50%)' },
          // '50%': {transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(25%)' },
        }
    },
  },
  variants: {
    extend: {
      textOpacity: ['active'],
      borderOpacity: ['active']
    }
  },
  plugins: [],
}
}