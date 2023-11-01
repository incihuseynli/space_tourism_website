/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      'gridTemplateColumns' : {
        'custom1' : '120px 1fr',
        'custom2' : '1fr 384px',
      },
      'height': {
        100: "100vh",
      },
      colors: {
        'primaryBlack': "#0B0D17",
        'secondaryGray': "#D0D6F9",
        'primaryWhite': "#FEFEFE",
      },
      fontFamily: {
        'bellefair': ['"Bellefair"', "serif"],
        'barlow': ['"Barlow Condensed"', "sans-serif"],
      },
      backgroundImage: {
        'homeDesktop':
          "url('/src/starter-code/assets/home/background-home-desktop.jpg')",
        'homeTablet':
          "url('/src/starter-code/assets/home/background-home-tablet.jpg')",
        'homeMobile':
          "url('/src/starter-code/assets/home/background-home-mobile.jpg')",
        
        'destDesktop' : "url('/src/starter-code/assets/destination/background-destination-desktop.jpg')",
        'destTablet' : "url('/src/starter-code/assets/destination/background-destination-tablet.jpg')",
        'destMobile' : "url('/src/starter-code/assets/destination/background-destination-mobile.jpg')",
        
        'crewDesktop' : "url('/src/starter-code/assets/crew/background-crew-desktop.jpg')",
        'crewTablet' : "url('/src/starter-code/assets/crew/background-crew-tablet.jpg')",
        'crewMobile' : "url('/src/starter-code/assets/crew/background-crew-mobile.jpg')",
        
        'techDesktop' : "url('/src/starter-code/assets/technology/background-technology-desktop.jpg')",
        'techTablet' : "url('/src/starter-code/assets/technology/background-technology-tablet.jpg')",
        'techMobile' : "url('/src/starter-code/assets/technology/background-technology-mobile.jpg')",
      
        'moon' : "url('/src/starter-code/assets/destination/image-moon.png')",
        'titan' : "url('/src/starter-code/assets/destination/image-moon.png')",
        'mars' : "url('/src/starter-code/assets/destination/image-moon.png')",
        'europa' : "url('/src/starter-code/assets/destination/image-moon.png')",
      
      
      
      },
      backgroundColor: {
        'bgBlur': "rgba(255, 255, 255, 0.125)",
      },
      backdropBlur: {
        'mobileBlur': "blur(40.774227142333984px)",
      },
      boxShadow: {
        'shadowSM':
          "rgba(255, 255, 255, 0.25) 0px 25px 50px -12px, 120px 80px 40px 20px #0ff",
        'shadowLG': "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "btnShadow" : ' 0px 0px 50px 28px rgba(255,255,255,0.4)',
      },
    },
  },
  plugins: [],
};
