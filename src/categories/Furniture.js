import React from 'react'
import { items } from '../components/Alldata'
import { Link } from 'react-router-dom'
import Items from './Items'

export const Furniture = () => {
  const filtred_items= items.filter((item ) => item.category === "furniture")
  return (
    <div className='trending_container'>
    <div className='trending_container'>
            <div className='container'>
            <Items filtred_items={filtred_items}/>
                
            </div>
        </div>
</div>
  )
}
