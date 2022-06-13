import React from 'react'
import CV from "../../Assets/Thomas-Saji.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1nLjFnv_HlVC5T1tkmH1RC0P63pu3ua3t/view?usp=sharing" target="_blank" className='btn btn-primary'>View CV</a>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA