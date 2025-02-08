import React from "react";

const Tour = ({ id, name, info, image, price , delteTour }) => {
 
  return (
    <div className="single-tour">
      <div className="tour-price">{price}</div>

      <img src={image} alt="" className="img" />
      <div className="tour-info">
        <h5>{name}</h5>

        <p>{info}</p>
      </div>

      <button className="delete-btn" onClick={()=> delteTour({id})}>
        delete
      </button>
    </div>
  );
};

export default Tour;
