import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
     <div className='nav-link'>
    {/* //    <div className='flex-container'>
    //   <div className='flex-item'><Link to={"/"}>Home</Link></div>
    //   <div className='flex-item'><Link to={"/About"}>About</Link></div>
    //   <div className='flex-item'><Link to={"/Services"}>Services</Link></div>
    //   <div className='flex-item'><Link to={"/Contact"}>Contact</Link></div>
    // </div>  */}
        <Link to={"/"}>Home</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Services"}>Services</Link>
        <Link to={"/About"}>About</Link> 
    </div> 
  );
}

export default Header