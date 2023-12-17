import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | CAREER⚡FAIR</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
