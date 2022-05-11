import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMedalFill} from 'react-icons/ri'
import {IoIosApps} from 'react-icons/io'

import {FiPhoneCall} from 'react-icons/fi'

import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
   
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?'active':''}><AiFillHome/></a>
      <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav==='#About'?'active':''}><FaUserAlt/></a>
      <a href="#Experience" onClick={()=>setActiveNav('#Experience')} className={activeNav==='#Experience'?'active':''}><BiBook/></a>
      <a href="#Services"onClick={()=>setActiveNav('#Services')} className={activeNav==='#Services'?'active':''}><RiServiceLine/></a>
      <a href="#Portfolio"onClick={()=>setActiveNav('#Portfolio')}className={activeNav==='#Portfolio'?'active':''}><IoIosApps/></a>
      <a href="#Testimonials"onClick={()=>setActiveNav('#Testimonials')}className={activeNav==='#Testimonials'?'active':''}><RiMedalFill/></a>
      <a href="#Contact"onClick={()=>setActiveNav('#Contact')}className={activeNav==='#Contact'?'active':''}><FiPhoneCall/></a>
    </nav>
  )
}

export default Nav


