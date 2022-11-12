import React, { useState } from 'react';
import { BsJustifyRight, BsXLg, BsFillChatQuoteFill, BsFillLaptopFill, BsFillPersonLinesFill, BsFillPieChartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Head, NavMenu} from '../Styles/Header';
import '../Styles/SaasAboutMe/About.scss';
import { Btn } from '../components/element';


const Header = () => {

  const [toggle, setToggle ] = useState(false);
  
  return (
    <>
    <div className='bar' style={{ top: '0px', position: 'sticky', borderBottom: '.5px solid', color: 'var(--color-primary)',zIndex:'10' }}>
        <div className="navbar" style={{padding:'20px', background: 'var(--color-white)'}} >
          <div className="flex-1">
          <a href="#home" ><Btn><h1>My Portfolio</h1></Btn> </a>
          </div>
          <Head>    
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              {['about', 'service', 'projects', 'testimonies', 'contact me'].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            </div>
          </Head>

    <NavMenu>
      <BsJustifyRight onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <BsXLg onClick={() => setToggle(false)} />
            <ul className='menu'>
              <p>
                <li>
                  <a href="#about" onClick={() => setToggle(false)}>
                    <BsFillPersonLinesFill/>
                  About
                  </a>
                </li>
                <li>
                  <a href="#service" onClick={() => setToggle(false)}>
                    < BsFillLaptopFill/>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setToggle(false)}>
                    < BsFillPieChartFill/>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#testimonies" onClick={() => setToggle(false)}>
                    < BsFillChatQuoteFill/>
                    Testimonies
                  </a>
                </li>
                <li>
                  <a href="#contact me" onClick={() => setToggle(false)}>
                    < BsFillChatQuoteFill/>
                    Contact Me
                  </a>
                </li>
              </p>
            </ul>
          </motion.div>
        )}
    </NavMenu>
    </div>
    </div> 
  </>
  )
}

export default Header