import React from 'react'
import  './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer__links">
      <div className="Social__links">
      <a calss="social-link" href="#" target="_blank">FacebookIcon</a>
      <a calss="social-link" href="#" target="_blank">InstagramIcon</a>
      <a calss="social-link" href="#" target="_blank">YouTubeIcon</a>
       </div>

       <div className="member Footer__links">
      <a className="member Footer__link" href="#">Audio Descrppiption</a>
      <a className="member Footer__link" href="#">Investor Realtions</a>
       </div>
       
      <div className="member Footer__links">
      <a className= "member Footer__link" href="#">Legal Notices</a>
      <a className= "member Footer__link" href="#">Help centre</a>
      <a className= "Jmember Footer__link" href="#">Jobs</a>
      </div>
      
      <div className="member Footer__links">

      <a className= "member Footer__link" href="#">Cookie Preferences</a>
      <a className= "member Footer__link" href="#">Gift cards</a>
      <a className= "member Footer__link" href="#">Terms of Use</a>
    
        </div>
      
      <div className="member Footer__links">
      <a className= "member Footer__link"  href="#">Corporate Information</a>
       <a className= "member Footer__link" href="#">About</a>
       <a className= "member Footer__link" href="#">Privacy Policy</a>
      </div>
    
       <div className="member Footer__links">
       <a className= "member Footer__link"href="#">Terms of Service</a>
       <a className= "member Footer__link" href="#">Contact Us</a>
       </div>

      <div className="footer__copyright">
      <p className="footer__copyright">
        © 1997-2024 Netflix Clone.
        
      </p>
      </div>
      </div>
    </footer>


    </div>
  )
}

export default Footer