import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../../assets/Logo.png';
import axios from 'axios';



const ButcheryCard = ({butcheries = [1, 2, 3]}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"> Metzgereien </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Unsere beliebtesten Metzgereien</h1>
        </div>
        <div className="flex flex-wrap -m-4">
         {
             butcheries?.map((id) => {
              return (
                <Link to={`/butcheries/${id}`} className="p-4 md:w-1/3 cursor-pointer">
                  <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-300 text-white flex-shrink-0">
                        <img src={Logo} class="w-5 h-5"/>  
                      </div>
                      <h2 className="text-white text-lg title-font font-medium capitalize">{id || 'Example card'}</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-white text-base">{id} </p>
                      <a className="mt-3 text-white inline-flex items-center hover:text-red-500">Weiter
                      </a>
                    </div>
                  </div>
                  </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ButcheryCard