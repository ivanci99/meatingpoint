import React from 'react'
import Logo from  '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={Logo}alt="MeatingPoint Logo" class="w-10 h-10"/>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
           
            <span className="ml-3 text-xl">MeatingPoint</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">© 2023 MeatingPoint</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Hilfe & Kontakt</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Bestellung</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Zahlung per Rechnung</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Verstandinformationen</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Bestellung stornieren</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Weiteres</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Partner</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fleischherkunft</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Impressum</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">AGB</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Über uns</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Corporate Website</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Jobs</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Newsroom</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Events</a>
              </li>
            </nav>
          </div>
      
        </div>
      </div>
    </footer>
  )
}

export default Footer