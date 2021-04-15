import React from "react";
import { useState } from "react";
import "./manageServices.css";
import MsCard from "./MsCard/MsCard";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  fetch("https://mighty-tundra-68939.herokuapp.com/services")
    .then((response) => response.json())
    .then((data) => setServices(data));

  return (
    <div className="manage-services">
      <h3 className="admin-head">Manage services</h3>

      <div className="ms-head">
        <h5>title</h5>
        <h5>price</h5>
        <h5>remove</h5>
      </div>

      <div>
        {services.map((each, index) => (
          <MsCard service={each} key={each._id} />
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
