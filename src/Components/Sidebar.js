import React from 'react'
import {FaListAlt} from 'react-icons/fa'
function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li><a href='#'><i><FaListAlt /></i> League of Legends</a></li>
        <li><a href='#'><i><FaListAlt /></i> Tier List</a></li>
        <li><a href='#'><i><FaListAlt /></i> Champions</a></li>
        <li><a href='#'><i><FaListAlt /></i> Multisearch</a></li>
        <li><a href='#'><i><FaListAlt /></i> Live Games</a></li>
        <li><a href='#'><i><FaListAlt /></i> Leaderboards</a></li>
        <li><a href='#'><i><FaListAlt /></i> Items</a></li>
        <li><a href='#'><i><FaListAlt /></i> Probuild Stats</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
