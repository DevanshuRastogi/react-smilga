import { useState } from "react";

const MultipleInputs = () => {
  const [user , setUser] = useState({
    name : "",
    email : "",
    password:"",
  })

  const handleChange = (e) =>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({...user , [e.target.name]:e.target.value})
  }
  return (
    <div>
      <form className='form' onSubmit={(e)=>{e.preventDefault()
        console.log(first)
      }}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label' >
            name
          </label>
          <input onChange = {handleChange} type='text'  className='form-input' id='name'  name="name"/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input onChange = {handleChange} type='email' className='form-input' id='email' name="email" />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input onChange = {handleChange} type='password' className='form-input' id='password'  name="password"/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
