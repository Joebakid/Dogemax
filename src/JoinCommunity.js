import React from "react";

function JoinCommunity({ Btn }) {
  return (
    <section>
      <div className="container">
        <div className="JoinCommunity-content">
          <h2>Join the dogemax community</h2>
          <p>
            Join a movement like no other. With
            <b className="highlighted-text-header"> DOGEMAX</b> , you’re not
            just investing you’re part of a vibrant community that’s all about
            sharing, laughing, and supporting one another.
          </p>
          <p>
            All information provided by DOGEMAX is for educational purposes
            only. Always conduct your own research before making financial
            decisions.
          </p>

          <Btn text="Join Community" href="link" />
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
