import React from 'react'
import { items } from '../components/Alldata'

import Items from './Items'

export const Kitchen = () => {
  const filtred_items= items.filter((item ) => item.category === "kitchen")
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
