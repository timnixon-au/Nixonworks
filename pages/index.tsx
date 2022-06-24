import * as React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import heroBg from "../public/assets/images/computer_section_background.jpg"

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth={false} sx={{maxHeight:"300px"}} disableGutters>
        <Image src={heroBg} layout='responsive' style={{opacity:"0.5"}}/>
      </Container>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        </Box>
      </Container>
    </>

    
  );
};

export default Home;
