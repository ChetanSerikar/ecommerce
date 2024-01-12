import React from 'react'
import { useState } from 'react'
import { items } from '../components/Alldata'
import { Routes , Route, Link } from 'react-router-dom'
import { CatNavigation } from '../categories/CatNavigation'
import { All } from '../categories/All'
import { Furniture } from '../categories/Furniture'
import { Electronics } from '../categories/Electronics'
import { Lamps } from '../categories/Lamps'
import { Kitchen } from '../categories/Kitchen'
import { Chairs } from '../categories/Chairs'
import { Skincare } from '../categories/Skincare'
import '../style.css'
import { News } from '../components/News'



export const Categories = () => {

    // const [cat , setCat] = useState([])
    // let filtred_items= items.filter((item) => item.category)
    // function set(category){
        
    //     filtred_items = items.filter((item) => item.category)
    //     console.log(category)
       
    // }
    

  return (

    <div className='categories'>
        <div className='container'>
            <div className='text'>
                <div className='home'> <Link to='/'>HOME</Link> </div>
                <div className='all'>Categories</div>
            </div>
            <CatNavigation />
            <br/>
            


        </div>
    </div>
  )
}
