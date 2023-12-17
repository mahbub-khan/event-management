import { Helmet } from "react-helmet-async";
import { FaHouseChimney } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <Helmet>
        <title>Join US | CAREER⚡FAIR</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-5">This is just a demo page</h1>

        <Link to="/">
          <button className="btn btn-active rounded-none bg-transparent">
            Go to Home <FaHouseChimney />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Career;
