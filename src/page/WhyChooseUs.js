import React from "react";
import "./WhyChooseUs.css";
import image1 from "../page/a.jpg";
import image2 from "../page/a.jpg";
import image3 from "../page/a.jpg";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="choose-us-container">
        <div className="choose-us-item">
          <div className="item-image">
            <img src={image1} alt="Quality Service" />
          </div>
          <div className="item-content">
            <h3>Quality Service</h3>
            <p>
              We provide top-notch quality service to meet our customers' needs.
            </p>
          </div>
        </div>
        <div className="choose-us-item">
          <div className="item-image">
            <img src={image2} alt="Experienced Team" />
          </div>
          <div className="item-content">
            <h3>Experienced Team</h3>
            <p>
              Our team consists of experienced professionals in the industry.
            </p>
          </div>
        </div>
        <div className="choose-us-item">
          <div className="item-image">
            <img src={image3} alt="Timely Delivery" />
          </div>
          <div className="item-content">
            <h3>Timely Delivery</h3>
            <p>We ensure timely delivery of our products and services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
