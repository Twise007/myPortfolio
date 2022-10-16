import React, { useState } from 'react';
import { BsJustifyRight, BsXLg, BsFillChatQuoteFill, BsFillLaptopFill, BsFillPersonLinesFill, BsFillPieChartFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Head, Nav_Menu} from '../Styles/Header';
import '../Styles/SaasAboutMe/About.scss';


const Header = () => {

  const [toggle, setToggle ] = useState(false);
  
  return (
    <>
    <div className='bar' style={{ top: '0px', position: 'sticky', borderBottom: '.5px solid', color: 'var(--color-primary)',zIndex:'10' }}>
        <div className="navbar" style={{padding:'20px', background: 'var(--color-white)'}} >
          <div className="flex-1">
            <Link to="/"className="btn btn-ghost normal-case text-xl"><h1>My Portfolio</h1></Link>
          </div>
          <Head>    
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0 ">
              {['About', 'Service', 'Projects', 'Testimonies', 'contact me'].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            </div>
          </Head>
          </div>
    </div> 
    <Nav_Menu>
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
                  <a onClick={() => setToggle(false)}>
                    <BsFillPersonLinesFill/>
                  About
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggle(false)}>
                    < BsFillLaptopFill/>
                    Services
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggle(false)}>
                    < BsFillPieChartFill/>
                    Projects
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggle(false)}>
                    < BsFillChatQuoteFill/>
                    Testimonies
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggle(false)}>
                    < BsFillChatQuoteFill/>
                    Contact Me
                  </a>
                </li>
              </p>
            </ul>
          </motion.div>
        )}
    </Nav_Menu>
 
  </>
  )
}

export default Header