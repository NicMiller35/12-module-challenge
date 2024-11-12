import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      /*<header class="navbar navbar-expand-lg bg-body-tertiary">
        <h1>Nic Miller</h1>
        <nav>
            <ul>
                <li><NavLink to="/" end>About Me</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
        </nav>
      </header>
    );
  }*/
    <nav class="navbar navbar-expand-lg bg-body-tertiary" color='dark green'>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </div>
  </nav>

  );
}

  export default Header;