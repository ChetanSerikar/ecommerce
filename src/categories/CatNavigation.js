import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const CatNavigation = () => {
  return (
    <>
     <div className='links' >
        <Link to='all'>All</Link>
        <Link to='furniture'>Furniture</Link>
        <Link to='electronics'>Electronics</Link>
        <Link to='lamps'>Lamps</Link>
        <Link to='kitchen'>Kitchen</Link>
        <Link to='chairs'>Chairs</Link>
        <Link to='skin-care'>Skin Care</Link>
    </div>
    <Outlet className='outlet'/>
    </>
    
  )
}
