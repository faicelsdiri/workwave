
import { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import axios from 'axios';
import { Grid } from '@mui/material';


function Home() {



  return (
    <div >
    <Nav/>
      
      <div style={{ paddingTop: "20px", marginTop: "10%" }}>



        <Footer/>
      </div>
    </div>

  );
}

export default Home;
