import React from "react";
import useServices from "../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1> Best Service We Offer </h1>
        <p className="w-50 mx-auto">
          We try our best to make you happy, we and all our staff work very hard
          and they always behave very well.Our service is down there so you can
          take whatever you need
        </p>
      </div>
      <div className="row">
        {services.map((service) => (
          <Service key={services._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

/* 
https://i.ibb.co/k16R8f6/2.jpg
https://i.ibb.co/ByP1vVt/3.jpg
https://i.ibb.co/34ZVcH6/5.jpg
https://i.ibb.co/QHzyfQZ/6.jpg
https://i.ibb.co/RDGq1WX/7.jpg
 OGtmvexlmjVLBnvA
Plumbing-web 

*/
