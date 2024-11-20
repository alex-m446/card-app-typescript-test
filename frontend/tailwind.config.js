
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          theme: {
              button: colors.blue[400], // themes here - follow these for consistent colours throughout app
              buttonHover: colors.blue[500], 
 
              buttonDark: colors.slate[800],
              buttonDarkHover: colors.slate[900],

              text: colors.blue[400],
              textDark: colors.slate[800],  

              buttonRemove: colors.red[500],
              buttonRemoveHover: colors.red[700],

              buttonRemoveDark: colors.slate[800],
              buttonRemoveHoverDark: colors.slate[900],

              buttonEdit: colors.blue[500],
              buttonEditHover: colors.blue[700],

              buttonEditDark: colors.slate[600],
              buttonEditHoverDark: colors.slate[700],
              
              buttonUpdate: colors.blue[400],
              buttonUpdateHover: colors.blue[600],
              
              buttonUpdateDark: colors.slate[800],
              buttonUpdateHoverDark: colors.slate[900],
          },
      },},
  },
  plugins: [],
};
