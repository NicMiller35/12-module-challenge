import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    
      <header>
        
          <h1>Nic Miller</h1>
          
            <nav>
              <ul>
                <li><NavLink to="/" end>About Me</NavLink></li>
                <li><NavLink to="/portfolio">Projects</NavLink></li>
                <li><NavLink to="/resume">Resume </NavLink></li>
              </ul>
            </nav>
          

        
      </header>
   
  );
}


export default Header;