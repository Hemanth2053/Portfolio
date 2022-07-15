import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from 'react-icons/md'
import {FaLaptopCode} from 'react-icons/fa'
import {IoMdCodeWorking} from 'react-icons/io'


function ExperienceTimeline() {
  return (
    <div>
        <VerticalTimeline>
            <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "white", color: "black" , size:"1"}}
             contentArrowStyle={{ borderRight: "7px solid white" }}
             
             date="2020 - present"
             iconStyle={{ background: "white", color: "black", size:"1" }}
             
             icon={<IoMdCodeWorking />}>
                <div>
                  <h5>Freelance Front-End Developer</h5>
                  <p>Started my carrer as freelance <b>Front-end web Developer.</b>Getting projects and Builds the front-end portion of websites and web applications.  </p>
                  <a href="#project" className="btn btn-primary">More about projects</a>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "white", color: "black" }}
             contentArrowStyle={{ borderRight: "7px solid  white" }}
             date="2019 - 2020"
             iconStyle={{ background: "white", color: "black" }}
             icon={<FaLaptopCode/>}>
                <h5>Physics Teacher</h5>
                <p>Jaya Metriculation Higher Secondary School, Chennai</p>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: "white", color: "black" }}
             contentArrowStyle={{ borderRight: "7px solid  white" }}
             date="2017 - 2019"
             iconStyle={{ background: "white", color: "black", textAlign: "left" }}
             icon={<MdSchool/>}>
                <div>
                  <h5>M.Sc Physics</h5>
                  <p>D G Vaishnav College, Chennai.</p>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default ExperienceTimeline