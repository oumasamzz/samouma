import React from 'react'
import './Categories.css'

import {MdLocalGroceryStore} from 'react-icons/md'

import{FcDocument} from 'react-icons/fc'

import{MdFlight} from 'react-icons/md'
import {FaHotel} from 'react-icons/fa'
import {HiOutlineSignal} from 'react-icons/hi2'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
function Categories() {
  return (
 
   
    <div className=' category_main'>
     
 <h1>Categories</h1>


    <div className=' category_container '>


<div className='category_item'>
<div className='cat_icons'>
   <MdLocalGroceryStore className = 'cat_icon'/>
</div>

 Popular items 
</div>

<div className='category_item'>
<div className='cat_icons'>
   <FcDocument className = 'cat_icon'/>
</div>
  Insurance 
</div>


<div className='category_item'>
<div className='cat_icons'>
   <MdFlight className = 'cat_icon'/>
</div>
  Flights 
</div>
<div className='category_item'>
<div className='cat_icons'>
   <FaHotel className = 'cat_icon'/>
</div>
  Hotels
</div>
<div className='category_item'>
<div className='cat_icons'>
   <HiOutlineSignal className = 'cat_icon'/>
</div>
  Mobile Data
</div>
<div className='category_item'>
<div className='cat_icons'>
   <AiOutlineFundProjectionScreen className = 'cat_icon'/>
</div>
  Projections 
</div>

  </div>
</div>

    
  )
}

export default Categories