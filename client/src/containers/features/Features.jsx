import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Constantly Improving',
    text: 'Kudara terus berkembang, dari sektor Teknologi IoT, WebApps, MobileApps',
  },
  {
    title: 'Becoming more active',
    text: 'Dengan Kudara diharapkan user menjadi aktif merawat lingkungan sekitar',
  },
  {
    title: 'Open Source',
    text: 'Semua code dari kudara webapp dan mobile app dapan di dapatkan di fork di repository pemilik',
  },
  {
    title: 'Ease of use',
    text: 'Dengan 4 tekan saja, makan anda dapat mengakses mobile apps secara langsung',
  },
];

const Features = () => (
  <div className="kudara__features section__padding" id="features">
    <div className="kudara__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Pre order IoT sekarang</p>
    </div>
    <div className="kudara__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;