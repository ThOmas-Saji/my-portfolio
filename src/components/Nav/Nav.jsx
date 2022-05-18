import React, { useState } from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active": ""}><AiOutlineHome/><p id='tooltip'>Home</p></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active": ""}><AiOutlineUser/><p id='tooltip'>About</p></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active": ""}><BiBook/><p id='tooltip'>Skills</p></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active": ""}><RiServiceLine/><p id='tooltip'>Projects</p></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active": ""}><BiMessageSquareDetail/><p id='tooltip'>Contact</p></a>
    </nav>
  )
}
export default Nav