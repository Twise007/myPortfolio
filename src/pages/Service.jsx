import React from 'react'
import { Purple,Title } from '../components/element'
import { Timeline, TimelineItem, TlIcon } from '../Styles/Service'
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { motion } from 'framer-motion';


const Service = () => {

  return (
    <motion.div
    whileInView={{y: [0, -100],
    opacity: [0, 1]}}
    transition={{duration:3}}
    id="service">
        <Purple>
        <Title>My Offered Service and technologies
            <p style={{color:'var(--color-white)'}}>Listed below are the service and technologies I use to prooffer solution to your needs</p>
        </Title>       
        <Timeline>

            <TimelineItem>
                    <TlIcon>
                        < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>Network Engineer</h5>
                    <p>
                        With over 5 years of exprience as a network engineer, 
                        in designing, troubleshooting and maintaining network facilities.
                    </p>
            </TimelineItem>

            <TimelineItem>
                    <TlIcon>
                    < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>front end engineer</h5>
                    <p>
                        I am very efficient and effective in <br/>
                        <span>HTML, CSS, SCSS, JS, REACTJS</span> <br/> in building a
                        beautiful user expreience. 
                    </p>
            </TimelineItem>

            <TimelineItem>
                    <TlIcon>
                    < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>back end engineer</h5>
                    <p>
                        I am very efficient and effective in <br/>
                        <span>NODE JS, EXPRESS JS, MONDO DB</span>
                        <br/> in building a
                        stressless technology for the users. 
                    </p>
            </TimelineItem>

            <TimelineItem>
                    <TlIcon>
                    < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>ui designer</h5>
                    <p>
                        Being a full stack engineer the knowledge of UI tools should never be
                         over emphasis. I have some knowledge in <span>ABODE XD</span> and <span>FIGMA.</span>
                    </p>
            </TimelineItem>

        </Timeline>
        </Purple>
    </motion.div>
  )
}

export default Service