import "./Home.css";
import Melocaliser from "../../component/Melocaliser/Melocaliser";
import Presta from "../../component/Presta/Presta";
const Home = () => {
  return (
    <div className="home">
      <h1>this is your home page</h1>
      <Presta />
      <Melocaliser />
    </div>
  );
};

export default Home;
