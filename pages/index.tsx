import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { About, Contact, Projects, Skills } from '../components/Sections'



const Home: NextPage = () => {
  return (
    <Layout title='My personal Website' description='Portfolio personal'>

      <Grid container display='flex' justifyContent='center'>

        <About />

        <Skills />

        <Projects />

        <Contact />

      </Grid>

    </Layout>
  )
}

export default Home
