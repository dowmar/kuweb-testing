import React from 'react'
import './header.css';
import Lottie from "lottie-react"
import earthAnimation from "../lottiefiles/earth-and-connections.json"
import { Link } from 'react-router-dom'
// import ai from '../../assets/asdfas.png';

const Header = () => {
  return (
    <div className='kudara__header  section__padding' id='home'>
      <div className="kudara__header-content">
        <h1 className="gradient__text">
          Real-time air quality data collection
        </h1>
        <p>Dengan kudara anda bisa mengumpulkan data kualitas udara dimanapun dan kapanpun. Menggunakan IoT dan mobile apps yang tersedia.</p>
        

      </div>
      <div className="kudara__header-image">
        {/* <img src="" alt="ai" /> */}
        <Lottie animationData={earthAnimation} loop={true} />
      </div>
    </div>
  )
}

export default Header