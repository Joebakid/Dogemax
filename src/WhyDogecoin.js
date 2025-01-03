import React from "react";
import { IconOne } from "./SvgTwo";
import { IconTwo } from "./SvgTwo";
import { IconThree } from "./SvgTwo";

function WhyDogecoin({ Card }) {
  return (
    <section>
      <div className="container">
        <div className="WhyDogecoin-cotent">
          <div>
            <img
              className="WhyDogecoin-img"
              src="/img/dogecoin-logo.png"
              alt="dogecoin logo"
            />
          </div>
          <div className="WhyDogecoin-write-up">
            <h2 className="WhyDogecoin-title">Why Dogecoin ?</h2>
            <p className="WhyDogecoin-text">
              Dogecoin is more than just a cryptocurrency; it’s a movement
              fueled by a passionate and growing community. Here’s what makes it
              unique
            </p>
          </div>
        </div>

        <div>
          <h2 className="more-title">Why Dogecoin?</h2>
          <div className="more-content">
            <Card
              text="Powered by millions of dedicated “Shibes”"
              icon={<IconOne />}
            />
            <Card text="Fast transactions with low fees" icon={<IconTwo />} />

            <Card
              text="Fun Factor, Who said crypto can’t be playful and enjoyable?"
              icon={<IconThree />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDogecoin;
