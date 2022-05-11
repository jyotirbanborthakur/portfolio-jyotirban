import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
const Footer = () => {
  return (
    <footer><a href="#" className='footer_logo'>Jyotirban</a>
     <ul className="permalinks">
<li><a href="#"></a></li>
<li><a href="#About">About</a></li>
<li><a href="#Experience">Experience</a></li>
<li><a href="#Services">Services</a></li>
<li><a href="#Portfolio">Portfolio</a></li>
<li><a href="#Testimonials">Testimonials</a></li>
<li><a href="#Contact">Contact</a></li>

</ul>
    <div className='footer_socials'>
      <a href="https://www.facebook.com/zutirban.borthakur.9" target="_blank"><BsFacebook/></a>
      <a href="https://twitter.com/JyotirbanGarg" target="_blank"><AiFillTwitterCircle/></a>
      <a href="https://www.instagram.com/zutirban_borthakur/" target="_blank"><AiFillInstagram/></a>
      <a href="https://www.linkedin.com/in/jyotirban-borthakur-2185b3230/" target="_blank"><ImLinkedin/></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Jyotirban portfolio. All rights reserved.2022</small>
    </div>
    </footer>
  )
}

export default Footer