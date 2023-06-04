import React from 'react'
import Slider from '../components/Slider/Slider'
import Catagories from '../components/Catagory/Catagories'
import Products from '../components/Product/Products'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <div>
        <Slider/>
        <Catagories/>
        <NewsLetter/>
    </div>
  )
}

export default Home