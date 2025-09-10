import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
  const navigate = useNavigate()

  const listings = [
    {
      id: 1,
      title: "Luxury Villa with Pool",
      location: "Bali, Indonesia",
      dates: "Nov 12-17",
      price: 250,
      rating: 4.95,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
    },
    {
      id: 2,
      title: "Beachfront Bungalow",
      location: "Maldives",
      dates: "Dec 1-8",
      price: 350,
      rating: 4.89,
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400"
    },
    {
      id: 3,
      title: "Mountain Cabin",
      location: "Aspen, Colorado",
      dates: "Jan 5-12",
      price: 180,
      rating: 4.92,
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400"
    },
    {
      id: 4,
      title: "City Loft",
      location: "New York, NY",
      dates: "Oct 20-25",
      price: 120,
      rating: 4.87,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
    },
    {
      id: 5,
      title: "Traditional Japanese House",
      location: "Kyoto, Japan",
      dates: "Mar 15-22",
      price: 95,
      rating: 4.98,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400"
    },
    {
      id: 6,
      title: "Desert Oasis",
      location: "Marrakech, Morocco",
      dates: "Feb 10-17",
      price: 150,
      rating: 4.91,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400"
    }
  ]

  const categories = [
    
  ]

  const handleCardClick = (id) => {
    navigate(`/listing/${id}`)
  }

  return (
    <div className="home">

      {/* Categories */}
      <section className="categories">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.count} properties</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listings Grid */}
      <section className="listings">
        <h2>Explore nearby</h2>
        <div className="listings-grid">
          {listings.map(listing => (
            <div key={listing.id} onClick={() => handleCardClick(listing.id)}>
              <Card listing={listing} />
            </div>
          ))}
        </div>
      </section>

      {/* Become Host Section */}
    </div>
  )
}

export default Home