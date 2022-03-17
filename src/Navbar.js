import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa';
import logo from './logo.svg';
import { links, social } from './data';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(()=>{
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linkContainerRef.current.style.height = `${linkHeight}px`;

    }
    else
    linkContainerRef.current.style.height = '0px';
  }, [showLinks])

  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className="nav-header">
            <img src={logo} alt="logo" className='logo' />
            <button type="button" className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}><FaBars /></button>
          </div>

          <div className='links-container' ref = {linkContainerRef}>
            <ul className='links' ref ={linkRef}>
              {
                links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url} >{text}</a>
                    </li>
                  );
                })
              }

            </ul>
          </div>
          <ul className='social-icons'>
             {
               social.map((socialLink)=>{
                 const {id, url, icon} = socialLink;
                 return (
                   <li key = {id}>
                     <a href = {url}>{icon}</a>

                   </li>
                 );
               })
             }
          </ul>
        </div>
      </nav>
    </>);

}

export default Navbar