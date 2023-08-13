import "./Featured.css";

import House1 from "../../assets/house1.jpeg";
import Bed1 from "../../assets/bed1.jpeg";
import Bed2 from "../../assets/bed2.jpeg";
import Kitchen from "../../assets/kitchen1.jpeg";
import Bathroom from "../../assets/bath1.jpeg";

import House2 from "../../assets/house2.jpeg";
import Bed3 from "../../assets/bed3.jpeg";
import Bed4 from "../../assets/bed4.jpeg";
import Bathroom2 from "../../assets/bath2.jpeg";
import LivingRoom from "../../assets/living-room.jpeg";

function Featured() {
  return (
    <div className="featured">
      <div className="featured__heading">
        <h2>Top Featured Listings</h2>
        <p>Selected listings by City, State, & Zip based on views.</p>
      </div>

      <div className="container">
        <img className="span-2 image-grid-row-2" src={House1} alt="" />
        <img src={Bed1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bathroom} alt="" />
        <div className="span-2">
          <div className="info-top">
            <h3> vul. Shevchenka, 56, Kyiv</h3>
            <p>House for Sale</p>
            <p className="info-top__price">$1,477,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info-grid__item">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info-grid__item">
                <p className="bold">Bathrooms:</p>
                <p>2</p>
              </div>
            </div>
            <div>
              <div className="info-grid__item">
                <p className="bold">Square Meters:</p>
                <p>545</p>
              </div>
              <div className="info-grid__item">
                <p className="bold">Est Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" desc">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      <div className="container">
        <img className="order-2" src={Bed3} alt="" />
        <img className="order-3" src={Bed4} alt="" />

        <img className="span-2 image-grid-row-2 order-1" src={House2} alt="" />

        <img className="order-4" src={Bathroom2} alt="" />
        <img className="order-5" src={LivingRoom} alt="" />

        <div className=" desc order-7">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Texas. Including media room,
            workout facility, and built-in sauna.
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-2 order-6">
          <div className="info-top">
            <h3>vul. Mazepy, 320, Kyiv</h3>
            <p>House for Sale</p>
            <p className="info-top__price">$1,090,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info-grid__item">
                <p className="bold">Bedrooms:</p>
                <p>3</p>
              </div>
              <div className="info-grid__item">
                <p className="bold">Bathrooms:</p>
                <p>2</p>
              </div>
            </div>
            <div>
              <div className="info-grid__item">
                <p className="bold">Square Meters:</p>
                <p>258</p>
              </div>
              <div className="info-grid__item">
                <p className="bold">Est Payment:</p>
                <p>$8,797/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
