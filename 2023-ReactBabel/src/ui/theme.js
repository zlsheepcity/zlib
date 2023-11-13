/** MUI Theme Docs:
 *  https://mui.com/material-ui/customization/theming/
 */

export const theme = {

  // palette: {
  //   primary: {
  //     main: 'hsla(264, 30%, 41%, 1)',
  //   },
  // },

  typography: {
    button: {
      textTransform: 'none',
//TS: textTransform: 'none' as const
    }
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
//TS:   variant: 'outlined' as const
      },
      styleOverrides: {
        outlined: {
          // backgroundColor: '#fff',
        }
      }
    }
  }
};

export default theme;
