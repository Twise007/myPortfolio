import React  from 'react';
import '../Styles/SaasAboutMe/About.scss';
import { Section, Title} from '../components/element';
import { motion } from 'framer-motion';


import Aboutpic from '../data/aboutpic.png';
import html from '../data/html-5.png';
import css from '../data/css-3.png';
import js from '../data/js.png';
import cisco from '../data/cisco.png';
import github from '../data/github.png';
import adobe from '../data/adobe-xd.png';
import react from '../data/react.png';
import bootstrap from '../data/bootstrap.png';
import wordpress from '../data/wordpress.png';
import chakra from '../data/chakra-ui.png';
import materialui from '../data/material-ui.png';
import sass from '../data/sass.png';
import styled from '../data/styled-component.svg';
import tailwind from '../data/tailwindcss.svg';

const photos = [
  {id: '1', image: html },{id: '2', image: css },
  {id: '3', image: js },{id: '4', image: cisco },
  {id: '5', image: github },{id: '6', image: adobe},
  {id: '7', image: react },{id: '8', image: bootstrap },
  {id: '9', image: wordpress },{id: '0', image: chakra },
  {id: '11', image: materialui },{id: '12', image: sass },
  {id: '13', image: styled },{id: '14', image: tailwind },
  {id: '1', image: html },{id: '2', image: css },
  {id: '3', image: js },{id: '4', image: cisco },
  {id: '5', image: github },{id: '6', image: adobe},
  {id: '7', image: react },{id: '8', image: bootstrap },
  {id: '9', image: wordpress },{id: '0', image: chakra },
  {id: '11', image: materialui },{id: '12', image: sass },
  {id: '13', image: styled },{id: '14', image: tailwind },

];

const About = () => {
  return (
    <div id='about'>
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}>
      <Section>
        <div className='about'>
          <div className="main">
            <img src={Aboutpic} alt="about pic" />
            <div className='about-text'>
            <h1>About me</h1>
            <h5>PERSONAL DETAILS</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit aliquam perferendis quis recusandae, itaque illum. Maxime voluptas blanditiis omnis consequatur velit accusantium, obcaecati quisquam aspernatur quaerat libero rerum corrupti adipisci error non? Ratione vero quibusdam dolores officia voluptatibus aspernatur doloribus quasi dolorum reprehenderit iusto, minus optio? Exercitationem veritatis, itaque fugiat obcaecati recusandae, odit sint aliquid error doloremque quas atque quis possimus. Libero saepe praesentium voluptates facere temporibus obcaecati accusamus. Provident fugit quia incidunt ullam voluptate ratione, maiores distinctio? Ex, commodi ad saepe reprehenderit et expedita corporis odit quibusdam doloremque, eaque dolores? Vero pariatur corporis nisi maiores alias impedit ex.</p>
            </div>
          </div>
        </div>
       </Section>
    </motion.div>

    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}>
    <Section>
      <Title>technologies
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis expedita reprehenderit veniam modi vero asperiores molestias eligendi deserunt ad?</p>
      </Title>
    </Section>
    </motion.div>
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}>
    <div className='skills'>
      {photos.map((item, index) => 
       <img src= {item.image} alt="skills" /> 
      )} 
    </div>
    </motion.div>
    </div >   

  )
}

export default About