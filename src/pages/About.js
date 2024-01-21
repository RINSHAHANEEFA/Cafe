import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from "@mui/material";


const About = () => {
  return (
    <div>
        <Layout><Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Yours Cafe</Typography>
        <p>
          A sip of drinks and coffee will sooth both our mind and body.Here you can enjoy your drinks and desserts with your choice. 
        </p>
        <br />
        <p>
          We can provide customized items in our menu . We try our best to dine with your expectations.
        </p>
      </Box></Layout>
    </div>
  )
}

export default About