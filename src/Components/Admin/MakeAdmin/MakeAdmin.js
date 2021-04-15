import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [made, setMade] = useState(false);

  const onSubmit = (data) => {
    fetch("https://mighty-tundra-68939.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setMade(data));
  };

  return (
    <div className="makeAdmin">
      <h3 className="admin-head">Make Admin</h3>

      <form className="d-flex px-5 py-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="admin-email"
            placeholder="name@example.com"
            {...register("email", { required: true })}
          />
        </div>

        <input className="btn btn-warning align-self-end ml-3" type="submit" />
      </form>

      {made && (
        <p className="text-warning py-3 px-5">
          Email added and made admin successfully
        </p>
      )}
    </div>
  );
};

export default MakeAdmin;
