import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function valuetext(value) {
    return `${value}K`;
}
const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 10,
        label: '10k',
    },
    {
        value: 20,
        label: '20k',
    },
    {
        value: 30,
        label: '30k',
    },
    {
        value: 40,
        label: '40k',
    },
    {
        value: 50,
        label: '50k',
    },
    {
        value: 60,
        label: '60k',
    },
    {
        value: 70,
        label: '70k',
    },
    {
        value: 80,
        label: '80k',
    },
    {
        value: 90,
        label: '90k',
    },
    {
        value: 100,
        label: '100k',
    },
];

export default function TodoModal({ open, handleClose }) {
    const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.up('sm'));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: matches?"40%" : "100%",
    height: matches? "70%": "75%",
    borderRadius: "20px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
    const [Location, setLocation] = React.useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const [Pricevalue, setPriceValue] = React.useState([0, 100]);

    const handlePriceChange = (event, newValue) => {
        setPriceValue(newValue);
    };
    const [Bedvalue, setBedValue] = React.useState();

    const handleBedChange = (event, newValue) => {
        setBedValue(newValue);
    };
    const [Bathvalue, setBathValue] = React.useState();

    const handleBathChange = (event, newValue) => {
        setBathValue(newValue);
    };
    
      
    const handleFilter = () => {
        const data={
            bedRooms:Bedvalue,
            bathRooms:Bathvalue,
            Location:Location,
            PriceRange:Pricevalue
          }
        window.localStorage.setItem("data",JSON.stringify(data))
        handleClose();
    };
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
                            Filter
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Stack
                                direction='column'
                                spacing={2}
                                style={{ marginBottom: "20px" }}
                                justifyContent="space-between"
                            >
                                <Item style={{ width: "100%", boxShadow: "none" }}>
                                    <FormControl variant="standard" sx={{ width: "100%" }}>
                                        <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={Location}
                                            onChange={handleLocationChange}
                                            label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="New York">New York</MenuItem>
                                            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                                            <MenuItem value="Chicago">Chicago</MenuItem>
                                            <MenuItem value="Houston">Houston</MenuItem>
                                            <MenuItem value="Phoenix">Phoenix</MenuItem>
                                            <MenuItem value="Philadelphia">Philadelphia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Item>
                                <Item style={{ paddingLeft: "20px", paddingRight: "20px", width: "100%" }}>
                                    Price Range
                                    <Slider
                                        getAriaLabel={() => 'Price range'}
                                        value={Pricevalue}
                                        onChange={handlePriceChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        step={10}
                                        marks={marks}
                                        style={{fontSize:"2px"}}
                                    />
                                </Item>
                                <Item style={{boxShadow:"none"}}>
                                    <Stack direction='row' justifyContent="space-between" style={{boxShadow:"none"}}>
                                        <Item style={{ width: "45%" }}>Bed Rooms
                                            <Slider
                                                
                                                
                                                getAriaValueText={valuetext}
                                                valueLabelDisplay="auto"
                                                onChange={handleBedChange}
                                                marks
                                                min={1}
                                                max={10}
                                            />
                                        </Item>
                                        <Item style={{width: "45%" }}>Bath Rooms
                                        <Slider
                                                
                                               
                                                getAriaValueText={valuetext}
                                                valueLabelDisplay="auto"
                                                onChange={handleBathChange}
                                                marks
                                                min={1}
                                                max={10}
                                            />
                                        </Item>
                                    </Stack>
                                </Item>

                            </Stack>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Button onClick={handleFilter} variant="contained" style={{width:"100%"}}>Apply Filters</Button>
                            <Button onClick={handleClose}>Close</Button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// function valuetext(value) {
//     return `${value}°C`;
// }

// export default function DiscreteSlider() {
//     return (
//         <Box sx={{ width: 300 }}>
//             <Slider
//                 aria-label="Temperature"
//                 defaultValue={30}
//                 getAriaValueText={valuetext}
//                 valueLabelDisplay="auto"
//                 step={10}
//                 marks
//                 min={10}
//                 max={110}
//             />
//             <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
//         </Box>
//     );
// }
