import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {RiComputerFill} from 'react-icons/ri'
import {AiFillProject} from 'react-icons/ai'
import {MdDescription} from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {

  const [activeNav, setActiveNav] = React.useState("#")

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiFillHome/></a>
      <a href="#skill" onClick={() => setActiveNav("#skill")} className={activeNav === "#skill" ? "active" : ""}><RiComputerFill/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><MdDescription/></a>
      <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""}><AiFillProject/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiFillContacts/></a>
    </nav>
  )
}

export default Navbar