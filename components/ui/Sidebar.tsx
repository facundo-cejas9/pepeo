import { useContext } from 'react';

import NextLink from 'next/link'

import { Box, Drawer, ListItem, Typography, Button } from '@mui/material'
import { UIContext } from '../../context/ui';

import { Link } from 'react-scroll'



export const Sidebar = () => {


  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)



  return (
    <Drawer
      open={sidemenuOpen}
      anchor='right'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
      onClose={closeSideMenu}



    >
      <Box sx={{ width: '250px', paddingTop: 10, backgroundColor: '#2c2c2c' }}>

        <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>

          <Link to='about' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
                fontSize: "2rem",
                padding: 10
              }}
            >
              About
            </Typography>
          </Link>

        </Button>

        <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>

          <Link to='skills' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
                fontSize: "2rem",
                padding: 10
              }}
            >
              Skills
            </Typography>
          </Link>

        </Button>

        <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>

          <Link to='projects' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
                fontSize: "2rem",
                padding: 10
              }}
            >
              Projects
            </Typography>
          </Link>

        </Button>

        <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>

          <Link to='contact' smooth={true} duration={2}>
            <Typography
              onClick={closeSideMenu}
              component='h6'
              className='nav-link'
              sx={{
                color: 'white',
                fontFamily: 'monospace',
                fontSize: "2rem",
                padding: 10
              }}
            >
              Contact
            </Typography>
          </Link>

        </Button>

      </Box>

    </Drawer>
  )
}
