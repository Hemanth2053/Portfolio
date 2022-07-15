import React from 'react'
import CV from '../../Assets/Resume.pdf'

const Btncont = () => {
  return (
    <div className="btn-container">
        <a href={CV} download className="btn">Get CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default Btncont