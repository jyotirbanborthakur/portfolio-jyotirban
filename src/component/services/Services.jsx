import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='Services'>
      <h1>What I can offer</h1>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className="service">
          <div className='service_head'>
            <h3>Web development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I have an experience in single page and multiple page react based projects</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>A good website looks can easily attract your client, you can check my designing skills in the UI/UX projects section</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I can help you with design ideas using prototypes and wireframings</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>In todays scenerio SEO is the top most priority of an organisation, I have built a News App using some SEO knowledge</p>
            </li>
          
          </ul>
        </article>
      
        <article className="service">
          <div className='service_head'>
            <h3>Photography</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I am a travel photographer and a DOP(Director of Picture)</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Some of my photos are featured in Canon India</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Do check my Instagram for new clicks that I have done recently</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I can help you with video editing and photo editing for your projects</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Am also into sript writing, two of my movies got selected for All India Movie Fest 2021</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>  )
}

export default services