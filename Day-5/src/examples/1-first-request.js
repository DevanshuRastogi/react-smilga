import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';


const fetchReq= async()=>{

  const respo = await axios(url);
  const data = await respo.data;
  console.log(data)
}
const FirstRequest = () => {
  useEffect(() => {
    fetchReq();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
