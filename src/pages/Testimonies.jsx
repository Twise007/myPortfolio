import React from 'react';


import { Purple, Title } from '../components/element'
import { Containers, Card, ImgContent, CardImage, CardImages  } from '../Styles/Testimonies';
import '../Styles/SaasAboutMe/About.scss';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import FemiPic from '../data/femi.png';
import IsrealPic from '../data/isreal.png';
import SamuelPic from '../data/samuel.png';


const Testimonies = () => {
  return (
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}
    id="testimonies">
    <div className='containx'>
    <Purple>
       <Title>Testimonies
          <p style={{color:"var(--color-white)"}}>testimonies from some of my former employers and colleagues </p>
      </Title>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}   
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='swiper'
      >
        <SwiperSlide className='swipersslide'>
        <Containers>                  
          <Card>
            <ImgContent>
              <CardImages>
                <CardImage>
                  <img src={FemiPic} alt="testimonies pic" className='cardimg' />
                </CardImage>
              </CardImages>
            </ImgContent>
              <Title style={{borderRadius:"0px 0px 5px 5px"}}>
                Ademiju Femi
                <p style={{padding:'10px'}}>colleague</p>
                <p style={{height:"200px"}}>Tunde is a very hardworking and has passion for coding (eye-catching products or the exact design). He delivers his tasks right before the deadline with attention to detail and produces product solutions</p>
              </Title>
          </Card>
          </Containers>
        </SwiperSlide>
        <SwiperSlide className='swipersslide'>
        <Containers>                  
          <Card>
            <ImgContent>
              <CardImages>
                <CardImage>
                  <img src={SamuelPic} alt="testimonies pic" className='cardimg' />
                </CardImage>
              </CardImages>
            </ImgContent>
              <Title style={{borderRadius:"0px 0px 5px 5px"}}>Samuel Linus
              <p style={{padding:'10px'}}>Instructor</p>
                <p style={{height:"200px"}}>Lorem ipsum dolor sit amet</p></Title>
          </Card>
          </Containers>
        </SwiperSlide>
        <SwiperSlide className='swipersslide'>
        <Containers>                  
          <Card>
            <ImgContent>
              <CardImages>
                <CardImage>
                  <img src={IsrealPic} alt="testimonies pic" className='cardimg' />
                </CardImage>
              </CardImages>
            </ImgContent>
              <Title style={{borderRadius:"0px 0px 5px 5px"}}>Isreal
              <p style={{padding:'10px'}}>colleague</p>
                <p style={{height:"200px"}}>Lorem ipsum dolor sit amet</p></Title>
          </Card>
          </Containers>
        </SwiperSlide>
      </Swiper>

    </Purple>
    </div>
    </motion.div>
  )
}

export default Testimonies;