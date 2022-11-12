import React from 'react';


import { Section, Title, Containers } from '../components/element'
import { Card, ImgContent, CardImage, Cardcontent, CardImages  } from '../Styles/Testimonies';
import '../Styles/SaasAboutMe/About.scss';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import ProfilePicture from '../data/profile.png'



const Testimonies = () => {
  return (
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}
    id="testimonies">
    <div className='containx'>
    <Section>
             <Title>Testimonies
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis expedita reprehenderit veniam modi vero asperiores molestias eligendi deserunt ad?</p>
            </Title>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}   
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,

        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}

        modules={[Autoplay, Pagination, Navigation]}
        className='swiper'
      >
        <SwiperSlide className='swipersslide'>
          <Containers>                  
          <Card>
            <ImgContent>
              <CardImages>
                <CardImage>
                  <img src={ProfilePicture} alt="testimonies pic" className='cardimg' />
                </CardImage>
              </CardImages>
            </ImgContent>
            <Cardcontent>
              <Title>Esther Eromosele
                <p>Company</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur dolor corrupti magnam quas placeat at. Quo amet libero ab exercitationem. Enim, tempora nostrum eligendi consequuntur cumque repellat maxime error!</p>
                        </Title>
            </Cardcontent>
          </Card>
          </Containers>
        </SwiperSlide>
        <SwiperSlide className='swipersslide'>
          <Containers>                  
          <Card>
            <ImgContent>
              <CardImages>
                <CardImage>
                  <img src={ProfilePicture} alt="testimonies pic" className='cardimg' />
                </CardImage>
              </CardImages>
            </ImgContent>
            <Cardcontent>
              <Title>Esther Eromosele
                <p>Company</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur dolor corrupti magnam quas placeat at. Quo amet libero ab exercitationem. Enim, tempora nostrum eligendi consequuntur cumque repellat maxime error!</p>
                        </Title>
            </Cardcontent>
          </Card>
          </Containers>
        </SwiperSlide>
        <SwiperSlide className='swipersslide'>
          <Containers>                  
          <Card>
            <ImgContent>
              <CardImages>
                <CardImage>
                  <img src={ProfilePicture} alt="testimonies pic" className='cardimg' />
                </CardImage>
              </CardImages>
            </ImgContent>
            <Cardcontent>
              <Title>Esther Eromosele
                <p>Company</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur dolor corrupti magnam quas placeat at. Quo amet libero ab exercitationem. Enim, tempora nostrum eligendi consequuntur cumque repellat maxime error!</p>
                        </Title>
            </Cardcontent>
          </Card>
          </Containers>
        </SwiperSlide>
      </Swiper>

    </Section>
    </div>
    </motion.div>
  )
}

export default Testimonies