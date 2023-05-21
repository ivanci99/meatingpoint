import React from 'react'
import heroImg from '../../assets/heroImg.jpg';

const Hero = () => {
  return (
    <section className="text-black-700 body-font mt-25">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Vertraue deinem Gaumen, wähle Qualität aus unserer Metzgerei ein Genuss, 
            <br className="hidden lg:inline-block"/> der alle Sinne verzückt!
          </h1>
          <p className="mb-8 leading-relaxed">Unsere Metzgerei bietet dir eine vielfältige Auswahl an erstklassigen Fleischprodukten. Vom zarten Rinderfilet über saftige Schweinesteaks bis hin zu aromatischen Geflügelvariationen - hier findest du alles, um deine kulinarischen Vorstellungen zu verwirklichen.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Unsere Produkte</button>
            <button className="ml-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"> spezielle Anfrage</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="Banner" src={heroImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero