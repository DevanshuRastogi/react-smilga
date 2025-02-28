import { useEffect } from 'react';
import Intercept from '../axiosExample/intercept';

const url = '/react-store-products';


const Interceptors = () => {
  const fetchData = async () => {
    const {data} = await Intercept(url);
    console.log(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
