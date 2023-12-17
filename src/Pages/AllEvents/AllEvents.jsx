import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";
import { Helmet } from "react-helmet-async";

const AllEvents = () => {
  const allEvents = useLoaderData();
  const events = allEvents.careerFairs;
  return (
    <div>
      <Helmet>
        <title>Our Events | CAREER⚡FAIR</title>
      </Helmet>

      <div className="max-w-7xl mx-auto py-16 px-8">
        <h1 className="text-5xl font-semibold text-center mb-7">Our Events</h1>
        <div>
          {events.map((event) => (
            <EventCard key={event.id} event={event}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
