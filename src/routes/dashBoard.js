import React from 'react';
import Header from '../components/header';
import Applications from '../components/applications/index';


const Home = () => {
    return (
        <h1>
            <Header />
            <h3 style={{fontStyle:"normal",fontWeight:"normal",margin:"20px",marginLeft:"100px"}}>DashBoard</h3>
           <Applications/>
        </h1>
    )
}

export default Home