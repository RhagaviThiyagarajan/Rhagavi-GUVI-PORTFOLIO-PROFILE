import React,{useContext} from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"


import FloatingDiv from "../FloatingDiv/FloatingDiv.jsx";
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';


function Intro() {
  
const transition={
  duration:2,
  type:'spring'};

//context
const theme=useContext(themeContext);
const darkMode=theme.state.darkMode;
  return (
    <div className="Intro" id="Intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color:darkMode?'white':""}}>Hey! I Am</span>
            <span>Rhagavi Thiyagarajan</span>
            <span>Technically Sophisticated Professional with almost 5 years of experience in the areas of Software
Development,Team Management, and Support Analyst.Exposure to both frontend and backend
technologies (MERN).Experience in executing projects involving: REST API integration/creation
            </span>
            </div>


      
            <Link spy={true} to='contact' smooth={true} activeClass="activeClass">
            <button className="button i-button">Hire Me</button>
            </Link>
<div className="i-icons">
   
    <a href="https://github.com/RhagaviThiyagarajan" target="_blank" without rel="noreferrer" >
    <img src={Github} alt="github"/>
    </a>
 
   <a href="https://www.linkedin.com/in/rhagavi/" target="_blank" without rel="noreferrer" >
   <img src={LinkedIn} alt="LinkedIn"/>
   </a>
     
    
    </div>
</div>
    <div className="i-right">


       <img src={vector1} alt=""/>
       <img src={vector2} alt=""/>
       
      
<motion.img 
initial={{left:'-36'}}
whileInView={{left:'-24%'}}
transition={transition}

src={glassesimoji} alt=""/>


       <motion.div 
       initial={{top:'-4',left:'74%'}}
       whileInView={{left:'48%'}}
       transition={transition}
       className="floating-div">

    <FloatingDiv
     image={crown} txt1='MERN' txt2='Developer'/>
     </motion.div>


<motion.div
initial={{left:'9rem',top:'18rem'}}
whileInView={{left:'0rem'}}
transition={transition}
className="floating-div">

    <FloatingDiv 
    image={thumbup}
     txt1='Best Design' txt2= 'Award'/>
</motion.div>

<div className="blur" 
style={{background:"rgb(238 210 255)"}}></div>
  <div className="blur" style={{
    background: '#C1F5FF',
    TOP:'17rem',
    width:'21rem',
    height:'11rem',
    left:'-9rem',

  }}></div>  </div>
    </div>
  )
}

export default Intro