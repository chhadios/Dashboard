import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ScheduledApplications from './scheduledApplications';
import AppliedApplications from './AppliedApplications';
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
           
            <Box sx={{ width: '100%' }}>
                <Grid container  columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}   alignItems="stretch">
                    <Grid item xs={8}>
                        <Item>
                          <h1>Applied</h1>
                          <AppliedApplications/>
                          </Item>
                    </Grid>
                    
                    <Grid item xs={4}>
                        <Item>
                        <h1>Interview Sceduled</h1>
                          <ScheduledApplications/></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Applications