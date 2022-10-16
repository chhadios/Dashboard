import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from "@mui/material";
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <>
            <div style={{ width: "100%", height: "190px", backgroundColor: "grey" }}>
                <div style={{ width: "100%", hight: "30px", textAlign: "center" }}>
                    <p style={{ fontSize: "18px" }}> Find us here</p>
                    <p ><LinkedInIcon style={{ cursor: "pointer" }} /> <TwitterIcon style={{ cursor: "pointer", marginRight: "3px" }} />
                        <InstagramIcon style={{ cursor: "pointer" }} /> <FacebookIcon style={{ cursor: "pointer" }} /></p>
                </div>
                <Divider sx={{ backgroundColor: "rgb(43, 39, 39)" }} />

                <div style={{ marginTop: "5px",overflow:"hidden" }}>
                    
                            <Grid container justifyContent="center" spacing={60} >
                                <Grid item >
                                    <p style={{ fontSize: "16px" }}>Resources</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Blog</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>ebooks</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Comparison Guid</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Website Grader</p>
                                </Grid>
                                <Grid item style={{ fontSize: "16px" }}>
                                    <p style={{ fontSize: "18px" }}>Company</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>About</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Careers</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Pricing</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>FAQ</p>
                                </Grid>
                                <Grid item style={{ fontSize: "16px" }}>
                                    <p style={{ fontSize: "18px" }}>Get Help</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Help Center</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Privacy Policy</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Terms</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal" }}>Contact us</p>
                                </Grid>
                            </Grid>
                        
                </div>

                <div style={{ width: "100%", hight: "30px", textAlign: "center", position: "absolute", top: "162%" }}>
                    <p style={{ fontSize: "14px", fontWeight: "lighter" }}> Copyright 2022-2023 chhadios| It is free to use</p>

                </div>
            </div>
        </>
    )
}
export default Footer;

