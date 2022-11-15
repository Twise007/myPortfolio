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
        <Title>My Offered Service
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, reiciendis expedita reprehenderit veniam modi vero asperiores molestias eligendi deserunt ad?</p>
        </Title>       
        <Timeline>

            <TimelineItem>
                    <TlIcon>
                        < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>Network Engineer</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
            </TimelineItem>

            <TimelineItem>
                    <TlIcon>
                    < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>Software Engineer</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
            </TimelineItem>

            <TimelineItem>
                    <TlIcon>
                    < BsFillBriefcaseFill />
                    </TlIcon>
                    <h5>ui designer</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
            </TimelineItem>

        </Timeline>
        </Purple>
    </motion.div>
  )
}

export default Service