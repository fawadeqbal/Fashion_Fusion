import React, { useState } from 'react'
import { ApiCategories } from '../../api/ApiCatagory'
import Catagory from './Catagory'
import Products from '../Product/Products'
const Catagories = () => {
  const [catagory,setCatagory]=useState();
  return (
    <div>
    <div className='flex justify-between items-center'>
        {
            ApiCategories.map((catagory,index)=>(
                <Catagory item={catagory} key={index} setCatagory={setCatagory}/>
            ))
        }
    </div>
    {!catagory?null:<Products category={catagory}/>}
    
    </div>

  )
}

export default Catagories