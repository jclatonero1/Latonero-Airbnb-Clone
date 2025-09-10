import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Heart, MapPin, Users, Home, Shield, Calendar, Wifi, Coffee, Car, Snowflake, Utensils, ArrowLeft } from 'lucide-react'

const Listing = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [listing, setListing] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const listingsData = [
    {
      id: 1,
      title: "Luxury Beachfront Villa with Private Pool",
      location: "Seminyak, Bali, Indonesia",
      rating: 4.95,
      reviews: 128,
      price: 350,
      dates: "Nov 12-17",
      host: "Made Wijaya",
      hostJoined: "May 2018",
      description: "Experience ultimate luxury in this stunning beachfront villa with panoramic ocean views. The property features a private infinity pool, spacious living areas, and direct access to the beach. Perfect for families or groups looking for a memorable Bali getaway.",
      amenities: [
        { name: "Wi-Fi", icon: <Wifi size={20} /> },
        { name: "Kitchen", icon: <Utensils size={20} /> },
        { name: "Free parking", icon: <Car size={20} /> },
        { name: "Air conditioning", icon: <Snowflake size={20} /> },
        { name: "Coffee maker", icon: <Coffee size={20} /> }
      ],
      details: {
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3
      },
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1551516594-56cb78394645?w=800"
      ]
    },
    {
      id: 2,
      title: "Beachfront Bungalow with Stunning Views",
      location: "Maldives",
      rating: 4.89,
      reviews: 92,
      price: 420,
      dates: "Dec 1-8",
      host: "Ahmed Rashid",
      hostJoined: "January 2020",
      description: "Wake up to the sound of waves in this beautiful beachfront bungalow. Features a private deck, crystal clear waters just steps away, and spectacular sunsets. Perfect for a romantic getaway or a relaxing retreat.",
      amenities: [
        { name: "Wi-Fi", icon: <Wifi size={20} /> },
        { name: "Kitchen", icon: <Utensils size={20} /> },
        { name: "Beach access", icon: <Car size={20} /> },
        { name: "Air conditioning", icon: <Snowflake size={20} /> },
        { name: "Private deck", icon: <Coffee size={20} /> }
      ],
      details: {
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2
      },
      images: [
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
      ]
    }
  ]

  useEffect(() => {
    const foundListing = listingsData.find(item => item.id === parseInt(id))
    setListing(foundListing)
  }, [id])

  const nextImage = () => {
    setCurrentImage((prev) => (prev === listing.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? listing.images.length - 1 : prev - 1))
  }

  if (!listing) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="listing-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Back
      </button>

      {/* Image Gallery */}
      <div className="image-gallery">
        <div className="main-image">
          <img src={listing.images[currentImage]} alt={listing.title} />
          <button className="nav-btn left" onClick={prevImage}>
            ‹
          </button>
          <button className="nav-btn right" onClick={nextImage}>
            ›
          </button>
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="thumbnail-grid">
          {listing.images.slice(0, 4).map((img, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
          {listing.images.length > 4 && (
            <div className="thumbnail more" onClick={() => setCurrentImage(4)}>
              <img src={listing.images[4]} alt="Thumbnail 5" />
              <div className="overlay">+{listing.images.length - 4}</div>
            </div>
          )}
        </div>
      </div>

      <div className="listing-content">
        <div className="listing-details">
          {/* Header */}
          <div className="listing-header">
            <h1>{listing.title}</h1>
            <div className="header-meta">
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <span>{listing.rating}</span>
                <span className="reviews">({listing.reviews} reviews)</span>
              </div>
              <div className="location">
                <MapPin size={16} />
                <span>{listing.location}</span>
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div className="host-section">
            <div className="host-info">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
                alt="Host" 
                className="host-avatar" 
              />
              <div>
                <h3>Hosted by {listing.host}</h3>
                <p>Joined in {listing.hostJoined}</p>
              </div>
            </div>
            <div className="host-badge">
              <Shield size={20} />
              <span>Superhost</span>
            </div>
          </div>

          {/* Property Details */}
          <div className="property-details">
            <div className="detail-item">
              <Home size={24} />
              <div>
                <h4>Entire villa</h4>
                <p>You'll have the villa to yourself</p>
              </div>
            </div>
            <div className="detail-item">
              <Users size={24} />
              <div>
                <h4>Up to {listing.details.guests} guests</h4>
                <p>{listing.details.bedrooms} bedrooms • {listing.details.beds} beds • {listing.details.bathrooms} baths</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="description">
            <h2>About this place</h2>
            <p>{listing.description}</p>
          </div>

          {/* Amenities */}
          <div className="amenities">
            <h2>What this place offers</h2>
            <div className="amenities-grid">
              {listing.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  {amenity.icon}
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="booking-widget">
          <div className="price-box">
            <div className="price-header">
              <h2>${listing.price} <span>night</span></h2>
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <span>{listing.rating}</span>
                <span className="reviews">({listing.reviews} reviews)</span>
              </div>
            </div>

            <div className="date-selection">
              <div className="date-input">
                <label>CHECK-IN</label>
                <input type="text" placeholder="Add date" />
              </div>
              <div className="date-input">
                <label>CHECKOUT</label>
                <input type="text" placeholder="Add date" />
              </div>
            </div>

            <div className="guests-selector">
              <label>GUESTS</label>
              <select>
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
                <option>5 guests</option>
                <option>6 guests</option>
              </select>
            </div>

            <div className="price-breakdown">
              <div className="price-line">
                <span>${listing.price} x 5 nights</span>
                <span>${listing.price * 5}</span>
              </div>
              <div className="price-line">
                <span>Cleaning fee</span>
                <span>$75</span>
              </div>
              <div className="price-line">
                <span>Service fee</span>
                <span>$52</span>
              </div>
              <div className="price-line total">
                <span>Total</span>
                <span>${listing.price * 5 + 75 + 52}</span>
              </div>
            </div>

            <button className="reserve-btn">Reserve</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing