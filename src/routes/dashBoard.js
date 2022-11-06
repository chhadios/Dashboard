import React from 'react';
import Header from '../components/header';
import Applications from '../components/propertyCards/index';
import Footer from '../components/footer';
import SupportButton from '../static/HelpButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Home = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <h1>
            <Header />
            <h5 style={{fontStyle:"normal",fontWeight:"normal",margin:"20px",marginLeft:"100px"}}>Search Properties</h5>
           <Applications/>
           {matches ? <SupportButton/> : null}
           <Footer/>
           
        </h1>
    )
}

export default Home