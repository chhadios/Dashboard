import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Stack } from "@mui/system";
import { Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Footer = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            <div style={{ width: "100%", height: "220px", backgroundColor: "grey" }}>
                <div style={{ width: "100%", hight: "30px", textAlign: "center" }}>
                    <p style={{ fontSize: "18px" }}> Find us here</p>
                    <p ><LinkedInIcon style={{ cursor: "pointer" }} /> <TwitterIcon style={{ cursor: "pointer", marginRight: "3px" }} />
                        <InstagramIcon style={{ cursor: "pointer" }} /> <FacebookIcon style={{ cursor: "pointer" }} /></p>
                </div>
                <Divider sx={{ backgroundColor: "rgb(43, 39, 39)" }} />

                <div style={{ marginTop: "5px",overflow:"hidden",backgroundColor: "grey" }}>
                    
                <Stack direction="row"   justifyContent="space-between"  style={{ background:"grey",marginLeft: matches ? "100px":"2px",marginRight:matches ?"100px":"2px"}}  >
                                <Item style={{ background:"grey", boxShadow:"none"}} >
                                    <p style={{ fontSize: "18px",fontWeight: "bold"  }}>Resources</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Blog</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>ebooks</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Comparison Guid</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Website Grader</p>
                                </Item>
                                <Item   style={{ background:"grey", boxShadow:"none"}}>
                                    <p style={{ fontSize: "18px",fontWeight: "bold"  }}>Company</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>About</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Careers</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Pricing</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>FAQ</p>
                                </Item>
                                <Item  style={{ background:"grey", boxShadow:"none"}}>
                                    <p style={{ fontSize: "18px",fontWeight: "bold"  }}>Get Help</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Help Center</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Privacy Policy</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Terms</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Contact us</p>
                                </Item>
                            </Stack>
                        
                </div>

                <div style={{ width: "100%", textAlign: "center", position: "relative",top:"13px"  }}>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}> Copyright 2022-2023 chhadios| It is free to use</p>

                </div>
            </div>
        </>
    )
}
export default Footer;

