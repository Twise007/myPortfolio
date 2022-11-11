import React from 'react';
import ProfilePicture from '../data/profile.png';
import { Btn } from '../components/element';
import { Herosection, Textz } from '../Styles/Hero';

import { Typewriter } from 'react-simple-typewriter'
import Social from './Social';


const Hero = () => {
  return ( 
    <>
    <Herosection>   
        <div className="hero-content flex-col lg:flex-row-reverse" style={{maxWidth:"100%", paddingLeft:'5rem', paddingRight:'5rem'}}>
          <img src={ProfilePicture} alt='profilepiciture' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
          <p className='font-bold p2'>Hi, I am</p>
          <h1 className="font-bold p3 ">Oke Babatunde<br /></h1>
          <Textz>
            <span className='text'>
              <Typewriter 
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={90}
                delaySpeed={1500}
                words={['Network Engineer', 'Web designer', 'Web developer']}
              />
            </span>
          </Textz>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Btn>download my cv</Btn>
          </div>
        </div>
      <Social/>
    </Herosection>
    </>
  )
}

export default Hero