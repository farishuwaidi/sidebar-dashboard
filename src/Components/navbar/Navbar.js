import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navlink = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'feature', link: '#feature' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <navbar
      className="flex py-3 w-full justify-between items-center
     bg-white shadow-lg top-0 sticky"
    >
      <div>
        <a href="/" className="flex text-2xl font-bold text-green-500 ml-4">
          <img alt="logo" src={logo} className="w-5 mr-2" />
          Kasier
        </a>
      </div>
      <ul
        className={`flex items-start justify-end mr-5 top-14 flex-col absolute h-auto w-full transition-all duration-300 ease-in bg-white p-5 -z-50 lg:opacity-100 lg:relative lg:flex-row lg:top-0 lg:p-0 ${
          !open ? 'opacity-0' : '-right-5 opacity-100'
        }`}
      >
        {navlink.map((links) => (
          <li className="text-base text-green-500 hover:text-green-700 duration-300 font-normal my-2 mr-5">
            <a href={links.link}>{links.name}</a>
          </li>
        ))}
        <li className="my-2">
          <a href="/login" className="bg-green-500 text-white text-base font-semibold px-3 py-2 rounded-lg hover:bg-green-700 duration-300">
            Login
          </a>
        </li>
      </ul>
      <span onClick={() => setOpen(!open)} className="text-3xl cursor-pointer lg:hidden mr-5">
        <ion-icon name={!open ? 'menu' : 'close'}></ion-icon>
      </span>
    </navbar>
    // <header className="flex relative p-4 w-full bg-transparent justify-between items-center z-50">
    //   <div className="ml-4">
    //     <a href="/" class="flex">
    //       <img src={logo} alt="logo" className="w-5 mr-2" />
    //       <h1 className="text-lg font-semibold text-green-500">Kasier</h1>
    //     </a>
    //   </div>
    //   <div className="flex items-center px-4 lg:hidden">
    //     <button id="humberger" name="humberger" type="button" className="block absolute right-4">
    //       <span className="humberger-line transition duration-300 ease-in-out origin-top-left"></span>
    //       <span className="humberger-line transition duration-300 ease-in-out"></span>
    //       <span className="humberger-line transition duration-300 ease-in-out origin-bottom-left"></span>
    //     </button>
    //   </div>
    //   <div id="nav-menu" className="hidden absolute bg-white shadow-lg rounded-lg py-5 lg:py-0 max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:shadow-none lg:max-w-full">
    //     <ul className="block lg:flex lg:items-center lg:justify-end">
    //       <li className="group">
    //         <a href="#home" className="text-base text-dark my-2 mx-8 flex group-hover:text-primary">
    //           Home
    //         </a>
    //       </li>
    //       <li className="group">
    //         <a href="#about" className="text-base text-dark my-2 mx-8 flex group-hover:text-primary">
    //           About
    //         </a>
    //       </li>
    //       <li className="group">
    //         <a href="#feature" className="text-base text-dark my-2 mx-8 flex group-hover:text-primary">
    //           Feature
    //         </a>
    //       </li>
    //       <li className="group">
    //         <a href="#contact" className="text-base text-dark my-2 mx-8 flex group-hover:text-primary">
    //           Contact
    //         </a>
    //       </li>
    //       <li className="group">
    //         <a
    //           href="/dashboard"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-white font-semibold border flex justify-center border-primary bg-green-500 py-2 px-3 mx-8 rounded-lg hover:border hover:border-green-500 hover:bg-green-700 transition duration-300"
    //         >
    //           Login
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </header>
  );
};

export default Navbar;
