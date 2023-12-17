import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  //console.log(services);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-8">
        <h1 className="text-5xl font-semibold text-center mb-7">
          Our Services
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServicesCard key={service.ID} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
