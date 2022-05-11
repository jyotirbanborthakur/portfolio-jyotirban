import React from 'react'
import '../header/Header.css'
import CTA from './CTA'
import ME from '../../assets/selft.png'
import HeaderSocial from '../headerSocial/HeaderSocial'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const Header = () => {
  
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I am</h4>
        <h1>Jyotirban</h1>
        <h4 className='text-light'>FrontEnd Developer</h4>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#Contact"  className='  scroll_down'>Scroll Down <BsFillArrowRightCircleFill className='scroll-icon'/></a>
      </div>
    </header>
  )
}

export default Header