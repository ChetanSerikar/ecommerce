import React from 'react'
import { items } from '../components/Alldata'
import '../style.css'
import { Link } from 'react-router-dom'

export const All = () => {
    const filtred_items= items.filter((item ) => item)
  return (
    <div className='trending_container'>
        <div className='trending_container'>
                <div className='container'>
                    <div className='trending_flex'>
                         {filtred_items.map((item) => (
                        <div key={item.id} className='trending_item' >
                            <Link to={`/productpage/${item.id}`} >
                                <div className='product_img' >
                                    <img src={item.img} className='image'/>
                                </div>
                                <div className='trending_text'>
                                    <div>{item.description}</div>
                                    <div>${item.price}</div>
                                </div>
                            </Link>
                        </div>
                            
                        ))}
                    </div>
                    
                </div>
            </div>
    </div>
  )
}
