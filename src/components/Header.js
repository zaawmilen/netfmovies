import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

      


    <div className="header__navright">
      <ul className="header__navrightList">
        <li className="header__navrightItem"><SearchIcon /></li>
        <li className="header__navrightItem"><NotificationsNoneIcon /></li>
        <li className="header__navrightItem"><PersonIcon /></li>
        <li className="header__navrightItem"><ArrowDropDownIcon /></li>
      </ul>
    </div>

            
   
      </header>
    
    </div>
  )
}

export default Header