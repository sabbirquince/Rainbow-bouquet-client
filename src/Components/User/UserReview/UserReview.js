import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../../App";
import "./userReview.css";

const UserReview = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const review = { ...data, photoURL: loggedIn.photoURL };

    fetch("https://mighty-tundra-68939.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <h3 className="admin-head">Your orders</h3>

      <form className="p-2 user-review-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Your review
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            {...register("review", { required: true })}
          ></textarea>
        </div>

        <input className="btn btn-warning" type="submit" />
      </form>
    </div>
  );
};

export default UserReview;
