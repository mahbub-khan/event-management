import { Link } from "react-router-dom";
import { FaLocationDot, FaRegClock, FaCalendarDay } from "react-icons/fa6";

const Event = ({ event }) => {
  const { title, location, time, date } = event || {};

  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold mb-3">Our Upcoming Event:</h2>
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <div className="text-lg space-y-2">
          <p className="flex justify-center items-center">
            <FaLocationDot /> &nbsp;{location}
          </p>
          <p className="flex justify-center items-center">
            <FaRegClock /> &nbsp;{time}
          </p>
          <p className="flex justify-center items-center">
            <FaCalendarDay /> &nbsp;{date}
          </p>
        </div>
        <Link to="/allevents">
          <button className="btn btn-active bg-transparent border-slate-800 border-2 text-slate-800 rounded-none mt-4">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Event;
