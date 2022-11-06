import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppliedApplications from './properties';
import useMediaQuery from '@mui/material/useMediaQuery';
import { color, Stack } from '@mui/system';
import { Paper } from '@mui/material';
import TodoModal from '../../static/modals/FilterModal';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const data={
    bedRooms:null,
    bathRooms:null,
    Location:"",
    PriceRange:[0,100]
  }
window.localStorage.setItem("data",JSON.stringify(data))
const Applications = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const refreshPage = ()=>{
        window.location.reload();
     }
    const handleClose = () => setOpen(false);
    const data= JSON.parse(localStorage.getItem("data"))
    const bedrooms=data.bedRooms;
    const bathrooms=data.bathRooms;
    const location=data.Location;
    const price=data.PriceRange;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>

            <Box style={{ width: "80%", margin: "auto", padding: "2%" }} >
                <Stack direction="column" spacing={1}>
                <Item style={{width:"100%",marginBottom:"10px"}}>
                <Button variant="text" style={{width:"100%" ,color:"black"}} onClick={handleOpen}>Filters &nbsp; <FilterAltOutlinedIcon/></Button>
                </Item>
               {matches? <Item style={{boxShadow:"none"}}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 0, sm: 0, md: 0 }}
                    style={{marginBottom:"20px"}}
                    spacing={2}
                >
                    {location?<Item style={{border:" 1px solid blue",width:"10%",height:"35px"}}>
                    <span>{location}</span>
                    </Item> :null}
                    {!(price[0]===0 && price[1]===100) ?<Item style={{border:" 1px solid blue",width:"10%",height:"35px"}}>
                    <span>{price[0]}K-{price[1]}K</span>
                    </Item>:null}
                    {bedrooms?<Item style={{border:" 1px solid blue",width:"10%",height:"35px"}}>
                    <span style={{position:"relative", top:"-12px"}}>{bedrooms}</span> &nbsp; <BedOutlinedIcon style={{position:"relative", top:"-5px"}}/>
                    </Item>:null}
                    {bathrooms?<Item style={{border:" 1px solid blue",width:"10%",height:"35px"}}>
                    <span style={{position:"relative", top:"-12px"}}>{bathrooms}</span> &nbsp; <BathtubOutlinedIcon style={{position:"relative", top:"-5px"}}/>
                    </Item>:null}
                {location || bathrooms || bedrooms || !(price[0]===0 && price[1]===100)?<Button variant="outlined" style={{color:"black",float:"right"}} onClick={refreshPage}> Clear Filters</Button> :null}
                </Stack>
                </Item> : null}
                </Stack>
                <AppliedApplications />
            </Box>
            <TodoModal open={open} handleClose={handleClose}/>
        </>
    )
}

export default Applications

