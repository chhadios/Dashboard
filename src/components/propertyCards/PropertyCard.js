import React from "react";
import { Stack } from "@mui/system";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  
  }));
const PropertyCard=({image,tittle,address,rate,bed,bath,area,city})=>{
    return(
        <Stack direction="column" spacing={2}  >
        <Item sx={{ height: "200px", width: "100%", textAlign: "center",borderRadius:"15px",padding:"0"}}><img src={image} alt="Girl in a jacket"
         style={{ width: "100%",height:"100%",objectFit:"fill",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} /></Item>
        <Item sx={{ boxShadow: "none" }}>
          <p style={{ fontStyle: "normal", fontWeight: "Bold", fontSize: "18px", textAlign: "left" }}>{rate}k<span style={{color:"blueViolet",fontSize:"14px"}}>/months</span></p>
          <p style={{ fontStyle: "normal", fontWeight: "Bold", fontSize: "25px", textAlign: "left" }}>{tittle}</p>
          <p style={{ fontStyle: "normal", fontWeight: "bold", fontSize: "18px", textAlign: "left" }}>{city}</p>
          <p style={{ fontStyle: "normal", fontWeight: "normal", fontSize: "18px", textAlign: "left" }}>{address}</p>
        </Item>
        <Item sx={{ boxShadow: "none" }}>
        <Stack direction="row" spacing={2}  >
            <Item style={{fontSize:"12.5px"}}><BedOutlinedIcon style={{position:"relative",top:"6px"}}/>&nbsp;{bed} &nbsp; Beds</Item>
            <Item style={{fontSize:"12.5px"}}><BathtubOutlinedIcon style={{position:"relative",top:"6px"}}/>&nbsp;{bath} &nbsp;Bathrooms</Item>
            <Item style={{fontSize:"12.5px"}}><CropOriginalOutlinedIcon style={{position:"relative",top:"6px"}}/>&nbsp;{area}m<sup>2</sup></Item>
        </Stack>
        </Item>
      </Stack>
    )
}
export default PropertyCard;