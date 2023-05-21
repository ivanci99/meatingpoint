import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../../../assets/Logo.png';

const navigations = [
  {
    name: 'Startseite',
    path: '/'
  },
  {
    name: 'Produkte',
    path: '/products'
  },
  {
    name: 'Angebote',
    path: '/angebote'
  },
  {
    name: 'Über uns',
    path: '/about'
  },
  {
    name: 'Kontakt',
    path: '/kontakt'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             <img src={Logo}alt="MeatingPoint Logo" class="w-10 h-10"/>
            
         
          <span className="ml-3 text-xl">MeatingPoint</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-0">Warenkorb
        </Link>
      </div>
    </header>
  )
}

export default Header