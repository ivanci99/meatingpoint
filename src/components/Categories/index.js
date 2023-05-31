import React, { useEffect, useState } from 'react'
import ButcheryCard from '../ButcheryCard'



const Categories = () => {

  const data = [
    "Geflügelfleisch",
    "Rindfleisch",
    "Schweinefleisch",
    "Verschiedenes"
  ];

  const [categories, setCategories] = useState([])
  const [butcheries, setButcheries] = useState([])

  useEffect(() => {
    const fetchButcheries = async () => {
      const response = await fetch((('http://meating-point.innofabrik.de/api/butcheries')))
      const data = await response.json()
      console.log(data, 'data')
      setButcheries(data)
    }
    fetchButcheries()
  }, [])

  if (butcheries.length === 0) return <div>Loading.....</div>

  return (
      <ButcheryCard cards={butcheries}/>
  )
}

export default Categories