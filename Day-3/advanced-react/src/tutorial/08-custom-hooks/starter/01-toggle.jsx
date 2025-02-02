import {useToggler} from "./useToggler";


const ToggleExample = () => {
 const {hide ,toggleHide} = useToggler(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggleHide}>
        toggle
      </button>
      {hide && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
