import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../../../assets/Logo.png';



const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center flex justify-between">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             <img src={Logo}alt="MeatingPoint Logo" class="w-10 h-10"/>
          <span className="ml-3 text-xl">MeatingPoint</span>
        </Link>

        <div className="content-end float-end">
           <button className="ml-4  inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg" type="submit"
        path='/CreateProducts'> <Link to='/CreateProducts'>Produkte anlegen</Link></button>
        </div>

      </div>
      
    </header>
  )
}

export default Header