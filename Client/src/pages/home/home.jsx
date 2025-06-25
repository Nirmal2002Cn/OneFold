import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselSection from '../../components/carousel/CarouselSection';
import './home.css';
import NAwomens from '../../components/New Arrivals/NAwomens';
import Womens from '../../components/womens wear/hWomens';
import Mens from '../../components/mensWear/men';


 


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
      <img className='img-womens' src='/home images/bluegirl.jpg' alt='WOMENS' />
      <div className='overlay'>
        <button>SHOP NOW</button>
        <h2>WOMENS</h2>
      </div>
    </div>

    <div className='category-card'>
      <img className='img-mens' src='/home images/bluemen.jpg' alt='MENS' />
      <div className='overlay'>
        <button>SHOP NOW</button>
        <h2>MENS</h2>
      </div>
    </div>
  </div>

  {/* Row 2 */}
  <div className='row'>
    <div className='category-card'>
      <img className='img-kids' src='/home images/kids.jpg' alt='KIDS' />
      <div className='overlay'>
        <button>SHOP NOW</button>
        <h2>KIDS</h2>
      </div>
    </div>

    <div className='category-card'>
      <img className='img-mom' src='/home images/mom.jpg' alt='MOTHER & BABY' />
      <div className='overlay'>
        <button>SHOP NOW</button>
        <h2>MOTHER & BABY</h2>
      </div>
    </div>
  </div>

  {/* Row 3 */}
  <div className='row'>
    <div className='category-card'>
      <img className='img-home' src='/home images/homecloths.jpg' alt='HOME & LIFESTYLE' />
      <div className='overlay'>
        <button>SHOP NOW</button>
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
