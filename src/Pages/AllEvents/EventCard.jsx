import toast from "react-hot-toast";
import { FaLocationDot, FaRegClock, FaCalendarDay } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventCard = ({ event }) => {
  const { status, title, location, time, date } = event || {};
  const handleJoinNow = () => {
    toast.success(`Thanks for joining "${title}" 🎉`);
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="flip-up">
      <div
        className={`flex border-4  rounded-lg mb-8 ${
          status ? "border-slate-700" : "bg-slate-700 text-white"
        }`}
      >
        <div className="text-2xl sm:text-3xl text-right font-semibold w-2/5 md:w-1/4 lg:w-1/5 px-2 pr-5 flex items-center justify-end">
          <h1>{status ? "Upcoming Event" : "Past Event"}</h1>
        </div>
        <div
          className={`border-l-4 py-5 pl-5 space-y-3 w-2/5 md:w-3/4 lg:w-4/5 ${
            status ? "border-slate-700" : "border-white"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
          <div className="text-sm sm:text-base space-y-1">
            <p className="flex items-center">
              <FaLocationDot /> &nbsp;{location}
            </p>
            <p className="flex items-center">
              <FaRegClock /> &nbsp;{time}
            </p>
            <p className="flex items-center">
              <FaCalendarDay /> &nbsp;{date}
            </p>
          </div>
          {status === 1 && (
            <button
              onClick={handleJoinNow}
              className="btn btn-active bg-transparent border-slate-800 border-2 text-slate-800 rounded-none"
            >
              Join Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
