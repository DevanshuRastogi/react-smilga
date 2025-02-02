import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refRee = useRef(null);
  console.log(refRee);



  const handleSubmit = (e) => {
    e.preventDefault();refRee.current.value = 100;
    console.log(refRee.current.value );
    refRee.current.focus();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' ref={refRee} id='name' className='form-input' />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
