import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import { Helmet } from "react-helmet-async";

const Service = () => {
  const [service, setService] = useState({});

  const { id } = useParams();
  const idInt = parseInt(id);

  const services = useLoaderData();
  const servicesArray = services.services;

  useEffect(() => {
    const myService = servicesArray?.find((service) => service.ID === idInt);
    setService(myService);
  }, [idInt, servicesArray]);

  //console.log(service);

  return (
    <div>
      <Helmet>
        <title>Services | CAREER⚡FAIR</title>
      </Helmet>
      <ServiceDetails service={service}></ServiceDetails>
    </div>
  );
};

export default Service;
