import React from 'react'
import './whatkudara.css';
import { Feature } from '../../components';

const Whatkudara = () => {
  return (
    <div className='kudara__whatkudara section__margin' id='wkudara'>
      <div id='poss-section' className='kudara__whatkudara-feature'>
        <Feature title="Explore dengan Kudara" text="Kudara is an air-quality detector app." />
      </div>
      <div className="kudara__whatkudara-heading">
        <h1 className='gradient__text'>Posibilitas Tanpa Batas</h1>

      </div>
      <div className="kudara__whatkudara-container">
        <Feature title="Real-time data" text="By using one of our available iot device, we can capture real-time air quality data" />
        <Feature title="Favorites" text="You can favorite your desired datasets, delete your data privately on our website" />
        <Feature title="Join anytime" text="You can login to our mobile and web apps using google account" />
      </div>
    </div>
  )
}

export default Whatkudara