import { Grid, Typography, Card, CardMedia, CardActionArea, CardContent, IconButton, Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Contact = () => {
    return (

        <Grid item justifyContent='center' id='contact' sx={{ height: { xs: "1100px", md: "90vh" }, width: '1200px', backgroundColor: 'rgb(241, 238, 238)', borderRadius: 3, boxShadow: '2px 1px 8px 1px rgba(0,0,0,0.1)', marginTop: 5 }} >

            <Grid item sx={{ padding: { xs: 7, sm: 10, xl: 10 } }} display=' flex ' justifyContent='center' gap={0.4}>
                <Typography sx={{ fontSize: 50 }}><span style={{ fontSize: 50, color: "#ed143d" }}>C</span>ONTACT </Typography>
            </Grid>

            <Grid item textAlign='center' >
                <Typography sx={{ fontFamily: 'Cantarell' }} variant='h5'>Envíame un mensaje en mis redes sociales</Typography>
            </Grid>



            <Grid container justifyContent='center' columns={{ xs: 1, sm: 12, md: 12 }} gap={5}>
                <Grid sx={{ display: 'grid', placeContent: 'center', marginTop: { xs: 9 } }} xs={1} sm={3}>
                    <Card sx={{ width: { xs: 300, sm: 200, lg: 300 }, height: { xs: 150, sm: 200, lg: 300 }, backGroundColor: 'red' }}>
                        <CardActionArea sx={{ width: { xs: 300, sm: 220, lg: 300 }, height: { xs: 150, sm: 200, lg: 300 }, backgroundColor: 'white', display: 'grid', placeContent: 'center', borderRadius: 2 }}>
                            <a href='https://www.linkedin.com/in/facundo-cejas9/' rel="noopener"  >
                                <img style={{ height: 100, width: 100 }}
                                    src='/images/linkedin.png'

                                />
                            </a>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid sx={{ display: 'grid', placeContent: 'center', marginTop: { xs: 0, md: 9 } }} xs={1} sm={3}>
                    <Card sx={{ width: { xs: 300, sm: 200, lg: 300 }, height: { xs: 150, sm: 200, lg: 300 }, backGroundColor: 'red' }}>
                        <CardActionArea sx={{ width: { xs: 300, sm: 220, lg: 300 }, height: { xs: 150, sm: 200, lg: 300 }, backgroundColor: 'white', display: 'grid', placeContent: 'center', borderRadius: 2 }}>
                            <a href='https://github.com/facundo-cejas9'  rel="noopener">
                                <img style={{ height: 100, width: 100 }}
                                    src='/images/githubIcon.webp'

                                />
                            </a>
                        </CardActionArea>
                    </Card>
                </Grid>


                <Grid sx={{ display: 'grid', placeContent: 'center' }} xs={1} sm={3}>
                    <Card  sx={{ marginTop: { sx: 0, sm: 9, lg: 9 }, width: { xs: 300, sm: 200, lg: 300 }, height: { xs: 150, sm: 200, lg: 300 }, backgroundColor: 'white' }}>
                        <Grid item sx={{ display: 'grid', placeContent: 'center', marginTop: { xs: 2, sm: 3, lg: 10 } }}>
                            <img style={{ height: 100, width: 100, marginLeft: 50 }}
                                src='/images/gmail.png'
                            />
                            <Typography sx={{ fontSize: { xs: 17, sm: 14, lg: 17 }, fontFamily: 'Cantarell', marginTop: { xs: 0, sm: 3, lg: 5 }, color: 'black' }}>cejasjfacundo@gmail.com</Typography>
                        </Grid>

                    </Card>

                </Grid>


            </Grid>

        </Grid>





    )
}
