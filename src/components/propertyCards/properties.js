import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import TodoModal from '../../static/modals/FilterModal';
import PropertyCard from './PropertyCard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,


}));

const companies = [
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"New York",
    rate: 20,
    bed:3,
    bath:2,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Chicago",
    rate: 44,
    bed:4,
    bath:3,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Los Angeles",
    rate: 15,
    bed:2,
    bath:2,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"New York",
    rate: 25,
    bed:4,
    bath:2,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Chicago",
    rate: 44,
    bed:4,
    bath:2,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Los Angeles",
    rate: 35,
    bed:3,
    bath:3,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"New York",
    rate: 29,
    bed:2,
    bath:2,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Chicago",
    rate: 15,
    bed:1,
    bath:1,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Los Angeles",
    rate: 56,
    bed:4,
    bath:2,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Philadelphia",
    rate: 78,
    bed:6,
    bath:3,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Phoenix",
    rate: 89,
    bed:7,
    bath:5,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Houston",
    rate: 54,
    bed:5,
    bath:3,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Philadelphia",
    rate: 78,
    bed:5,
    bath:4,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Phoenix",
    rate: 44,
    bed:4,
    bath:3,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Houston",
    rate: 55,
    bed:4,
    bath:3,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Philadelphia",
    rate: 67,
    bed:6,
    bath:3,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Phoenix",
    rate: 95,
    bed:6,
    bath:4,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Houston",
    rate: 100,
    bed:7,
    bath:4,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"New York",
    rate: 20,
    bed:3,
    bath:2,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Chicago",
    rate: 44,
    bed:4,
    bath:3,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Los Angeles",
    rate: 15,
    bed:2,
    bath:2,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"New York",
    rate: 25,
    bed:4,
    bath:2,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Chicago",
    rate: 44,
    bed:4,
    bath:2,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Los Angeles",
    rate: 35,
    bed:3,
    bath:3,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"New York",
    rate: 29,
    bed:2,
    bath:2,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Chicago",
    rate: 15,
    bed:1,
    bath:1,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Los Angeles",
    rate: 56,
    bed:4,
    bath:2,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Philadelphia",
    rate: 78,
    bed:6,
    bath:3,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Phoenix",
    rate: 89,
    bed:7,
    bath:5,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Houston",
    rate: 54,
    bed:5,
    bath:3,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Philadelphia",
    rate: 78,
    bed:5,
    bath:4,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Phoenix",
    rate: 44,
    bed:4,
    bath:3,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Houston",
    rate: 55,
    bed:4,
    bath:3,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Philadelphia",
    rate: 67,
    bed:6,
    bath:3,
    area:"8X10",
    image: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Phoenix",
    rate: 95,
    bed:6,
    bath:4,
    area:"12X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwp7eeSMGwtsviiwzOdctsB2BsRbq8f8Vxg&usqp=CAU"
  },
  {
    name: "Palm Harbor",
    address: "2699 GreenValley Highland Lake,FL",
    city:"Houston",
    rate: 100,
    bed:7,
    bath:4,
    area:"9X11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl6cGalooGBPOtukLxH6oD7TmVxZeFOnqNw&usqp=CAU"
  },
  
]
export default function AppliedApplications() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const data= JSON.parse(localStorage.getItem("data"))
  const bedrooms=data.bedRooms;
  const bathrooms=data.bathRooms;
  const location=data.Location;

  return (
    <>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {companies.map((item)=>(
          
         data.PriceRange[0]<=item.rate && data.PriceRange[1]>=item.rate && (item.bed===bedrooms || !bedrooms) && (item.bath===bathrooms || !bathrooms) && (item.city===location || !location)?
          
          <Grid item xs={2} sm={4} md={4}>
            <Item style={{padding:"0",borderRadius:"15px"}}>
            <PropertyCard image={item.image} tittle={item.name} address={item.address} rate={item.rate} bed={item.bed} bath={item.bath} area={item.area} city={item.city}/>
            </Item>
            </Grid>
            :<></>
            
          ))}
       
      </Grid>
    
    <TodoModal open={open} handleClose={handleClose}/>

    </>
  );
}

