import React, { useEffect, useState } from 'react'
import CategoryCard from '../CategoryCard'



const Categories = () => {

 
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch((('http://meating-point.innofabrik.de/api/product_categories')))
      const data = await response.json()
      console.log(data, 'data')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  if (categories.length === 0) return <div>Loading.....</div>

  return (
      <CategoryCard cards={categories}/>
  )
}

export default Categories