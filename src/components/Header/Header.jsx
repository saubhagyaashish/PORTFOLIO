import React from 'react';
import CTA from './CTA';
import Pic from '../../assets/myphto.jpg';
import HeaderSocial from './HeaderSocial';
import './header.css'

const Header = () => {
  return (
    
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
         <h1>Saubhagya Ashish</h1>
         <h5 className="text-light">Fronted Developer</h5>
         <CTA/>
         <HeaderSocial/>
       
       <div  className='me'>
        <img src={Pic} alt='me'/>
       </div>

       <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
      </header>
    
  );
};

export default Header;
