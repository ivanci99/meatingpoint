import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import axios from 'axios'
import Fleisch from '../../assets/bild.jpg'

function ProductCard () {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://meating-point.innofabrik.de/api/products')
    .then(
      response => {
        setProducts(response.data['hydra:member'])
        console.log(response.data['hydra:member'])
      })
  },[])

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            products.map((product) => {
              console.log(product, 'product')
            
              return (
                <Link to={`/products/${product.id}`} className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 outline outline-2 cursor-pointer rounded-lg shadow ml-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt={product.name} className=" object-contain object-center  w-full h-full block" src={Fleisch} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{product.description}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                    <p className="mt-1 text-md font-semibold">€{product.price}</p>
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

export default ProductCard