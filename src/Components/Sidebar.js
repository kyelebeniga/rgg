import React from 'react'
import {FaListAlt} from 'react-icons/fa'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='item'>
        <i><FaListAlt /></i>
        <span>League of Legends</span>
      </div>
    </div>
  )
}

export default Sidebar
