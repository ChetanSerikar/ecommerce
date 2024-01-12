import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../components/Alldata'
import { News } from '../components/News'
import { Footer } from '../components/Footer'

export const ProductPage = () => {
  const { id } = useParams()
  const item = items.filter((item)=> item.id == parseInt(id));
  const [image , setImage] = useState(item[0].img);
  const [quantity, setQuantity] = useState(1);

   

   const changeImage = (e) => {
    setImage(e.target.src);
  };

  function increase(){
    setQuantity(currentvalue => currentvalue+1);
  }

  function decrease(){
    setQuantity(currentvalue => currentvalue > 1 ? currentvalue-1 : currentvalue );
  }

  
  return (
    <>
     <div className='product_page'>
      <div className='container'>
        <div className='product_page_conatiner'>
          <div className='right' >
            <div className='main_image' ><img src={image} /> </div>
            <div className='images'>
            <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
            </div>
          </div>
          <div className='left'>
            <div  className='left_container'>
              <div className='product_title' >  { item[0].description } </div>
                <div className='product_discription'> { item[0].specs } </div>
                <div className='quantity_container'>
                  <div className='quantity'>Quantity</div>
                  <div className='add_sub'>
                    <button onClick={decrease} >-</button>
                    <p> {quantity} </p>
                    <button onClick={increase} >+</button>
                  </div>
                  <div className='total_price'>${ quantity > 1 ? quantity * item[0].price : item[0].price }</div>
                </div>
                <div className='buttons'>
                  <button className='add_to_cart'>Add to cart</button>
                  <button className='buy_now'>Buy Now</button>
                </div>
            </div>
            
          </div>
        </div>
        
      </div>

    </div> 
    <div className='details'>
      <div className='detail' > 
        <div className='heading'> Texture </div>
        <diV>{item[0].texture} </diV>
      </div>
      <div className='detail' > 
        <div className='heading' > Weight </div>
        <diV>{item[0].weight} </diV>
      </div>
      <div className='detail' > 
        <div className='heading' > Size </div>
        <diV>{item[0].size} </diV>
      </div>
      
    </div>
    <News/>
    <Footer/>

    </>
  )
}
