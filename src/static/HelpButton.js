import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[800],
  '&:hover': {
    backgroundColor: grey[900],
  },
}));

export default function SupportButton() {

  return (
      <ColorButton variant="contained" 
       sx={{width:"40px",height:"40px", borderRadius:"40px",position:"fixed",top:"92%",right:"92%",color:"white",fontWeight:"bold"}}>
       Help</ColorButton>
  );
}
