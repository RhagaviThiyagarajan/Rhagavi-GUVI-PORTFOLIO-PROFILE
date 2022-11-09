import React from 'react';
import './Card.css';
import { Link } from 'react-scroll';
function Card({emoji,heading,detail,color}) {
  return (
    <div className="card" style={{borderColor:{color}}}>
        <img src={emoji} alt=""/>
        <span>{heading}</span>
        <span>{detail}</span>
        <Link spy={true} to='services' smooth={true} activeClass="activeClass">
        <button className="c-button">LEARN MORE</button>
        </Link>
    </div>
  )
}

export default Card