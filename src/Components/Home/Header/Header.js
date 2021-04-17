import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="my-cl-sec header d-flex justify-content-start">
      <div>
        <h1 className="pt-5 pl-3 pl-sm-5">
          Get Hold <br /> of Your <br /> Reminiscence
        </h1>
        <p className="px-3 px-sm-5">
          Event photography management service just one click <br /> away. Let
          us walk alongside you to solidify your memories.
        </p>

        <button className="btn btn-warning px-4 ml-3 ml-sm-5">Book Now</button>
      </div>
    </div>
  );
};

export default Header;
