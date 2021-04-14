import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="my-cl-sec header d-flex justify-content-start ">
      <div>
        <h1 className="p-5">
          Get Hold <br /> of Your <br /> Reminiscence
        </h1>
        <p className="px-5">
          Event photography management service just one click away. <br /> Let
          us be your company to solidify your memories.
        </p>

        <button className="btn btn-warning px-4 ml-5">Book Now</button>
      </div>
    </div>
  );
};

export default Header;