import React from 'react'
import './header.css'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import { Headersocials } from './Headersocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="left">
          <h4>Hello, We Are</h4>
          <h1>TechVentures</h1>
          <h3 className='text-light'>Web Development Agency and Software Consultancy</h3>
          <CTA/>
          <Headersocials/>
        </div>

        <div className="me">
          <img src={ME} alt="" />
        </div>

      </div>
    </header>
  )
}
