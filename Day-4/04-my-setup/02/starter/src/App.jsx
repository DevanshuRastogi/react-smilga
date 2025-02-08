import { use, useEffect, useState } from "react";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const delteTour = ({ id }) => {
    console.log(id);

    const newArrayTour = tour.filter((tours) => tours.id !== id);
    setTour(newArrayTour);
  };
  const fetchTours = async () => {
    const dataResp = await fetch(url);
    const result = await dataResp.json();

    setTour(result);
  };
  useEffect(() => {
    fetchTours();

    tour?.length == 0 ? setLoading(true) : setLoading(false);
  }, []);

  console.log(tour);
  console.log(loading);
  return (
    <main>
      <Tours tour={tour} delteTour={delteTour} />
    </main>
  );
};
export default App;
