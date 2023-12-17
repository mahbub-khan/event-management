import { FaHouseChimney, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const { title, description, images, startingPrice } = service || null;
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-xl font-medium">
        <Link to="/">
          <FaHouseChimney />
        </Link>
        <FaAngleRight />
        <h1>Our Service</h1>
        <FaAngleRight />
        <h1 className="text-2xl sm:text-5xl font-medium mb-5">{title}</h1>
      </div>
      <div>
        <div className="shadow-2xl rounded-lg sm:float-left sm:mr-6 mb-2 sm:w-3/5">
          <img className="w-full rounded-lg" src={images} alt={title} />
        </div>

        <div className="text-lg sm:text-xl md:text-2xl text-justify">
          <p>{description}</p>
          <p className=" mt-6 p-4 border-2 inline-block border-slate-800 mr-4">
            Starting Price: {startingPrice} €
          </p>

          <Link to="/" className="inline-block">
            <p className="flex justify-center items-center mt-6 p-4 border-2 border-slate-800 w-[150px] bg-slate-800 text-white">
              <span>Go to &nbsp;</span>
              <FaHouseChimney />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
