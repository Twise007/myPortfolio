import React, { useState, useEffect } from 'react';
import {Btn, Section, Title } from '../components/element';
import '../Styles/Project.css';


  const cardData = {
    data:
    [
      {id: '1', imageName: 'project1.png', tag:'web design', btn:'READ MORE 1', desc:'lhhdgvfgvhqwagkdsgwa', title:'title1'},
      {id: '2', imageName: 'img2.jpg', tag:'web develop', btn:'READ MORE 2', desc:'lhhdgvfgvhqwagkdsgwa', title:'title2' },
      {id: '3', imageName: 'img3.jpg', tag:'UIUX Design', btn:'READ MORE 3', desc:'lhhdgvfgvhqwagkdsgwa', title:'title3'},
      {id: '4', imageName: 'img4.jpg', tag:'web design', btn:'READ MORE 4', desc:'lhhdgvfgvhqwagkdsgwa', title:'title4'},
      {id: '5', imageName: 'img5.jpg', tag:'web develop', btn:'READ MORE 5', desc:'lhhdgvfgvhqwagkdsgwa', title:'title5'},
    ]
}
  
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
        <Section id="projects">
            <Title>My Latest Featured Projects
                <p>Take your time to go through some of my project am sure you will be impress</p>
            </Title>
        <section  handleSetTag= {setTag}>
          <ul>
            <li> <TagButton name='all' handleSetTag= {setTag} tagActive={ tag === 'all' ? true : false}/></li>
            <li> <TagButton name='web design' handleSetTag= {setTag} tagActive={ tag === 'web design' ? true : false}/></li>
            <li> <TagButton name='web develop' handleSetTag= {setTag} tagActive={ tag === 'web develop' ? true : false}/></li>
            <li> <TagButton name='UIUX Design' handleSetTag= {setTag} tagActive={ tag === 'UIUX Design' ? true : false}/></li>
          </ul>
          <div className="product">
            {filteredData.map((item, index) => 
            <div className='itemBox'>
              <img src={`/images/${item.imageName}`} alt='project pic'/>
              <Btn style={{marginTop:"10px"}}>{item.btn}</Btn>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
            )}
          </div>
        </section>
        </Section>
  )
}

//button
const TagButton = ( {name, handleSetTag, tagActive } ) => {
  return <button className=
        { `tag ${ tagActive ? 'active' : null}`}
         onClick={()=> handleSetTag(name)}> 
        { name.toUpperCase ()}{} 
        </button>
}

export default Project;