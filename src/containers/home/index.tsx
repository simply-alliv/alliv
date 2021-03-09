import React, { FunctionComponent } from "react"
import { Container, Box, Typography, Grid } from "@material-ui/core"
// import { ProfilePicture } from "../../components/profile-picture"

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <Box pt={6} pb={8}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>I'm Allistair Vilakazi</Typography>
            <Typography variant="subtitle1">Fullstack Software Developer. Live in the future. Big fan of the Jawwas #Uthini!</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <ProfilePicture /> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
