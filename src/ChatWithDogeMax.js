import React from "react";

function ChatWithDogeMax({ Btn }) {
  return (
    <section>
      <div className="container">
        <div className="memecoin-img">
          <img
            className="memecoin-dogemax"
            src=" /img/memecoin-img.png"
            alt="is dogemax a memecoin?"
          />
        </div>
        <div className="ChatWithDogeMax-content">
          <div className="ChatWithDogeMax-ttile-text">
            <h2 className="ChatWithDogeMax-title">Chat with DOGEMAX</h2>
            <h3 className="ChatWithDogeMax-text">
              Your Personal Dogecoin Guru{" "}
            </h3>
          </div>
          <Btn text="Ask Dogemax" />
        </div>
        <div className="unique">
          <img
            // className="unique"
            src=" /img/unique.png"
            alt="what makes it unique?"
          />
        </div>
      </div>
    </section>
  );
}

export default ChatWithDogeMax;
