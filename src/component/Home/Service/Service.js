import React from "react";
import { useNavigate } from "react-router";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };
  const { name, img, description, price, _id } = service || {};
  return (
    <div className="col-lg-4">
      <div className="p-4 m-4">
        <img width="300" src={img} alt="" />
        <h5> {name} </h5>
        <h4> $ {price}</h4>
        <p>{description}</p>
        <button onClick={() => handleDetails(_id)} className="btn btn-primary">
          More details
        </button>
      </div>
    </div>
  );
};

export default Service;
