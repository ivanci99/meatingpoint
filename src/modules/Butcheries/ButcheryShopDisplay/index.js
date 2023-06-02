import React, { useEffect, useState } from 'react'
import HeaderButchery from '../../../components/Header/HeaderButchery';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from  '../../../assets/Logo.png';


function FetchButcheryShops()  {

  const [butcheryShops, setButcheryShops] = useState([]);

  useEffect(() => {
    axios.get('http://meating-point.innofabrik.de//butchery_shops')
    .then(
      response => {
        setButcheryShops(response.data['hydra:member'])
        console.log(response.data)
      })
  },[])
 
  return (
    <div>
      <HeaderButchery />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"> Metzgereien </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Unsere beliebtesten Metzgereien</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {butcheryShops.map((item) => {
   
              const imagePath = `../../../assets/${item.id}.jpg`;

              return (
                <Link to={`/butchery_shops/${item.id}`} className="p-4 md:w-1/3 cursor-pointer" key={item.id}>
                  <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-300 text-white flex-shrink-0">
                        <img src={Logo} className="w-5 h-5" alt="Logo" />
                      </div>
                      <h2 className="text-white text-lg title-font font-medium capitalize">{item.id || 'Example card'}</h2>
                    </div>
                    <div className="flex-grow">
                      <img className="w-20 h-20" src={imagePath} alt={`Bild${item.id}`} />
                      <p className="leading-relaxed text-white text-base">{item.butchery} </p>
                      <p className="leading-relaxed text-white text-base">{item.street} </p>
                      <p className="leading-relaxed text-white text-base">{item.streetnumber} </p>
                      <p className="leading-relaxed text-white text-base">{item.postcode} </p>
                      <p className="leading-relaxed text-white text-base">{item.city} </p>
                      <a className="mt-3 text-white inline-flex items-center hover:text-red-500">Weiter</a>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FetchButcheryShops;
