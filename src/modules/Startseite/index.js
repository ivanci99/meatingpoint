import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StartseitePNG from './Startseite.png';
import order from './order.png';
import meat from './meat.png';
import shop from './shop.png';


import HeaderMetzgerei from '../../components/Header/HeaderSignIn';
import Home from '../Home'


function App() {



    const [zipcode, setZipcode] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
    };
  
    const handleInputChange = (e) => {
      setZipcode(e.target.value);
    };
    


    
  
  return (

    <div className=''>
      <HeaderMetzgerei/>
  
    <div className="bg-[url('./modules/Startseite/Startseite.png')] bg-cover bg-center h-96 py-24 w-full flex items-center justify-center">

         <div className="flex items-center justify-center flex-col absolute left-0 top-20 pl-24 pt-24 ">
         <h1 className="text-gray-600  body-font text-4xl"> Jetzt Metzger in deiner Nähe finden!</h1>
         <h1 className="text-gray-600  body-font text-4xl">Gebe deinen Standort oder Postleitzahl an</h1>
      <form onSubmit={handleSearch}>
        <input className="ml-4 inline-flex flex-wrap text-gray-600 border-0 py-2 px-6 my-2 outline outline-offset-2 outline-2 rounded-full text-lg" type="text" value={zipcode} onChange={handleInputChange}/>
        <button className="ml-4  inline-flex flex-wrap text-white bg-gray-500 border-0 py-2 px-6 outline outline-offset-2 outline-2 hover:bg-red-500 rounded-full text-lg">
           <Link to='/butcheries'>Suchen</Link></button>
      </form>
    </div> 
    </div>

    <div className=" flex-row bg-gray-250 flex justify-between ">
       <div className='ml-24 '>
       <h1 className="text-gray-500 text-semibold" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '135px',
          padding: '5px',
          margin: '10px',
          fontSize:'30px',
          }}>
        So einfach kann es gehen!</h1>  
       </div>  
       
     

          <div className='h-20 w-20 py-5 mr-24px'>
            <img  src={shop} alt="Bild 1" /> 
            <p><h5 className="text-gray-500 font-semibold">Metzgerei auswählen </h5> </p>
          </div>

          <div className='h-20 w-20 py-5 mr-24px'>
            <img src={meat} alt="Bild 2" />
            <p><h5 className="text-gray-500 font-semibold"> Produkte auswählen</h5></p>
           </div>

          <div className='h-20 w-20 py-5 mr-96'> 
             <img src={order} alt="Bild 3" />
             <p><h5 className="text-gray-500 font-semibold">Bestellung abschließen</h5></p>
          </div>

        </div>

      </div> 
      
  
 
  );
}

export default App;