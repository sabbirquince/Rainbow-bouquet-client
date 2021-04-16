import React from "react";
import "./proIntro.css";
import ProIntroCard from "./ProIntroCard/ProIntroCard";

const ProIntro = () => {
  return (
    <div className="my-container py-4">
      <p>Professional</p>
      <h2>
        Meet our frontline <br /> Professionals
      </h2>

      <div className="row g-2 my-5">
        <div className="col-6">
          <ProIntroCard />
        </div>
        <div className="col-6">
          <ProIntroCard />
        </div>
        <div className="col-6">
          <ProIntroCard />
        </div>
        <div className="col-6">
          <ProIntroCard />
        </div>
      </div>
    </div>
  );
};

export default ProIntro;
