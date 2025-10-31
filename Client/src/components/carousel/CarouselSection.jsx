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
          <img src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399226/frame3_si9kby.webp" alt="Slide 1" />
          
        </div>
        <div>
          <img src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399229/frame4_j9myuq.webp" alt="Slide 2" />
         
        </div>
        <div>
          <img src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399219/Frame1_fxovko.png" alt="Slide 3" />
          
        </div>
        <div>
          <img src="https://res.cloudinary.com/ddqdolyqw/image/upload/v1761399222/frame2_gtl1hf.webp" alt="Slide 4" />
          
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselSection