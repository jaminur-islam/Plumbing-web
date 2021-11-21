import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavigationBar from "../../Shared/Navbar/NavigationBar";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { name, img, description, _id, price } = service;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="details-banner">
        <div className="container overflow-hidden">
          <h1 className="text-center text-white mt-5">{name}</h1>
          <div className="text-center">
            <Link className="text-white fs-5 text-decoration-none" to="/home">
              Home
            </Link>

            <Link
              className="text-white fs-5 text-decoration-none"
              to="/services"
            >
              /Services
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <img width="500" src={img} alt="" />
              <h1> {name} </h1>
              <p>
                {description} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Doloribus sequi provident ad mollitia a fugiat
                perferendis ipsam odio deleniti? Harum suscipit voluptate aut
                totam sunt obcaecati, laborum alias dolore consequuntur nostrum
                voluptatibus nobis rem tenetur recusandae repellendus eaque
                officia iusto itaque non consectetur, placeat deserunt sint.
                Laborum eveniet sed corrupti libero nam ullam fuga maxime itaque
                totam exercitationem voluptates adipisci, ipsa reprehenderit
                rerum inventore nemo tenetur qui possimus fugiat consectetur
                quaerat sequi aut. Magni cupiditate deserunt recusandae
                obcaecati repellendus eligendi, saepe pariatur sit omnis in
                adipisci laudantium accusamus ullam, est molestias voluptatibus
                sed explicabo vel corrupti illo perferendis autem fugiat!
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
