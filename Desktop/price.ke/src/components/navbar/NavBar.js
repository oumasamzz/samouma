import React from 'react'
import './NavBar.css';
import Logo from '../../images/logo1.png'
import Logo2 from '../../images/pricewhite.png'
import { Link } from 'react-scroll'
import { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Categories from '../categories/Categories';
import { BrowserRouter, Route ,
  Routes
} from 'react-router-dom';

function NavBar() {
const [nav, setNav] = useState (false)
    const handleNav = () => setNav (!nav)

  return (
    
    <div className='header_container'>  
   

    <div className='header_left'>
    <div className='logo'>

     <img src = {Logo2} alt='' />
    </div>
    </div>
      <div className='header_right'>

 <BrowserRouter>

        <Routes>
          <Route path="/categories" element ={<Categories />} />
            
          
          
        </Routes>
      </BrowserRouter>


<ul className='nav_menu'>
 <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
 <Link to='categories' smooth={true} duration={500} ><li>Categories</li></Link>
 <Link to='contacts' smooth={true} duration={500} ><li>Contacts</li></Link>
 <Link to='about' smooth={true} duration={500} ><li>About</li></Link> 
</ul>


      </div>

  <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='Categories' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='Contacts' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='About' smooth={true} duration={500} ><li>Book</li></Link>
                
                </ul>

                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                   
                </div>
           
    </div>
    
   
  )
}

export default NavBar


