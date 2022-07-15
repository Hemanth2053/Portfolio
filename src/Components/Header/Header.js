import React from 'react'
import Btncont from './Btncont'
import CODEPNG from '../../Assets/pngegg.png'
import './Header.css'
import {GrDown} from 'react-icons/gr'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello... I'm</h5>
            <h1>Hemanth Kumar</h1>
            <h3 className="text-light">Front-End Developer</h3>
            <Btncont />
            <div className="me">
              <img className="logo" src={CODEPNG} alt="me" />
            </div>
            
        </div>
         
    </header>
  )
}

export default Header