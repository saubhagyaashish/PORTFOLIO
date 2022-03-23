import React, { useEffect, useState } from 'react';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import {RiServiceFill} from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'
import './nav.css'

const Nav = () => {
  const [ActiveNav, setActiveNav] = useState("#")
  
  return (
    <nav>
      <a href='#'  onClick={()=>setActiveNav('#')} className={ActiveNav==="#"?"active":""} > <AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={ActiveNav==="#about"?"active":""}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={ActiveNav==="#experience"?"active":""}><CgWorkAlt/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={ActiveNav==="#services"?"active":""}><RiServiceFill/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={ActiveNav==="#contact"?"active":""}><FiPhoneCall/></a>

    </nav>
  );
};

export default Nav;
