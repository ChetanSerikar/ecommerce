import React from 'react'
import { Link } from 'react-router-dom'
import { items } from './Alldata'

const TrendingItems = () => {

    const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <div className='proud_container1'>
    <div className='container'>
        <div className='proud_title'>Products we are Proud Of</div>
        <div className='proud_flex'>
            {filteredItems .map((item) => (
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

export default TrendingItems