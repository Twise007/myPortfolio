import React, { useState } from 'react';
import { BsJustifyRight, BsXLg, BsFillChatQuoteFill, BsFillLaptopFill, BsFillPersonLinesFill, BsFillPieChartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Head, NavMenu} from '../Styles/Header';
import '../Styles/SaasAboutMe/About.scss';
import { Btn } from '../components/element';
import Logo from '../data/favicon.ico';



const Header = () => {

  const [toggle, setToggle ] = useState(false);
  
  return (
    <>
    <div className='bar' style={{ top: '0px', position: 'sticky', borderBottom: '.5px solid', color: 'var(--color-primary)',zIndex:'10' }}>
        <div className="navbar" style={{padding:'20px', background: 'var(--color-white)'}} >
          <div className="flex-1">
          <a href="#home" >
          <img src={Logo} alt='logo'/>
          </a>
          </div>
          <Head>    
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              {['about', 'service', 'projects', 'testimonies', 'contact me'].map((item) => (
                <li key={`link-${item}`}>
                 <Btn style={{border:'none'}}><a href={`#${item}`}>{item}</a></Btn>
                </li>
              ))}
            </ul>
            </div>
          </Head>

    <NavMenu>
    <label className="btn btn-circle swap swap-rotate" style={{background: 'var(--color-secondary)', border:"none"}}>
            <input type="checkbox" onClick={()=>setToggle(!toggle)} />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>  
    </label>
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
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