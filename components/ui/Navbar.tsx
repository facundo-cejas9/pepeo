import { useContext } from 'react';
import NextLink from 'next/link'
import { AppBar, Box, Button, IconButton, Menu, Toolbar, Typography, Container, Grid } from "@mui/material";
import { useEffect, useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Typewriter } from 'react-simple-typewriter';
import { UIContext } from '../../context/ui';

import { Link } from 'react-scroll'




const Navbar = () => {

  const { openSideMenu } = useContext(UIContext)


  const [navbar, setNavbar] = useState(false);

  const changeBackround = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }

  }

  useEffect(() => {

    changeBackround();
    window.addEventListener('scroll', changeBackround)

  }, [])






  return (

    <Grid className='section'>
      <AppBar sx={{ paddingBottom: 12, backgroundColor: "#2c2c2c" }}  elevation={0}>

        <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <NextLink href="/" passHref>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Typography sx={{
                marginTop: 3,
                fontSize: { xs: 23, md: 30 },
                fontFamily: 'Cantarell'
              }}
                className='link__logo'
                variant='h5'>
                <span style={{ fontFamily: 'Cantarell' }} className='span'>F</span>ACUNDO
                <span style={{ fontFamily: 'Cantarell' }}> C</span>EJAS
              </Typography>
            </Link>
          </NextLink>



          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Toolbar>
              <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>
                <Link to='about'>
                  <Typography
                    component='h6'
                    className='nav-link'

                    sx={{
                      color: 'white',
                      fontFamily: 'revert-layer',
                      fontSize: "2rem"
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </Button>

              <Button  sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>
                <Link to='skills'>
                  <Typography
                    component='h6'
                    className='nav-link'

                    sx={{
                      color: 'white',
                      fontFamily: 'revert-layer',
                      fontSize: "2rem"
                    }}
                  >
                    Skills
                  </Typography>
                </Link>
              </Button>

              <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>
                <Link to='projects'>
                  <Typography
                    component='h6'
                    className='nav-link'

                    sx={{
                      color: 'white',
                      fontFamily: 'revert-layer',
                      fontSize: "2rem"
                    }}
                  >
                    Projects
                  </Typography>
                </Link>
              </Button>

              <Button sx={{ ":hover": { backgroundColor: "transparent" }, fontFamily: 'Cantarell'  }}>
                <Link to='contact'>
                  <Typography
                    component='h6'
                    className='nav-link'

                    sx={{
                      color: 'white',
                      fontFamily: 'revert-layer',
                      fontSize: "2rem"
                    }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Button>


            </Toolbar>
          </Box>
          <IconButton
            onClick={openSideMenu}
            color='warning'
            size='small'
            sx={{
              display: {
                xs: 'block',
                md: 'none'
              },
              marginTop: 1.5,
              padding: 0,
              color: 'white'

            }}
          >
            <MenuOutlinedIcon sx={{ width: 50, marginTop: 1 }} />
          </IconButton>
        </Container>
      </AppBar>


      <Grid className='dev'>
        <Typography sx={{ fontSize: { xs: 50, md: 70, color: 'white', fontFamily: 'Cantarell' } }} >
          <Typewriter
            words={['Hello Im Facundo,']}
            loop={1}
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </Typography>

        <Typography sx={{ fontSize: { xs: 45, md: 65, color: '#ed143d', fontFamily: 'Cantarell' } }} >
          <Typewriter
            words={[" ", 'React Frontend Developer.']}
            loop={1}
            cursor
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1500}


          />
        </Typography>

      </Grid>
    </Grid>
  );
};

export default Navbar;