import { useEffect, useState } from "react";
import { SliderData } from "../DataPath/products";
import Carousels from "../components/Carousels";

const Home = () => {
  const [getSliderData, setSliderData] = useState([]);
  /* let [slide,setslide]=useState(0) */

  useEffect(() => {
    setSliderData(SliderData);
  }, []);


// console.log("slider data:", getSliderData);
  return (
    <>
    <div className="home">
  <Carousels data={getSliderData} />
    </div>
    </>
  );
};
export default Home;
