import React from 'react'
import './Skill.css'
import Code from '../../Assets/code-4.webp'
import ProgressBar from 'react-customizable-progressbar'

const Skill = () => {
  return (
    <section id="skill" className="skill-container">
      <h6>Get to know</h6>
      <h2 className="header-skill">About Me</h2>

      <div className="study-bar">
        <div className="about-study" >
          <div className="study-img">
            <img src={Code} alt="code" />
          </div>
        </div> 
        <div>
          <div className="about-card">
              <h5>Who I'm ?</h5>
              <p>Front end developer with 2+ years of experience designing and building 
                responsive web design and mobile apps in the Retail industry. Proficient with CSS and JS Frameworks, with extensive knowledge of UX and user psychology. 
                Notable achievements include boosting the conversion rate of an existing website with improved code and design.    </p>
          </div>
        </div>
      </div>

      <div>
        
        
      </div>
      
      <h4>Programming Languages</h4>
      <div className="progress-skill">
        <div className="progress-1">
        <div className="progress-inn" >
         <ProgressBar 
          radius={60}
          progress={85}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">85%</div>
          </ProgressBar>
          <h5>HTML  </h5>
        </div>


        <div className="progress-inn" >
        
          <ProgressBar 
          radius={60}
          progress={90}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">90%</div>
          </ProgressBar>
          <h5>CSS  </h5>
        </div>


        <div className="progress-inn" >
       
          <ProgressBar 
          radius={60}
          progress={80}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">80%</div>
          </ProgressBar>
          <h5>JavaScript  </h5>
         </div>
        


        
          <div className="progress-inn" >
          
          <ProgressBar 
          radius={60}
          progress={50}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">50%</div>
          </ProgressBar>
          <h5>C++  </h5>
        </div>
        <div className="progress-inn" >
          
          <ProgressBar 
          radius={60}
          progress={60}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">60%</div>
          </ProgressBar>
          <h5>python  </h5>
          </div>
        
          </div>

        <div>
        <h4 className="header-skill">Developement Libraries</h4>
        <div className="progress-2">
          <div className="progress-inn" >
        
          <ProgressBar 
          radius={60}
          progress={85}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">85%</div>
          </ProgressBar>
          <h5>React JS  </h5>
        </div>


        <div className="progress-inn" >
        
          <ProgressBar 
          radius={60}
          progress={90}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">90%</div>
          </ProgressBar>
          <h5>Material UI  </h5>
        </div>


        <div className="progress-inn" >
        
          <ProgressBar 
          radius={60}
          progress={80}
          strokeWidth={2}
          trackStrokeColor="black"
          strokeColor="white"
          trackStrokeWidth={2}
          pointerRadius={8}
          pointerStrokeWidth={4}
          pointerStrokeColor="white"
          
          >
            <div className="indicator">80%</div>
          </ProgressBar>
          <h5>Bootstrap  </h5>
        </div>
        </div>
        </div>
       
      </div>
    </section >
  )
}

export default Skill