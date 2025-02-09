import React from "react";

const CategoriesBar = ({ category, handleCat }) => {
  console.log({ category });
  return (
    <div className="btn-container">
      {category.map((cate) => (
        <button className="btn" onClick={()=>handleCat(cate)}>{cate}</button>
      ))}

    </div>
  );
};

export default CategoriesBar;
