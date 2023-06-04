import React from 'react'
import { Link } from 'react-router-dom'

const Catagory = ({item}) => {

    const style = {
        parent:'flex-1 m-2 shadow-lg rounded-md overflow-hidden relative',
        child:'flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col',
        childh2:'text-[#fff] font-bold text-[30px]'
    }
  return (
    <div className={style.parent}>
        <img src={item.src} alt='' className='w-[100%]'/>
        <div className= {style.child}>
            <h2 className={style.childh2}>{item.title}</h2>
            <button className='btn'><Link to={`/collection/${item.id}`}>Show more</Link></button>
        </div>
    </div>
  )
}

export default Catagory