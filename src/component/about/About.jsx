import React from 'react'
import './About.css'
import { FaAward } from 'react-icons/fa'
import { DiAtom } from 'react-icons/di'
import { FaPeopleCarry } from 'react-icons/fa'
import me2 from '../../assets/self.png'
const About = () => {
  return (
    <section id="About">
      <h1>Get to know me</h1>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={me2}/>
          </div>
        </div>
         <div className="about_content">
           <div className="about_cards">
             <article className='about_card'>
               <FaAward className='about_icon'/>
               <h5>Experience</h5>
               <small>7 month of industry experience</small>
               </article>
               <article className='about_card'>
               <DiAtom className='about_icon'/>
               <h5>Projects</h5>
               <small>1+ Years Working</small>
               </article>
               <article className='about_card'>
               <FaPeopleCarry className='about_icon'/>
               <h5>Clients</h5>
               <small>2+ Years Working</small>
               </article>
           </div>
           <p>
             Hi, am Jyotirban I hold a Master degree in Computer Application from Lovely Professional University, Punjab. After my Masters I worked had for Tiniyo Pvt Limited as a Software Developer and Graphics Designer.
             Apart from my software field am also into Digital Content creation. Till now I have worked with 10+ clients. Am also a travel photographer and a geek traveller.
           </p>
           <a href="#Contact" className='btn btn-primary'>Let's talk</a>
         </div>
      </div>
      </section>
  )
}

export default About