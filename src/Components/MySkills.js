import React from 'react';
import '../Styles/MySkills.css';
import MySkillsData from '../Data/MySkillsData';

const MySkills = () => {
  return (
    <div className='container'>
        <div className="section-tile">
            <div className="skills">My Skills</div>
            <div className="expertise">My Expertise</div>
        </div>
        <div className="row">
          {MySkillsData.map((i)=>{
            return(
              <div className="card">
                
                <img className='icon' src={i.image}/>
                <div className="content">
                <div className='title'>{i.title}</div>
                <div className='info'>{i.description}</div>
                </div>

              </div>
            )

          })}
        </div>
      
    </div>
  )
}

export default MySkills
