import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import ProductCard from '../../components/ProductCard'
import axios from 'axios'
import Header from '../../components/Header/HeaderFull';

const Products = () => {

  const [products, setProducts] = useState([])
 
  useEffect(() => {
    axios.get('http://meating-point.innofabrik.de/api/products')
    .then(
      response => {
        setProducts(response.data['hydra:member'])
        console.log(response.data)
      })
  },[])

  return (
    <div>
      <Header/>
      <Categories/>
 
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Produkte</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Alle Produkte </h1>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading.....</div>
      }
    </div>
  )
}


export default Products