import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Steppers from '../../static/stepper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
  
}));
const list=(company,role,image)=>{
  return(
    <Item>
          <Stack direction="row" spacing={2} >
            <Item sx={{height:"90px"}}><img src={image} alt="Girl in a jacket" width="70" height="70"/></Item>
            <Item sx={{boxShadow:"none"}}>
            <p style={{fontStyle:"normal",fontWeight:"Bold",fontSize:"25px",textAlign:"left"}}>{company}</p>
            <p style={{fontStyle:"normal",fontWeight:"normal",fontSize:"18px",textAlign:"left"}}>{role}</p>
              <Steppers/>
            </Item>
          </Stack>
        </Item>
  )
}
const companies=[
  {
    name:"google",
    role:"DevOps Engineer",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name:"tesle",
    role:"Quality Engineer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQHDufcEAlOR_elnoOiUcaC1RETpz00yjCA&usqp=CAU"
  },
  {
    name:"amazon",
    role:"Senior Software Developer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNThMg30NNbdy3GFt9y1bFDqG9t8Pa58Y2A&usqp=CAU"
  },
  {
    name:"BMW",
    role:"Front-end Developer",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOc5Yru8ba37HVoMPxbXR0EPTOLEA6v8wUow&usqp=CAU"
  },
  {
    name:"Meta",
    role:"Product Manager",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-kiYFsxYPYtj5HVdGpDkZRnRX6N5zJTCVg&usqp=CAU"
  },
]
export default function AppliedApplications() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      
          {companies.map((item)=>(
            list(item.name,item.role,item.image)
          ))}
        
      </Stack>
    </Box>
  );
}
