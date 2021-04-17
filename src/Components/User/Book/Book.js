import React from "react";
import "./book.css";
import { useForm } from "react-hook-form";
import StripePayment from "../StripePayment/StripePayment";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../../../App";
import { Spinner } from "react-bootstrap";

const Book = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const { email, displayName } = loggedIn;

  const [spinner, setSpinner] = useState(false);

  const [booked, setBooked] = useState(false);

  const [loadService, setLoadService] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://mighty-tundra-68939.herokuapp.com/getService?id=${id}`)
      .then((res) => res.json())
      .then((data) => setLoadService(data[0]));
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [serviceInfo, setServiceInfo] = useState(null);

  const onSubmit = (data) => {
    const allBookInfo = {
      email,
      displayName,
      imgUrl: loadService.imgUrl,
      price: loadService.price,
      address: data.address,
      service: loadService.title,
      status: "Pending",
      description: {
        one: loadService.description1,
        two: loadService.description2,
        three: loadService.description3,
      },
    };
    setServiceInfo(allBookInfo);
  };

  return (
    <div className="book">
      <h3 className="admin-head">Book a service</h3>

      <form className="book-form px-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Your name</label>
          <input
            className="form-control"
            placeholder="name"
            value={loggedIn?.displayName}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-warning py-1">This field is required</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Your Email address</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={loggedIn?.email}
            className="form-control"
            {...register("email")}
          />
        </div>

        {!loadService ? (
          <div className="mb-3">
            <label className="form-label">Service</label>

            <input
              className="form-control"
              type="text"
              placeholder="select a service from services page"
              aria-label="select a service from services page"
              value={loadService?.title}
              {...register("service", { required: true })}
              readOnly
              disabled
            />
            {errors.service && (
              <span className="text-warning py-1">
                Please select a service from services page.
              </span>
            )}
          </div>
        ) : (
          <div className="mb-3">
            <label className="form-label">Service</label>

            <input
              className="form-control"
              type="text"
              placeholder="select a service from services page"
              aria-label="select a service from services page"
              value={loadService.title}
              {...register("service")}
              readOnly
            />
            {errors.service && (
              <span className="text-warning py-1">
                Click 'submit to pay' again to proceed.
              </span>
            )}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            placeholder="Price"
            className="form-control"
            value={loadService?.price}
            {...register("price")}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your address</label>
          <input
            type="text"
            placeholder="Your address"
            className="form-control"
            {...register("address", { required: true })}
          />
        </div>

        {serviceInfo && (
          <p className="text-warning pt-1">
            Your booking is set to confirm. Please write payment <br />
            information below to book successfully.
          </p>
        )}

        <input
          className="btn btn-warning"
          type="submit"
          value="Submit to pay"
        />
      </form>

      <div className="payment px-2">
        <StripePayment
          setBooked={setBooked}
          setSpinner={setSpinner}
          serviceInfo={serviceInfo}
        />
      </div>

      {spinner && !booked && (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
        </div>
      )}

      <div>
        {booked && (
          <p className="text-warning mb-5 pt-2 text-center">
            Service is booked successfully. Be patient, we'll get back to you
            soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
