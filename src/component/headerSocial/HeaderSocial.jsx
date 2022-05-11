import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.linkedin.com/in/jyotirban-borthakur-2185b3230/" target="blank"><BsLinkedin/></a>
    <a href="https://www.instagram.com/zutirban_borthakur/" target="blank"><AiFillInstagram/></a>
    <a href="https://twitter.com/JyotirbanGarg" target="blank"><AiFillTwitterSquare/></a>
    <a href="https://t.me/Jyotirban" target="blank"><BsTelegram/></a>
    <a href="https://www.facebook.com/zutirban.borthakur.9" target="blank"><AiFillFacebook/></a>
    <a href="https://api.whatsapp.com/send?phone=8638378894&text=Hi%20Jyotirban" target="blank"><IoLogoWhatsapp/></a>

    </div>
  )
}

export default HeaderSocial

