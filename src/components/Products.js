import React from 'react'
import img1 from '../images/proud_img/img1.jpg'
import img2 from '../images/proud_img/img2.jpg'
import img3 from '../images/proud_img/img3.png'
import img4 from '../images/proud_img/img4.jpg'
import img5 from '../images/proud_img/img5.jpg'
import img6 from '../images/proud_img/img6.jpg'
import img7 from '../images/proud_img/img7.jpg'
import img8 from '../images/proud_img/img8.jpg'

import { items } from './Alldata'
import { Link } from 'react-router-dom'

export const Products = () => {
    const proud_items = items.filter(items => items.id <= 8)
  return (
    
    <div className='proud_container'>
        <div className='container'>
            <div className='proud_title'>Products we are Proud Of</div>
            <div className='proud_flex'>
                {proud_items.map((item) => (
                    <div key={item.id} className='proud_item' >
                    <Link to={`/productpage/${item.id}`}>
                        <div className='product_img' >
                            <img src={item.img} className='image'/>
                        </div>
                        <div className='proud_text'>
                            <div className='proud_name'>{item.description}</div>
                            <div className='proud_price' >${item.price}</div>
                        </div>
                    </Link>
                </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}
