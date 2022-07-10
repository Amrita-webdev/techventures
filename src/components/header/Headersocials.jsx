import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaDribbbleSquare } from 'react-icons/fa'

export const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://www.github.com" target="_blank"><FaGithub/></a>
        <a href="https://www.dribble.com" target="_blank"><FaDribbbleSquare/></a>
    </div>
  )
}
