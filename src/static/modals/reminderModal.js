import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius:"20px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function ReminderModal({ open, handleClose }) {

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
                            Set a Reminder
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {/* <InputLabel>Email/Mobile No.</InputLabel> */}
                            <TextField id="outlined-normal" label="Email/Mobile No." variant="outlined" />
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Button onClick={handleClose}>Save</Button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
