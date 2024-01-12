import React from 'react'

import { Link } from 'react-router-dom'

const Items = ( { filtred_items } ) => {
    
  return (
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
  )
}

export default Items