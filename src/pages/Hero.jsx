import React from 'react';
import ProfilePicture from '../data/profile.png'
import { Btn } from '../components/element';
import { Herosection, Textz } from '../Styles/Hero';
import { motion } from "framer-motion";


const Hero = () => {

    const text = document.getElementsByClassName ('.text');

    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "a Network Engineer";
      }, 0);
      setTimeout(() => {
        text.textContent = "a Software Engineer";
      }, 4000);
      setTimeout(() => {
        text.textContent = "a Telecoms Engineer";
      }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);
  return ( 
    <Herosection>   
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.div
          animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}>
          <img src={ProfilePicture} alt='profilepiciture' className="max-w-sm rounded-lg shadow-2xl" />
          </motion.div>
          <div>
          <p className='font-bold p2'>Hi, I am</p>
          <h1 className="font-bold p3 ">Oke Babatunde<br /></h1>
          <Textz><span className='text'></span></Textz>
          <p className="py-6" style={{marginRight: '200px'}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Btn>download my cv</Btn>
          </div>
        </div>
    </Herosection>
  )
}

export default Hero