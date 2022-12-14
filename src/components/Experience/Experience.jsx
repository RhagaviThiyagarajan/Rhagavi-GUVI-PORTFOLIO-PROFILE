import React,{useContext}from 'react';
import {themeContext} from '../../Context';
import './Experience.css';

export default function Experience() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;


  return (
    <div className="experience" id="Experience">
    <div className="achievement">
    <div className="circle" style={{color:darkMode?'var(--orange)':''}}>4+
    </div>

    <span style={{color:darkMode?'white':''}}>Years</span>
    <span>Experience in Development</span>
    </div>
    <div className="achievement">
        <div className="circle"
         style={{color:darkMode?'var(--orange)':''}}>4</div>
        <span style={{color:darkMode?'white':''}}>Completed</span>
        <span>Projects</span>
    </div>


    <div className="achievement">
        <div className="circle" style={{color:darkMode?'var(--orange':''}}>4+</div>
        <span style={{color:darkMode?'white':''}}>Languages</span>
        <span>Proficient in handling</span>
    <span></span></div>
    </div>
  )
}

