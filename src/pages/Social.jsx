import React from 'react';
import { SocialIcon } from '../Styles/Social';
import { BsGithub, BsWhatsapp, BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';


const Social = () => {
  return (
      <>
        <SocialIcon>
          <li><a href="https://wa.me/+2348102904585"><BsWhatsapp /></a></li>
          <li><a href='https://facebook.com/OgbeniTundeoke'><BsFacebook /></a></li>
          <li><a href='https://twitter.com/tundeoke007'><BsTwitter /></a></li>
          <li><a href='https://github.com/Twise007'><BsGithub/></a></li>
          <li><a href='https://linkedin.com/in/tunde-oke-607684171'><BsLinkedin/></a></li>
          </SocialIcon>
     </>
  )
}

export default Social