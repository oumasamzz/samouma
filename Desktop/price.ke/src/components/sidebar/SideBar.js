import React from 'react'
import "./SideBar.css";
import { Link } from 'react-scroll'

function SideBar() {
  return (
    
    
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
      <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
        <li>Popular Items</li>
        <li>Insurance</li>
        <li>Flights</li>
       <li>Hotels</li>
        <li>Mobile data</li>
         <li>Projections</li>
      </ul>


      <div className='sidebar_Right'>



        
      </div>
    </div>
  
  )
}

export default SideBar