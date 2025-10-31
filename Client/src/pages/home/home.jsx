import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselSection from '../../components/carousel/CarouselSection';
import './home.css';
import NAwomens from '../../components/New Arrivals/NAwomens';
import Womens from '../../components/womens wear/hWomens';
import Mens from '../../components/mensWear/men';
import { Link } from 'react-router-dom';

 


function Home() {
  return (
    <div className='home'>
      <CarouselSection />
      <NAwomens />

      <div className='shop-by-category'>
        <div className='title'>SHOP BY CATEGORY</div>
        <div className='category-container'>

  {/* Row 1 */}
  <div className='row'>
    <div className='category-card'>
      <img className='img-womens' src='https://res.cloudinary.com/ddqdolyqw/image/upload/v1761464922/Screenshot_2025-10-26_131811_iubi67.png' alt='WOMENS' />
      <div className='overlay'>
        
        <Link to='/women'><button>SHOP NOW</button></Link>
        <h2>WOMENS</h2>
      </div>
    </div>

    <div className='category-card'>
      <img className='img-mens' src='https://res.cloudinary.com/ddqdolyqw/image/upload/v1761397572/bluemen_y2rql5.jpg' alt='MENS' />
      <div className='overlay'>
        <Link to="/men">
        <button>SHOP NOW</button>
        </Link>
        <h2>MENS</h2>
      </div>
    </div>
  </div>

  {/* Row 2 */}
  <div className='row'>
    <div className='category-card'>
      <img className='img-kids' src='https://res.cloudinary.com/ddqdolyqw/image/upload/v1761464851/Screenshot_2025-10-26_131609_s1noqc.png' alt='KIDS' />
      <div className='overlay'>
        <Link to="/kids">
        <button>SHOP NOW</button>
        </Link>
        <h2>KIDS</h2>
      </div>
    </div>

    <div className='category-card'>
      <img className='img-mom' src='https://res.cloudinary.com/ddqdolyqw/image/upload/v1761397573/mom_iks83r.jpg' alt='MOTHER & BABY' />
      <div className='overlay'>
        <Link to="/mother-baby">
        <button>SHOP NOW</button>
        </Link>
        <h2>MOTHER & BABY</h2>
      </div>
    </div>
  </div>

  {/* Row 3 */}
  <div className='row'>
    <div className='category-card'>
      <img className='img-home' src='https://res.cloudinary.com/ddqdolyqw/image/upload/v1761397572/homecloths_tv6cec.jpg' alt='HOME & LIFESTYLE' />
      <div className='overlay'>
        <Link to="home-living">
        <button>SHOP NOW</button>
        </Link>
        <h2>HOME & LIFESTYLE</h2>
      </div>
    </div>
  </div>

</div>
    <Womens />
    <Mens />
 
   
 


      </div>
    </div>
  );
}

export default Home;
