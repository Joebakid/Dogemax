import React from "react";

function WhatIsDogemax() {
  return (
    <section>
      <div className="container">
        <div className="WhatIsDogemax-content">
          <div className="WhatIsDogemax-write-up">
            <h2 className="WhatIsDogemax-title">What is dogemax</h2>
            <p className="WhatIsDogemax-text">
              DOGEMAX is your ultimate AI companion for all things Dogecoin.
              Designed to be friendly, humorous, and informative, DOGEMAX
              simplifies the Dogecoin journey for everyone. Whether you’re a
              seasoned trader or just curious about crypto, DOGEMAX has got your
              back.
            </p>
          </div>

          <div>
            <img
              className="WhatIsDogemax-img"
              src="img/dogemax-img.jpeg"
              alt="dogemax-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIsDogemax;
