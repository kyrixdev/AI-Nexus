import React from 'react';
import logo from './Images/Logo-white.svg';

function Header() {
  return (
    <div className="text-white p-4">
      <a href="/">
        <img src={logo} alt="Logo" width={400} className="m-auto" />
      </a>
      <div className='text-center my-12'>
        <span className="text-2xl tracking-widest">WE ARE</span>
        <h2 className='text-6xl text-center font-semiBold'>Central Location for AI Resources<span className='pinky'>.</span></h2>
      </div>
    </div>
  );
}

export default Header;
