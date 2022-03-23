import React from 'react'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/saubhagya-ashish/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/saubhagyaashish" target="_blank"><BsGithub/></a>
        <a href="https://medium.com/@saubhagya-ashish" target="_blank"><BsMedium/></a>


    </div>
    
  )
}

export default HeaderSocial