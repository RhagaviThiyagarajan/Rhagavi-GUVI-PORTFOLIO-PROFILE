import React from 'react'
import './Footer.css';
import Gmail from '@iconscout/react-unicons/icons/uil-mailbox';
import Linkeden from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import wave from '../../img/wave (1).png';

function Footer() {
  return (
    <div className="footer">
        <img src={wave} alt="" 
        style={{width:'100%'}}/>
        <div className="f-content">
            <span>rhagavi3@gmail.com</span>
            <div className="f-icons">
            
              <Gmail color="white" size='3rem'/>
              
           <a href="https://www.linkedin.com/in/rhagavi/" target="_blank" without rel="noreferrer" >
           <Linkeden color="white" size='3rem'/>
           </a>
              
              <a href="https://github.com/RhagaviThiyagarajan/Projects-GUVI-GithubLinks/tree/main" target="_blank" without rel="noreferrer" >
                <Github color="white" size='3rem'/>
                </a>
            </div>
        </div>
        </div>
  )
}

export default Footer
