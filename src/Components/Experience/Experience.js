import React from 'react'
import './Experience.css'
import {VscDeviceMobile} from 'react-icons/vsc'
import {VscDebugAll} from 'react-icons/vsc'
import {RiFunctionFill} from 'react-icons/ri'
import {DiUikit} from 'react-icons/di'
import ExperienceTimeline from './ExperienceTimeline'

const Experience = () => {
  return (
    <section id="experience" className="exp-main">
      <h6>About</h6>
      <h3>Studies & Experience</h3>
      <div className="exp-educ-main">
         <ExperienceTimeline />
      </div>

  
    <div className="exp-prio-des">
      
    
        <h5>Priorities :</h5>
        <div className="priority-col-1">
          
          <div className="icon-exp">
            <VscDeviceMobile/>
            <p>Responsive Design</p>
          </div>
          <div className="icon-exp">
            <VscDebugAll/>
            <p>Testing & Debugging</p>
          </div>
          <div className="icon-exp">
            <RiFunctionFill/>
            <p>Functionality</p>
          </div>
          <div className="icon-exp">
            <DiUikit/>
            <p>Friendly UI</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience