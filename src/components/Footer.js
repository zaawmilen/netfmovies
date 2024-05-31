import React from 'react'
import { Facebook,Instagram, YouTube } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box,IconButton,Typography } from '@mui/material';
import './Footer.css';
const Footer = () => {
  return (
    <div footer className="footer">
      
       <footer className="footer">
      <div className="footer__links">
      <div className="Social__links">
      <a href="https://www.facebook.com/netflix" ></a>
      <a href="https://www.instagram.com/user/Netflix" ></a>
      <a href="https://www.youtube.com/user/Netflix" ></a>
       
       <Box className="footer">
      
      <Box className="footer-icons">
        <IconButton
          href="https://www.facebook.com/netflix"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          color="primary"
        >
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/user/Netflix"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          color="secondary"
        >
          <Instagram fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/user/Netflix"
          target="_blank"
          rel="noopener"
          aria-label="YouTube"
          color="secondary"
        >
          <YouTube fontSize="large" />
        </IconButton>
      </Box>
    </Box>
</div>
</div>

       <div className="member Footer__links">
      <a href="#">Audio Descrppiption</a>
      <a  href="#">Investor Realtions</a>
       </div>
       
      <div className="member Footer__links">
      <a href="#">Legal Notices</a>
      <a href="#">Help centre</a>
      <a href="#">Jobs</a>
      </div>
      
      <div className="member Footer__links">

      <a  href="#">Cookie Preferences</a>
      <a  href="#">Gift cards</a>
      <a  href="#">Terms of Use</a>
    
        </div>
      
      <div className="member Footer__links">
      <a   href="#">Corporate Information</a>
       <a  href="#">About</a>
       <a  href="#">Privacy Policy</a>
      </div>
    
       <div className="member Footer__links">
       <a href="#">Terms of Service</a>
       <a  href="#">Contact Us</a>
       </div>

      <div className="footer__copyright">
      <p className="footer__copyright">
        © 1997-2024 Netflix Clone.       
      </p>
      </div>
      {/* <Typography variant="body2" color="textSecondary" align="center">
        &copy; {new Date().getFullYear()} Netflix, Inc.
      </Typography> */}
  
    </footer>
    </div>
  )
}

export default Footer