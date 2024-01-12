import React from 'react'
import all from '../images/img1.jpg'
import skincare from '../images/img8.jpg'
import img3 from '../images/img10.jpg'
import img4 from '../images/img9.webp'
import { Link } from 'react-router-dom'
import { Kitchen } from '../categories/Kitchen'
import kitchen from '../img/products/1.jpg'
import ele from '../img/header/home-img-4.jpg'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero_container'>
          {/* <div className='items'>
            <Link > <img className='all' src={all} alt=''/></Link>
            <Link><div  className='all' style={{backgroundImage:`url(${all})` }}></div></Link>
            <p className='ctitles'>LIVE COMFORTABLE</p>
          </div>
          <div className='items'>
            <a > <img className='all' src={skincare} alt=''/></a>
            <p className='ctitles'>SKINCARE</p>
          </div>
          <div className='items'>
            <div className='vertical'>
              <a><img className='all' src={img3} alt=''/></a>
              <p className='ctitles'>KITCHEN</p>

            </div>
            <div className='vertical'>
              <a ><img className='all' src={img4} alt=''/></a>
              <p className='ctitles'>ELECTRONICS</p>
            </div> 
            
          </div> */}
          {/* <div className='dummy'>
            <div className='all' style={{ backgroundImage:`url(${all})` }}></div> 
            <div className='one'>  <img src={all} className='all' />  </div>  
            <div className='i'>All</div>
          </div>
        
          <div className='skin_care' style={{ backgroundImage:`url(${skincare})` }}>skin_care</div>
          <div className='kitchen_electronics'>
            <div className='kitchen'  style={{ backgroundImage:`url(${img3})`}}> Kitchen</div>
            <div className='electronics'  style={{ backgroundImage:`url(${img4})`}}>electronics</div>
          </div> */}

          <div className='all'>
            <div className='img' style={{ backgroundImage:`url(${all})`}} >1</div>
            {/* <img src={all} />   */}
            <div className='text'>All</div>
          </div>
          <div className='skincare'>
          {/* <img src={skincare} /> */}
          <div className='img' style={{ backgroundImage:`url(${skincare})` }}></div>
            <div className='text'>skincare</div>
          </div>
          <div className='ke'>
            
              <div className='kitchen'>
                  <div className='img'  style={{ backgroundImage:`url(${img3})`}}></div>
                  <div className='text'>kitchen</div>
              </div>
              <div className='eletronics' >
                  <div className='img'  style={{ backgroundImage:`url(${ele})`}}></div>
                  <div className='text'>electronics</div>
              </div>

            
           
          </div>
          

        </div>
      </div> 

    </section>
      //   <div className='dummy'>
      //   <div className='container'>
      //     <div className='dummy_container'>
      //        <div className='dummy_items'>Live COMFORTABLE</div>
      //        <div className='dummy_items'>SKIN CARE</div>
      //        <div className='dummy_items'>
      //           <div className='dummy_items3'>KITCHEN</div>
      //         <div className='dummy_items3'>ELECTRONICS</div>
      //        </div>
             
      //     </div>
      //   </div>
      // </div>
  )
}
