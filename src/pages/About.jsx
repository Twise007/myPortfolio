import React  from 'react';
import '../Styles/SaasAboutMe/About.scss';
import { Btn, Purple} from '../components/element';
import { motion } from 'framer-motion';


import Aboutsvg from '../data/aboutsvg.svg';
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
  {id: '15', image: html },{id: '16', image: css },
  {id: '17', image: js },{id: '18', image: cisco },
  {id: '19', image: github },{id: '6', image: adobe},
  {id: '20', image: react },{id: '21', image: bootstrap },
  {id: '22', image: wordpress },{id: '23', image: chakra },
  {id: '24', image: materialui },{id: '25', image: sass },
  {id: '26', image: styled },{id: '27', image: tailwind },

];

const About = () => {
  return (
    <div id='about' >
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}>
      <Purple>
        <div className='about'>
          <div className="main">
            <img src={Aboutsvg} alt="about pic" />
            <div className='about-text'>
            <h1>About me</h1>
            <h5>hi there, i'm Tunde!</h5>
            <p>
            A MERN stack developer that proffer professional, efficient,
            and effecftive design service for Start-Up and Cooperate companies 
            in maximazing there vision, there mission and there pontentials.
            <br/>
            <br/>
            I'm also a productive nerd, resilient and goal oriented person.<br/>
            Tech as always been a passion for me, IOT and AI are my future ambition.
            I had a significant years of expreince as a Network engineer and being 
            certified by Cisco, web gives me the ability to explore and create my world. 
            I enjoy making research, solving problems, taking a 
            lead, and watching football or playing football.
            <br/><br/>Click on the button below to know more about me as we explore the world
            together.
            <br/>
            <br/>
            <a href='#contact me'><Btn style={{color:"var(--color-white)", background:"var(--color-secondary", 
            border:"1px solid"}}>contact me</Btn></a>
            </p>
          </div>
          </div>
        </div>
      </Purple>
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