import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'

export const Projects = () => {
    return (
        <Grid container
            id='projects'
            sx={{display: 'grid', placeContent: 'center', height: { xs: '2400px', sm: '1390px', md: '1350px' }, width: '1200px', backgroundColor: 'rgb(241, 238, 238)', borderRadius: 3, boxShadow: '2px 1px 8px 1px rgba(0,0,0,0.1)', marginTop: 5, padding: { xs: 3, sm: 5, md: 1 } }}
        >

            <Grid item sx={{ padding: { xs: 4, sm: 5, xl: 10 } }} display=' flex ' justifyContent='center' gap={0.5}>
                <Typography className='text__about'><span className='span'>P</span>ROJECTS</Typography>
            </Grid>

            <Grid sx={{ padding: 1, paddingLeft: {  xs: 0, sm: 0, md: 10 } }} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 5, md: 1 }} >

                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 270, borderRadius: 2, backgroundColor: 'white' }}>
                        <CardMedia
                            component='img'
                            image='/images/raices.png'
                            alt='app image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>Static Page</Typography>
                            <Typography variant='body2'>Página con casas y departamentos en venta, totalmente responsive, incluye su modo noche (es una función hecha en JavaScript), con formulario de contacto incluido.</Typography>
                        </CardContent>

                        <CardActions>
                            <Button href='https://testingjs.netlify.app/' target='_blank' sx={{ color: 'red', padding: 2 }} size="small">
                                View Demo
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>

                <Grid alignItems='center' item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 270, borderRadius: 2, backgroundColor: 'white' }}>
                        <CardMedia
                            component='img'
                            image='/images/appv1.png'
                            alt='journal image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>Gif Finder App</Typography>
                            <Typography variant='body2'>Aplicación hecha íntegramente en react, usando boostrap para su diseño, una aplicación que busca los gifs que queremos a través de la solicitud a la página Giphy.</Typography>
                        </CardContent>

                        <CardActions>
                            <Button href='https://facundo-cejas9.github.io/aplicacion/' target='_blank' sx={{ color: 'red', padding: 2 }} size="small">
                                View Demo
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>

                <Grid item xs={12} sm={6} md={4}  >
                    <Card sx={{ maxWidth: 270, borderRadius: 2, backgroundColor: 'white' }}>
                        <CardMedia
                            component='img'
                            image='/images/poke.jpg'
                            alt='app image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>Pokedéx</Typography>
                            <Typography lineHeight={1.7} variant='body2'>Aplicación creada en react, implementando hooks, solicitudes de datos en pokeapi.com, para el diseño de la página se utilizó SASS.</Typography>
                        </CardContent>

                        <CardActions>
                            <Button href='https://facundo-cejas9.github.io/poke/' target='_blank' sx={{ color: 'red', padding: 2 }} size="small">
                                View Demo
                            </Button>
                        </CardActions>
                    </Card>



                </Grid>


                <Grid item xs={12} sm={6} md={4}  >
                    <Card sx={{ maxWidth: 270, borderRadius: 2, backgroundColor: 'white' }}>
                        <CardMedia
                            component='img'
                            image='/images/journal.jpg'
                            alt='app image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>JournalApp</Typography>
                            <Typography variant='body2'>Journal app es una aplicación de notas, que a su vez permite cargar imagenes para dichas notas, se utilizó FireBase para la base de datos.</Typography>
                        </CardContent>

                        <CardActions>
                            <Button href='https://journalv2.netlify.app/' target='_blank' sx={{ color: 'red', padding: 2 }} size="small">
                                View Demo
                            </Button>
                        </CardActions>
                    </Card>



                </Grid>



            </Grid>


        </Grid>
    )
}
