import React from 'react'
import logo from '../images/nerv.png'
import { Link } from 'react-router-dom'
import { Categories } from '../pages/Categories'




export const Nav = () => {
  return (
    <header>
        
        <nav className='nav'>
            <div className='container'>
                <div className='nav_container'>
                    <Link ><img className='logo' src={logo} alt='logo' /> </Link>
                    <div className='nav_links'>
                      <Link to='/categories/all' >CATEGORIES</Link>
                      <Link to='/productpage/1'> PRODUCTS</Link>
                    </div>
                </div>

            </div>
            
        </nav>
    </header>
  )
}

export default Nav