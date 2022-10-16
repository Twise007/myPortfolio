import React, { useState, useEffect} from 'react';
import {Section, Title } from '../components/element';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';



const Project = () => {

  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({y: 0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filrterWorks, setFilrterWorks] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  


  const handleWorkFilter = (item) => {
    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
  }

  return (
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}>
        <Section>
            <Title>My Latest Featured Projects
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis expedita reprehenderit veniam modi vero asperiores molestias eligendi deserunt ad?</p>
            </Title>
          <div className='app__work-filter'>
            {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
              <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              >

              </div>
            ))}
          </div>

          <motion.div
            animate={animateCard}
            transition={{duration: 0.5, delayChildren: 0.5}}
            className="app__work-portfolio"
          >
            {filrterWork.map((work, index)=>(
              <div className='app__work-item app__flex' key={index}>
                <div className='app__work-img app__flex'>
                  <img src={urlFor()} alt={work.name} />
                </div>
              </div>
            ))}
          </motion.div>

        </Section>
    </motion.div>
  )
}

export default Project