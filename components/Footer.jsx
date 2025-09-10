import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li>Airbnb your home</li>
            <li>Airbnb your experience</li>
            <li>Airbnb your service</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Airbnb</h4>
          <ul>
            <li>2025 Summer Release</li>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift Cards</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <span>© 2024 Airbnb, Inc.</span>
          <span>· Privacy</span>
          <span>· Terms</span>
          <span>· Sitemap</span>
        </div>
        <div className="footer-options">
          <span>English (US)</span>
          <span>$ USD</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer