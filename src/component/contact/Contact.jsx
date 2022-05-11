import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('zutirban', 'template_k1wqpl6', form.current, 'D1r6gi0HmfYvkWgMX')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="Contact">
      <h1>Get in touch</h1>
      <h2>
        Contact me
      </h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>jyotirbanborthakur708@gmail</h5>
          <a href="mailto:jyotirbanborthakur708@gmail.com"target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
          <BsLinkedin className='contact_option-icon'/>
          <h4>LinkedIn</h4>
          <h5>jyotirban-borthakur-2185b3230</h5>
          <a href="https://www.linkedin.com/in/jyotirban-borthakur-2185b3230/"target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <IoLogoWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91(XXX-XXX-8894)</h5>
          <a href="https://api.whatsapp.com/send?phone=8638378894&text=Hi%20Jyotirban" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='your name' required/>

        <input type='email' name='name' placeholder='your email' required/>
<textarea name="message" row='10' placeholder="your messasge"></textarea>
<button type='submit' className='btn btn-primary'> send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact