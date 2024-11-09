import {Link} from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
      <header>
        <h1>Developer's Name</h1>
        <nav>
          <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </header>
    );
  }