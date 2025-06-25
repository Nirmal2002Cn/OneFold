import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function CarouselSection() {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src="frame3.webp" alt="Slide 1" />
          
        </div>
        <div>
          <img src="frame4.webp" alt="Slide 2" />
         
        </div>
        <div>
          <img src="Frame1.png" alt="Slide 3" />
          
        </div>
        <div>
          <img src="frame2.webp" alt="Slide 4" />
          
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselSection