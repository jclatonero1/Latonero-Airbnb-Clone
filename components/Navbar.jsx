import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Globe, Menu, User } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={handleLogoClick}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="logo" />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-item">Anywhere</div>
          <div className="search-divider"></div>
          <div className="search-item">Any week</div>
          <div className="search-divider"></div>
          <div className="search-item">Add guests</div>
          <button className="search-btn">
            <Search size={16} />
          </button>
        </div>

        {/* Right Menu */}
        <div className="nav-right">
          <div className="host-item">Become a Host</div>
          <div className="globe-item">
            <Globe size={18} />
          </div>
          <div className="profile-menu">
            <button 
              className="profile-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={18} />
              <User size={18} />
            </button>
            {isMenuOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Sign up</div>
                <div className="dropdown-item">Log in</div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">Host your home</div>
                <div className="dropdown-item">Host an Experience</div>
                <div className="dropdown-item">Help</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar