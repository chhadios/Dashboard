import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Steppers from '../../static/stepper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TodoModal from '../../static/modals/todoModal';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,


}));

const companies = [
  {
    name: "google",
    role: "DevOps Engineer",
    stage: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name: "tesle",
    role: "Quality Engineer",
    stage: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQHDufcEAlOR_elnoOiUcaC1RETpz00yjCA&usqp=CAU"
  },
  {
    name: "google",
    role: "DevOps Engineer",
    stage: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
  },
  {
    name: "tesle",
    role: "Quality Engineer",
    stage: 0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQHDufcEAlOR_elnoOiUcaC1RETpz00yjCA&usqp=CAU"
  },

  
]
export default function AppliedApplications() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const list = (company, role, image, stage) => {
    return (
      <Item sx={{borderRadius:"20px"}}>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "30px", display: "flex" }} >
          <Item sx={{ height: "70px", width: "70px", textAlign: "center" }}><img src={image} alt="Girl in a jacket" style={{ paddingTop: "10%", width: "80%" }} /></Item>
          <Item sx={{ boxShadow: "none" }}>
            <p style={{ fontStyle: "normal", fontWeight: "Bold", fontSize: "25px", textAlign: "left" }}>{company}</p>
            <p style={{ fontStyle: "normal", fontWeight: "normal", fontSize: "18px", textAlign: "left" }}>{role}</p>
            <Steppers stage={stage} />
          </Item>
          <Item sx={{ width: "30%", height: "80%", boxShadow: "none" }}>
            <ArrowForwardIosIcon sx={{ float: "right", cursor: "pointer" }} />
            {stage===1 ?<button style={{ float: "right", cursor: "pointer", marginTop: "48%", width: "140px", backgroundColor: "white", borderRadius: "10px", height: "30px", fontSize: "16px" }} onClick={handleOpen}>Check Todos</button>
            :stage===2 ?<button style={{ float: "right", cursor: "pointer", marginTop: "48%", width: "140px", backgroundColor: "white", borderRadius: "10px", height: "30px", fontSize: "16px" }}>Mock Interviews</button>
            :<button style={{ float: "right", cursor: "pointer", marginTop: "48%", width: "180px", backgroundColor: "white", borderRadius: "10px", height: "30px", fontSize: "16px" }}>Cancel Application</button>}
          </Item>
        </Stack>
      </Item>
    )
  }
  return (
    <>
    <Box >
      <Stack spacing={2} >
      
          {companies.map((item)=>(
            list(item.name,item.role,item.image,item.stage)
          ))}
        
      </Stack>
    </Box>
    <TodoModal open={open} handleClose={handleClose}/>
    </>
  );
}
