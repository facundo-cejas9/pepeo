import { Grid, Typography, Card, CardMedia, Box } from '@mui/material'


export const Skills = () => {
    return (
        <Grid item justifyContent='center' id='skills' sx={{ height: '100vh', width: '1200px', backgroundColor: 'rgb(241, 238, 238)', borderRadius: 3, boxShadow: '2px 1px 8px 1px rgba(0,0,0,0.1)', marginTop: 5 }} >

            <Grid item sx={{ padding: {xs: 9, sm: 10, xl: 10 } }} display=' flex ' justifyContent='center' gap={0.4}>
            <Typography sx={{ fontSize: 50 }}><span style={{ fontSize: 50, color: "#ed143d" }}>S</span>KILLS </Typography>
            </Grid>


            <Box sx={{ marginLeft: { xs: 4, sm: 7, md: 10 }, marginTop: 0}}>
                <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 2, sm: 12, md: 12  }}>
                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }    >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }} >
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/html.webp'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/css.webp'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s', height: { xs: 110, md: 160 } }}
                                component='img'
                                alt='react-img'
                                image='/images/boostrap.png'
                                
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/tailwind.png'
                            />
                        </Card>
                    </Grid>

                      <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/material.png'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/js.png'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/ts.svg'
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s', height: { xs: 100, md: 150, xl: 160 } }}
                                component='img'
                                alt='react-img'
                                image='/images/logo-og.png'
                               
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/next.png'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/mongodb.png'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/firebase.png'
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={ 1 } sm={ 4 } md={ 3 }  >
                        <Card sx={{ width: { xs: 100, md: 150, xl: 150 }, height: {xs: 100, md: 150, xl: 150} , backgroundColor: 'transparent' }}>
                            <CardMedia
                                className='img'
                                sx={{ filter: 'grayscale(100%)', transition: 'ease-in 0.2s' }}
                                component='img'
                                alt='react-img'
                                image='/images/docker.webp'
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}
