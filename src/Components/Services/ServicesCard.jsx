import {
  FaCalendarDays,
  FaMicrophoneLines,
  FaCubes,
  FaTicket,
  FaDesktop,
  FaUserTie,
  FaAnglesRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesCard = ({ service }) => {
  const { ID, title } = service;
  let iconComponent;

  switch (ID) {
    case 1:
      iconComponent = <FaCalendarDays />;
      break;
    case 2:
      iconComponent = <FaMicrophoneLines />;
      break;
    case 3:
      iconComponent = <FaCubes />;
      break;
    case 4:
      iconComponent = <FaTicket />;
      break;
    case 5:
      iconComponent = <FaDesktop />;
      break;
    case 6:
      iconComponent = <FaUserTie />;
      break;
    default:
      iconComponent = null;
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="flip-left" data-aos-once="true">
      <div className="text-center border-2 p-6 shadow-lg">
        <p className="flex items-center justify-center text-5xl">
          {iconComponent}
        </p>
        <h1 className="text-xl font-medium py-6">{title}</h1>
        <Link to={`/service/${ID}`}>
          <button className="btn btn-active rounded-none bg-transparent">
            Learn More <FaAnglesRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
