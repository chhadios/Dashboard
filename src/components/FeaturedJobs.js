import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import '../styles.css'
import AlertBar from '../static/notification';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

const companies=[
  {
    name:"google",
    role:"DevOps Engineer",
    date:"03-Jan-2023",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name:"tesle",
    role:"Quality Engineer",
    date:"03-Jan-2023",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQHDufcEAlOR_elnoOiUcaC1RETpz00yjCA&usqp=CAU"
  
  },
  {
    name:"google",
    role:"DevOps Engineer",
    date:"03-Jan-2023",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name:"tesle",
    role:"Quality Engineer",
    date:"03-Jan-2023",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQHDufcEAlOR_elnoOiUcaC1RETpz00yjCA&usqp=CAU"
  
  },
  {
    name:"google",
    role:"DevOps Engineer",
    date:"03-Jan-2023",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name:"tesle",
    role:"Quality Engineer",
    date:"03-Jan-2023",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQHDufcEAlOR_elnoOiUcaC1RETpz00yjCA&usqp=CAU"
  
  },
  
]
export default function FeaturedJobs() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const list=(company,role,image,date)=>{
  
  return(
    <Item sx={{borderRadius:"20px"}}>
          <Stack direction="row" spacing={2} sx={{width:"100%"}}>
            <Item sx={{height:"40px",width:"40px",textAlign:"center",padding:"auto",marginTop:"10px"}}><img src={image} alt="Girl in a jacket" style={{paddingTop:"10%",width:"80%"}}/></Item>
            <Item sx={{boxShadow:"none"}}>
            <p style={{fontStyle:"normal",fontWeight:"Bold",fontSize:"20px",textAlign:"left"}}>{company}</p>
            <p style={{fontStyle:"normal",fontWeight:"normal",fontSize:"14px",textAlign:"left"}}>{role}</p>
            </Item>
            
            <Item sx={{boxShadow:"none"}}>
              <button style={{float:"right",cursor:"pointer", marginTop:"38%",width:"90px",backgroundColor:"white",borderRadius:"6px",height:"25px",fontSize:"14px"}} onClick={handleClick}>Save</button>
            </Item>
            <Item sx={{boxShadow:"none"}}>
              <button style={{float:"right",cursor:"pointer", marginTop:"38%",width:"90px",backgroundColor:"white",borderRadius:"6px",height:"25px",fontSize:"14px"}}>Apply</button>
            </Item>
          </Stack>
        </Item>
  )
}
  return (
    <>
    
    <Box className='featured' style={{marginTop:"45px"}}>
      <Stack spacing={2}  className='featured' >
      
          {companies.map((item)=>(
            list(item.name,item.role,item.image,item.date)
          ))}
        
      </Stack>
    </Box>
    <AlertBar open={open} handleClose={handleClose} type={"success"} message={"Saved Successfully"}/>
    </>
  );
}
