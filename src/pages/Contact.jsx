import React, { useRef } from 'react';
import { Section, Btn } from '../components/element';

import '../Styles/Contact.css';
import Homesvg from'../data/home.svg';
import Contactsvg from '../data/contact.svg';
import { motion } from 'framer-motion';

//using Emailjs
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_vuig1ws',
       'template_adi78l2', 
       form.current, 
       '6MLX4o61sRGCZz9F0')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        },
        (error) => {
            console.log(error.text);
        });
    };

  return (
    <motion.div
    whileInView={{y: [0, -100], 
    opacity: [0, 1]}}
    transition={{duration:3}}>
    <Section>
    <div className="container">
        <div className="formContainer">
          <div className='contactTitle'>
            <h2>Contact page</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit, reiciendis expeditaLorem ipsum dolor sit amet consectetur 
            adipisicing elit. Sit, reiciendis expedita</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                      <input type="text" name="user_name" required />
                      <span className="text">Your Name</span>
                      <span className="line"></span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                      <input type="email" name="user_email" required />
                      <span className="text">Your Email</span>
                      <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox textbox">
                      <textarea type="text" name="message"  required />
                      <span className="text">Write here ....</span>
                      <span className="line"></span>
                    </div>
                </div>
            </div>
            <button> <Btn id="sign-up-btn">Submit</Btn> </button>   
          </form>
        </div>
      

      <div className="panels-container">
        <div className="panel left-panel">
          {/*svg gotten from undraw.co*/} 
          <img src={Contactsvg} alt="contact svg" className="image"></img>
        </div>
        <div className="panel right-panel">
          {/*svg gotten from undraw.co*/} 
          <img src={Homesvg} alt="contact svg" className="image"></img>
        </div>
      </div>

    </div>

    </Section>
    </motion.div>

  )
}

export default Contact