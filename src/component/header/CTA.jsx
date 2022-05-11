import React from 'react'
import cv from '../../assets/Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'><a href={cv} download className='btn btn-primary'>Download CV</a>
    <a href="#Contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA