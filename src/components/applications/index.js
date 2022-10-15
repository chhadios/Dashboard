import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ScheduledApplications from './scheduledApplications';
import AppliedApplications from './AppliedApplications';
import FeaturedJobs from '../FeaturedJobs';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

const Applications = () => {
    return (
        <>
           
            <Box >
                <Grid  container columnSpacing={2} >
                    <Grid item xs={7.9} style={{boxShadow:"none"}} spacing={2}>
                        <Item style={{boxShadow:"none"}} >
                          <h1>Applied</h1>
                          <AppliedApplications/>
                          </Item>
                    </Grid>
                    
                    <Grid item xs={4}  style={{borderRadius:"20px",padding:"5px"}}>
                        <Item  style={{borderRadius:"20px"}}>
                        <h1>Sceduled Interviews</h1>
                          <ScheduledApplications/></Item>
                        <Item sx={{marginTop:"10px",marginBottom:"0px",height:"530px",borderRadius:"20px",overflow:"scroll",overflowX:"hidden"}} style={{borderRadius:"20px"}}>
                        <div style={{position:"absolute",backgroundColor:"white",borderRadius:"20px",textAlign:"center",width:"30%",marginTop:"-8px"}}><h1>Jobs for you</h1></div>
                          <FeaturedJobs/></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Applications