import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <div>
     < header className="header">
      <div className="header__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <nav className="header__nav">
        <ul className="header__navList">
          <li className="header__navItem"><a href="#Home">Home</a></li>
          <li className="header__navItem"><a href="#Series">Series</a></li>
          <li className="header__navItem"><a href="#Films">Films</a></li>
          <li className="header__navItem"><a href="#Latest">Latest</a></li>
          <li className="header__navItem"><a href="#Mylist">My List</a></li>
          <li className="header__navItem"><a href="#Browsebylanguage">Browse by Languages</a></li>
        </ul>
      </nav>

      <div className=" header_navright">
         {/* <ul clss="header__navrightList">
             <li>SerachIcon</li>
             <li>NotificationsNoneIcon</li>
             <li>PersonIcon</li>
               <li>ArrowDropDownIcon</li>
         </ul> */}

           <div className="header__navrightList">
          <div className= "SerachIcon">
          <div className="NotificationsNoneIcon">
          <div className="PersonIcon">
          <div className="ArrowDropDownIcon">
          </div> </div> </div></div></div> 
        
    </div>
      </header>
    
    
    </div>
  )
}

export default Header