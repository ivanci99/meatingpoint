import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../../../assets/Logo.png';



const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             <img src={Logo}alt="MeatingPoint Logo" class="w-10 h-10"/>
          <span className="ml-3 text-xl">MeatingPoint</span>
        </Link>

      </div>
      
    </header>
  )
}

export default Header