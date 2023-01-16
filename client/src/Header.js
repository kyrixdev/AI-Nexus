import React from 'react';
import logo from './Images/Logo-white.svg';

function Header() {
  return (
    <div className="text-white p-4">
      <a href="/">
        <img src={logo} alt="Logo" width={300} className="m-auto" />
      </a>
      <div className='text-center my-12'>
        <span className="text-2xl tracking-widest">WE ARE</span>
        <h2 className='text-6xl text-center font-semiBold'>Central Location for AI Resources<span className='pinky'>.</span></h2>
        <h6 className='NewsBar my-4'>
          <span className='mx-4'>NEW</span>
          We have up too 1000+ tools, tutorials, and articles to help you learn about AI.
        </h6>
      </div>
    </div>
  );
}

export default Header;
