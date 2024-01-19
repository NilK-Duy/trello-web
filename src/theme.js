// import { deepOrange, teal, cyan, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       '*::-webkit-scrollbar': {
    //         width: '8px',
    //         height: '8px'
    //       },
    //       '*::-webkit-scrollbar-thumb': {
    //         backgourndColor: '#dcdde1',
    //         borderRadius: '8px'
    //       },
    //       '*::-webkit-scrollbar-thumb:hover': {
    //         backgourndColor: 'white'
    //       }
    //     }
    //   }
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover' : { borderWidth: '0.5px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.main,
          fontSize: '0,875rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.main
          //   }
          // },
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&:Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    }
  }
  // other properties
})

export default theme
