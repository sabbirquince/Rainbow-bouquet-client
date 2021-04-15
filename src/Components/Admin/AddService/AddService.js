import React, { useState } from "react";
import "./addService.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const [submitted, setSubmitted] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const allInfo = { ...data, imgUrl };
    console.log(allInfo);

    fetch("http://localhost:4060/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
      .then((res) => res.json())
      .then((data) => setSubmitted(data));
  };

  const handleImgUpload = (event) => {
    const img = event.target.files[0];

    const imgData = new FormData();
    imgData.append("key", "246e96dcf34f468ba529bf1e642a576d");
    imgData.append("image", img);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((result) => setImgUrl(result.data.data.url))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addService">
      <h3 className="admin-head">Add service</h3>

      <form
        className="addService-form d-flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* / ///////// left section /////////////// */}
        <section className="form-left mr-2">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Service Title
            </label>
            <input
              className="form-control shadow pr-4"
              placeholder="title"
              {...register("title")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Service description 1
            </label>
            <input
              className="form-control shadow pr-4"
              placeholder="description 1"
              {...register("description1")}
            />
          </div>
        </section>

        {/* / ///////// mid section /////////////// */}
        <section className="form-mid mr-2">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Service description 2
            </label>
            <input
              className="form-control shadow pr-4"
              placeholder="description 2"
              {...register("description2")}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Service description 3
            </label>
            <input
              className="form-control shadow pr-4"
              placeholder="description 3"
              {...register("description3")}
            />
          </div>
        </section>

        {/* / /////////  right section /////////////// */}
        <section className="form-right d-flex flex-column justify-content-between">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              image
            </label>
            <input
              onChange={handleImgUpload}
              className="form-control shadow"
              type="file"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Price
            </label>
            <input
              className="form-control shadow pr-4"
              placeholder="price"
              {...register("price")}
            />
          </div>

          {imgUrl ? (
            <input
              className="btn btn-warning align-self-stretch mt-3 mb-3"
              type="submit"
            />
          ) : (
            <button className="btn my-dis-btn align-self-stretch mt-3 mb-3">
              submit
            </button>
          )}
        </section>
      </form>

      {submitted && (
        <p className="p-5 text-warning text-center">
          Service is added successfully
        </p>
      )}
    </div>
  );
};

export default AddService;
