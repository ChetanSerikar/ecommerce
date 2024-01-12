import React from 'react'
import { items } from '../components/Alldata'
import { Link } from 'react-router-dom'
import Items from './Items'


export const Lamps = () => {
  const filtred_items= items.filter((item ) => item.category === "lamp")
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
