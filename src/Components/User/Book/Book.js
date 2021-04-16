import React from "react";
import "./book.css";
import { useForm } from "react-hook-form";
import StripePayment from "../StripePayment/StripePayment";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../../../App";

const Book = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [booked, setBooked] = useState(false);
  const [loadService, setLoadService] = useState("");

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://mighty-tundra-68939.herokuapp.com/getService?id=${id}`)
      .then((res) => res.json())
      .then((data) => setLoadService(data[0]));
  }, [id]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [serviceInfo, setServiceInfo] = useState(null);
  console.log(serviceInfo);

  const onSubmit = (data) => {
    const allBookInfo = { ...data, service: loadService.title };
    setServiceInfo(allBookInfo);
  };

  return (
    <div className="book">
      <h3 className="admin-head">Add service</h3>

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
            defaultValue={loggedIn?.email}
            {...register("email")}
          />
        </div>

        {loadService === "" ? (
          <div className="mb-3">
            <label className="form-label">Service</label>

            <input
              className="form-control"
              type="text"
              placeholder="select a service from homepage"
              aria-label="select a service from homepage"
              value={loadService?.title}
              {...register("service", { required: true })}
              readonly
              disabled
            />

            {errors.service && (
              <span className="text-warning py-1">
                Please select a plan. <br /> If selected click submit again
              </span>
            )}
          </div>
        ) : (
          <div className="mb-3">
            <label className="form-label">Service</label>

            <input
              className="form-control"
              type="text"
              placeholder="select a service from homepage"
              aria-label="select a service from homepage"
              value={loadService?.title}
              {...register("service", { required: true })}
              readonly
            />

            {errors.service && (
              <span className="text-warning py-1">
                Please select a plan. <br /> If selected click submit again
              </span>
            )}
          </div>
        )}

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
        <StripePayment setBooked={setBooked} serviceInfo={serviceInfo} />
      </div>

      {booked && (
        <p className="text-warning mb-5 text-center">
          Service is booked successfully. Be patient, we'll get back to you
          soon.
        </p>
      )}
    </div>
  );
};

export default Book;
