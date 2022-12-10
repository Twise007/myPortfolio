import React from 'react';
import { SocialIcon } from '../Styles/Social';
import { BsGithub, BsWhatsapp, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';


const Social = () => {
  return (
      <>
        <SocialIcon>
          <li><a href="https://wa.me/+2348102904585" target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a></li>
          <li><a href='https://facebook.com/OgbeniTundeoke' target="_blank" rel="noopener noreferrer"><BsFacebook /></a></li>
          <li><a href='https://twitter.com/tundeoke007' target="_blank" rel="noopener noreferrer"><BsTwitter /></a></li>
          <li><a href='https://github.com/Twise007' target="_blank" rel="noopener noreferrer"><BsGithub/></a></li>
          <li><a href='https://linkedin.com/in/tunde-oke-607684171' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></li>
          </SocialIcon>
     </>
  )
}

export default Social