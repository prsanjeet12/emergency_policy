import React, { useState } from 'react';
import Logo from './logo.png'



const Navbar = () => {
 



  return (
    <nav className="bg-white h-[100px]
     border-gray-200 dark:bg-gray-900 shadow-lg sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center ">
        <img src={Logo} className="h-21 w-[120px]  ml-6 lg:ml-[150px]" alt="" />

          
        </div>
       
    
      </div>
    </nav>
  );
};

export default Navbar; 