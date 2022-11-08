import { Grid, Typography, Button } from '@mui/material'

export const About = () => {
  return (

    <Grid item justifyContent='center' id='about' sx={{ height: { xs: "1000px", md: "100vh" }, width: '1200px', backgroundColor: 'rgb(241, 238, 238)', borderRadius: 3, boxShadow: '2px 1px 8px 1px rgba(0,0,0,0.1)', marginTop: 5 }} >

      <Grid item sx={{ padding: { xs: 9, sm: 10, xl: 10 } }} display=' flex ' justifyContent='center' gap={0.4}>
        <Typography sx={{ fontSize: 50 }}><span style={{ fontSize: 50 }} className='span'>A</span>BOUT</Typography>
      </Grid>


      <Grid container display='flex' justifyContent='space-around' sx={{ marginTop: 0 }} columns={{ xs: 1, sm: 1, md: 2 }} >


        <Grid item xs={1} sm={1} md={1}  >
          <img className='foto' src='/images/foto.jpg'>

          </img>
        </Grid>

        <Grid sx={{ padding: { xs: 5, sm: 3} }} item xs={1} sm={1} md={1}  >
          <Typography sx={{ fontFamily: 'Sans-Serif', fontSize: { xs: 16, sm: 16, md: 20 }, lineHeight: 2, marginTop: 3 }}>Soy Facundo Cejas, tengo 26 años, soy desarrollador Frontend, actualmente en busca de oportunidades laborales para trabajar con las últimas tecnologías en proyectos desafiantes y diversos.<br />
          Soy una persona creativa, responsable, perseverante, metódica con iniciativa y adquisición de nuevos conocimientos.</Typography>
        </Grid>

        <div >
        <Button sx={{padding: "10px 30px", backgroundColor: '#ed143d', border: '1px solid red', ":hover": "red", marginLeft: { xs: 0, sm: 20, md: 28 }, marginTop: { xs: 0, sm: 5, md: 1 }, left: { xs: 0, sm: -310, md: 0   } }} href="https://drive.google.com/file/d/1i0ZNKjELRak2n1IpyZEW4IK4Uz1Hhn9L/view?usp=sharing" rel='noreferrer' target='_blank' >
          Descargar CV
        </Button>
        </div>
        </Grid>
      </Grid>





  )
}
