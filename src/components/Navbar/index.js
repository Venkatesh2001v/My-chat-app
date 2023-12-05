import React from 'react';

import ExploreLogo from '../../assests/explore-logo.svg'
import CreateLogo from '../../assests/create-logo.svg'
import EditLogo from '../../assests/edit-logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import your CSS file for styling

const Navbar = () => {

  const ShowAlert = () =>{
    window.alert('This application is still under development. Some features are not yet available.');
  }

  return (
    <>
      <nav class="w-100 small navbar navbar-expand-lg navbar-light bg-light d-lg-none ">
        <p class="navbar-brand logo" >Logo</p>
        <button class="small-btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="small-btn navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="nav-options navbar-nav">
            <p class="nav-texts nav-link active ">
              Explore
            </p>
            <p class="nav-texts nav-link" >Create</p>
            <p class="nav-texts nav-link" >Edit</p>
            <button onClick={ShowAlert} class="nav-b-btn nav-texts nav-link" >Login</button>
          </div>
        </div>
      </nav>


      <nav className='navbar-large-size'>
          <div className='nav-items-container'>
            <p className='logo'>Logo</p>
            <p className='bar'>|</p>
            <div className='nav-items'>
              <img className='navbar-logos' src={ExploreLogo} alt="explore logo" />
              <button className='explore'>Explore</button>
            </div>
            <div className='nav-items'>
              <img className='navbar-logos' src={CreateLogo} alt="explore logo" />
              <button className='headers'>Create</button>
            </div>
            <div className='nav-items'>
              <img className='navbar-logos' src={EditLogo} alt="explore logo" />
              <button className='headers'>Edit</button>
            </div>
          </div>
          <div>
            <button onClick={ShowAlert} className='login-btn'>Login</button>
          </div>
        </nav>
      </>
  );
};

export default Navbar;
