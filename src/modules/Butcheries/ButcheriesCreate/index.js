import React, { useState } from "react";
import HeaderClear from '../../../components/Header/HeaderClear';
import { Link } from 'react-router-dom'


const ButcheriesCreateSelection = (props) => {

    return (
        <div>
            <HeaderClear/>
        
        <div class="flex justify-center items-center h-screen">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className=" text-center m-5 text-white bg-gray-400 border-0 py-2 px-6 outline outline-offset-2 outline-2  rounded-full text-lg">
                Wählen Sie ihre gewünschte Aktion aus
             </div>
             <div className="flex items-center justify-between">
             <a class="inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg" href="/butcheriesCreate">Metzgerei-Partner anlegen</a>
             <a class="ml-5 inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg" href="/butcheryshopCreate">Metzgerei-Filiale anlegen</a>
              
             </div>
             
         </form>
        </div>
        </div>
    )
}

export default ButcheriesCreateSelection