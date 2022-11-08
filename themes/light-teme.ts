import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1E1E1E'
      },
      secondary: {
        main: '#3A64D8'
      }
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
          position: 'fixed',
        },
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            height: 70
          },
        }
      },
  
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: 30,
            fontWeight: 600
          },
          h2: {
            fontSize: 20,
            fontWeight: 400
          },
          subtitle1: {
            fontSize: 18,
            fontWeight: 600
          }
        }
      },
  
  
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          size: 'small',
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: 10,
            ":hover": {
              backgroundColor: 'rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease-in-out'
            }
          }
        }
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#2c2c2c'
          }
        }
      },
  
  
      MuiCard: {
        defaultProps: {
          elevation: 0
        },
        styleOverrides: {
          root: {
            boxShadow: '1px 5px 20px 2px rgba(1,0,0,0.09)',
            borderRadius: '10px',
          }
        }
      }
      
    }
  });