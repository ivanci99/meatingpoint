import React, { useEffect, useState } from 'react'
import FeatureCard from '../../components/ButcheryCard'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import Products from '../../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=4')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Produkte</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Unsere beliebtesten Produkte</h1>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div>Loading.....</div>
      }
      <Products />
    </>
  )
}

export default Home