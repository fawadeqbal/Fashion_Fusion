import React from 'react'
import { ApiCategories } from '../../api/ApiCatagory'
import Catagory from './Catagory'
const Catagories = () => {
  return (
    <div className='flex justify-between items-center'>
        {
            ApiCategories.map((catagory,index)=>(
                <Catagory item={catagory} key={index}/>
            ))
        }
    </div>
  )
}

export default Catagories