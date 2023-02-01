import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="kudara__footer section__padding">
    <div className="kudara__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="kudara__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="kudara__footer-links">
      <div className="kudara__footer-links_logo">
        <img src="" alt="kudara_logo" />
        <p>Kudara, <br /> All Rights Reserved</p>
      </div>
      <div className="kudara__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="kudara__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="kudara__footer-links_div">
        <h4>Get in touch</h4>
        <p>Citayam, Depok</p>
        <p>0812-345678</p>
        <p>info@kudara.com</p>
      </div>
    </div>

    <div className="kudara__footer-copyright">
      <p>@2022 Kudara. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;