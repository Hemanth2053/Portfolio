import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {GrLinkedin} from 'react-icons/gr'
import './Contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tq44gdn', 'template_pij20sh', form.current, 'pDNBfZV2n0fRhnnN2')
  }


  return (
    <section id="contact" className="contact-main">
      
      <h2>Contacts</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact-option">
            <AiOutlineMail className="contact-icons"/>
            <h5>Email</h5>
            <p>hemanthr2053@gmail.com</p>
            <a href="mailto:hemanthr2053@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
          
            <BsWhatsapp className="contact-icons"/>
            <h5>Whatsapp</h5>
            <p>+91-8072733799</p>
            <a href="https://api.whatsapp.com/send?phone=8072733799">Send a message</a>
        
            </article>

          <article className="contact-option">
        
            <GrLinkedin className="contact-icons"/>
            <h5>linkedin</h5>
            <p>Hemanth kumar R</p>
            <p>hemanth-kumar-444b81210</p>
          
            </article>
        
          </div>
          <div className="form-contact"> 
            <h6>Drop a Message</h6>
            <form ref={form} onSubmit={sendEmail}>
             
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="name" placeholder="Your Email" required />
              <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn">Send Message</button>

            </form>
          </div>
      </div>
    </section>
  )
}

export default Contact