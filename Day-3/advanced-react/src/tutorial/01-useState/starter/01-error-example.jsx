const ErrorExample = () => {
 let count = 0;
 const handleIncrease = ()=>{
  count = count+1;
  console.log(count)
 }

  return(<>

<h2>{count}</h2>
<button onClick={handleIncrease} className="btn">increase</button>
  </>)
  

};

export default ErrorExample;
