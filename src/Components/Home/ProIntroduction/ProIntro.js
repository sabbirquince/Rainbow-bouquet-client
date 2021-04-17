import React from "react";
import "./proIntro.css";
import ProIntroCard from "./ProIntroCard/ProIntroCard";
import proOne from "../../../images/review(3).jpg";
import proTwo from "../../../images/review(2).jpg";
import proThree from "../../../images/review(1).jpg";

const ProIntro = () => {
  return (
    <div className="my-container py-4">
      <p>Professionals</p>
      <h2>
        Meet our frontline <br /> Professionals
      </h2>

      <div className="row g-2 my-3 my-md-5">
        <div className="col-12 col-sm-6">
          <ProIntroCard proImg={proOne} />
        </div>
        <div className="col-12 col-sm-6">
          <ProIntroCard proImg={proTwo} />
        </div>
        <div className="col-12 col-sm-6">
          <ProIntroCard proImg={proThree} />
        </div>
        <div className="col-12 col-sm-6">
          <ProIntroCard proImg={proOne} />
        </div>
      </div>
    </div>
  );
};

export default ProIntro;
