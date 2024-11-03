import React from "react";
import "./Testimonial.css";
import person from '../../assets/fourth-img.png';
import client_logo from '../../assets/client-logo.png';
const Testimonial = () => {
  return (
    <div className="testimonial ">
      <div className="content container">
        <div className="text">
          <h4>TESTIMONIAL</h4>
          <h1>Our happy customer love us</h1>
        </div>

        <div className="testimonial-card">
            <div className="img-card">
                <img src={person} alt="" />
            </div>
            <div className="text-card">
                <div className="logo-card">
                    <img src={client_logo} alt="" />
                    <p>Logoipsum</p>
                </div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. Aweosme block theme."</p>
                <div className="names-card">
                    <h4>Katherine Moss</h4>
                    <p>Operational Manager at Block Studio</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
