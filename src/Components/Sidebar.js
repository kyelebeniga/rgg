import React from 'react'
import {
  FaListAlt,
  FaSkull,
  FaSearch,
  FaRegDotCircle,
  FaTrophy,
  FaPen,
  FaPushed
} from 'react-icons/fa';
import LeagueIcon from '../Assets/licon.png'

function Sidebar() {
  return (
    <div className='sidebar'style={{width: onmouseover}}>
      <ul>
        <li><a href='#'><i><img src={LeagueIcon} /></i> League of Legends</a></li>
        <li><a href='#'><i><FaListAlt /></i> Tier List</a></li>
        <li><a href='#'><i><FaSkull /></i> Champions</a></li>
        <li><a href='#'><i><FaSearch /></i> Multisearch</a></li>
        <li><a href='#'><i><FaRegDotCircle /></i> Live Games</a></li>
        <li><a href='#'><i><FaTrophy /></i> Leaderboards</a></li>
        <li><a href='#'><i><FaPen /></i> Items</a></li>
        <li><a href='#'><i><FaPushed /></i> Probuild Stats</a></li>
      </ul>
    </div>
  )
}

// var mini = true;
// function toggleSidebar(){
//   if(mini){
//     document.getElementById(sidebar).style;
//     document.getElementById("main").style.marginLeft = "250px";

//     this.mini = false;
//   }else {
//     document.getElementById("sidebar").style.width = "100px";
//     document.getElementById("main").style.width = "100px";

//     this.mini = true;
//   }
// }

export default Sidebar
