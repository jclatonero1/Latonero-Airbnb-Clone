import React from 'react'
import { Heart, Star } from 'lucide-react'

const Card = ({ listing }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={listing.image} alt={listing.title} />
        <button className="wishlist-btn">
          <Heart size={20} />
        </button>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{listing.title}</h3>
          <div className="card-rating">
            <Star size={14} fill="currentColor" />
            <span>{listing.rating}</span>
          </div>
        </div>
        <p className="card-location">{listing.location}</p>
        <p className="card-dates">{listing.dates}</p>
        <p className="card-price">
          <span className="price">${listing.price}</span> night
        </p>
      </div>
    </div>
  )
}

export default Card