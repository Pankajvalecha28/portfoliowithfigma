import React from 'react'
import '../Styles/Testimonials.css'
import card from '../Data/TestimonialData.js';
const Testimonials = () => {
  return (
    <div className='testContainer'>
      <div className="testupper">
        <div className="upper1">Clients Feedback</div>
        <div className="upper2">Customer testimonials</div>
      </div>
      <div className="testlower">
        {card.map((item) => (
          <div className='reviewcard'>
            <div className="stars">
              {item.noofstars.map(() => (
                <img src={item.path} alt='Star' />
              ))}
            </div>
            <p>{item.review}</p>
            <div className="avatar">
              <div className="av1">
                <img className='av' src={item.userav} alt="avatar" />
              </div>
              <div className="av2">
                <div className="name">{item.name}</div>
                <div className="work">{item.work}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Testimonials