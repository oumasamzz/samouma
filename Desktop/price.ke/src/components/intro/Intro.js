import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import shoplist from '../../images/shoplist.jpg'
import Video from '../../images/Pexels Videos 1851190.mp4'







function Intro() {
    return (
        <div className='hero'>
           <img src = {shoplist} alt= '/'>
            
           </img>
            <div className="overlay"></div>
            <div className="content">
                <h1>Search & compare prices of items and services from Shops all over Kenya</h1>
               
                <form className="form">
                    <div className='search_box'>
                        <input type="text" placeholder='Search Product Prices' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Intro