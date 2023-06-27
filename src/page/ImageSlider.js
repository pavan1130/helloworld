import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../page/ImageSlider.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleRegister = () => {
    // Handle register button click event
    // Add your logic here
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="image-slider">
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-our-services-concept-meaning-occupation-function-serving-intangible-products-male-wear-160644151.jpg"
            alt="1"
          />
          <div className="register-button-container">
            <button className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1199694568/photo/automation-and-optimisation-concept-business-process.jpg?s=612x612&w=0&k=20&c=zoI93YT1Efe5_N1jsjypppN9mLc56y1wPAceRSIpgek="
            alt="2"
          />
          <div className="register-button-container">
            <button className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://www.swiftsystems.com/images/best-it-managed-services-companies.png"
            alt="3"
          />
          <div className="register-button-container">
            <button className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
