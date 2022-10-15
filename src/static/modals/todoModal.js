import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 600,
    borderRadius:"20px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function TodoModal({ open, handleClose }) {

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} >
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Todo List
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                           <div style={{border:"0.5px solid grey",marginTop:"15px",borderRadius:"10px",width:"100%",height:"70px",padding:"10px"}}>
                                <h4>Technical Assessment</h4>
                                <button style={{float:"right",cursor:"pointer",width:"120px"
                                ,backgroundColor:"white",borderRadius:"6px",height:"30px",fontSize:"14px"}}>Take Assesment</button>
                                <p><span style={{fontWeight:"bold"}}>deadline</span>:19-Nov-2022</p>
                           </div>
                           <div style={{border:"0.5px solid grey",marginTop:"15px",borderRadius:"10px",width:"100%",height:"70px",padding:"10px"}}>
                                <h4>Technical Assessment</h4>
                                <button style={{float:"right",cursor:"pointer",width:"120px"
                                ,backgroundColor:"white",borderRadius:"6px",height:"30px",fontSize:"14px"}}>Take Assesment</button>
                                <p><span style={{fontWeight:"bold"}}>deadline</span>:19-Nov-2022</p>
                           </div>
                           <div style={{border:"0.5px solid grey",marginTop:"15px",borderRadius:"10px",width:"100%",height:"70px",padding:"10px"}}>
                                <h4>Technical Assessment</h4>
                                <button style={{float:"right",cursor:"pointer",width:"120px"
                                ,backgroundColor:"white",borderRadius:"6px",height:"30px",fontSize:"14px"}}>Take Assesment</button>
                                <p><span style={{fontWeight:"bold"}}>deadline</span>:19-Nov-2022</p>
                           </div>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Button onClick={handleClose}>Close</Button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
