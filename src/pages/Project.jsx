import React, { useState, useEffect } from 'react';
import {Btn, Section,   HeadTag, Title } from '../components/element';
import { motion } from "framer-motion";

//import "../Styles/project.css";
import { BsCodeSlash } from 'react-icons/bs';
import { Projectbox } from '../Styles/Project';

// data
const cardData = {
    data:
    [
      {id: '1', imageName: 'project1.png', tag:'web design', visit:'', 
      desc:'Web design built on React, go through it and send me your thought about it then let set you up with one.', 
      title:'portfolio website', link:'https://github.com/'},
      {id: '2', imageName: 'img2.jpg', tag:'web develop', visit:'https://tee-o-todo.netlify.app/', 
      desc:'A Todo-App that helps you keep track of your activties. This project is built on HTML, CSS, JS.', title:'todo-app', link:'https://github.com/'},
      {id: '3', imageName: 'img3.jpg', tag:'UIUX Design', visit:'Visit', 
      desc:'', title:'title3'},
      {id: '4', imageName: 'img4.jpg', tag:'web design', visit:'Visit', 
      desc:'', title:'title4'},
      {id: '5', imageName: 'weather.jpg', tag:'web develop', visit:'https://tee-o-weather.netlify.app/', 
      desc:'The is Weather app build on React and Bootstrap. This apps was made to help you get the weather report of major city around the world', title:'Weather App', link:'https://github.com/'},
    ]
};

const Project = () => {

  const [tag, setTag] = useState('all');
  const [filteredData, setFilteredData] = useState([]);
  useEffect( () => {   
    tag === 'all' ? setFilteredData(cardData.data)
     : setFilteredData(cardData.data.filter(item => item.tag === tag))
    }, 
    [tag]
  );

  return (
      <Section style={{paddingBottom:'100px'}} id="projects">
        <Title>My Latest Featured Projects
            <p>Take your time to go through some of my project am sure you will be impress</p>
        </Title>
        <HeadTag  handleSetTag= {setTag}>
          <ul>
            <li> <TagButton name='all' handleSetTag= {setTag} tagActive={ tag === 'all' ? true : false}/></li>
            <li> <TagButton name='web design' handleSetTag= {setTag} tagActive={ tag === 'web design' ? true : false}/></li>
            <li> <TagButton name='web develop' handleSetTag= {setTag} tagActive={ tag === 'web develop' ? true : false}/></li>
            <li> <TagButton name='UIUX Design' handleSetTag= {setTag} tagActive={ tag === 'UIUX Design' ? true : false}/></li>
          </ul>
        </HeadTag>
        <motion.div>
        <Projectbox>
        {filteredData.map((item, index) => (                   
        <div className="card w-96 shadow-xl m-3" style={{ marginBottom: '50px', color: 'var(--color-white)', background:'var(--color-secondary)'}}>
          <figure className='p-5'><img src={`/images/${item.imageName}`} alt='project pic' style={{width:'300px', height:'300px', borderRadius:'10px', background:'100%'}}/></figure>
          <div className="card-body pt-0" style={{background:'var(--color-secondary)', width:'300px', height:"250px"}}>
            <h2 className="card-title" style={{justifyContent:"center", textTransform:"capitalize"}} >{item.title}</h2>
            <p style={{color: 'var(--color-white)', textAlign:"start"}}>{item.desc}</p>
            <div className="card-actions justify-between">
              <button>
                <Btn style={{fontSize:"20px"}}>
                  <a href={item.link}  target="_blank" rel="noopener noreferrer">
                    <BsCodeSlash />
                  </a>
                </Btn>
              </button>
              <button>
                <Btn>
                  <a href={item.visit}  target="_blank" rel="noopener noreferrer">
                    Check it out
                  </a>
                </Btn>
              </button>
            </div>
          </div>
        </div>
        ))}
        </Projectbox>
        </motion.div>
      </Section>
  )
}

//button filter
const TagButton = ( {name, handleSetTag, tagActive } ) => {
  return <button className=
        { `tag ${ tagActive ? 'active' : null}`}
         onClick={()=> handleSetTag(name)}> 
        { name.toUpperCase ()}{} 
        </button>
}

export default Project;