import { useEffect } from "react";
import { useState } from "react";
import AllJobs from "./AllJobs";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const respo = await fetch(url);
        const result = await respo.json();
        // console.log(result);
        result?.length !== 0 ? setJobs(result) : setJobs([]);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <h1>loading..........</h1>
        </>
      ) : (
        <>{jobs.length !== 0 && <AllJobs jobs={jobs} />}</>
      )}
    </div>
  );
};
export default App;
