import React from "react";
import Tour from  './Tour'
const Tours = ({ tour , delteTour }) => {
  return (
    <div className="tours">
      {tour.map((tours) => (
        <h1 key={tours.id}><Tour  {...tours} delteTour={delteTour}/></h1>
      ))}

      
    </div>
  );
};

export default Tours;
