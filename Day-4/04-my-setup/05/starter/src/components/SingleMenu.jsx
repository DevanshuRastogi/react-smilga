import React from "react";

const SingleMenu = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="menu-item" onClick={()=>handleCat}>

      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </header>
        <div className="item-text">{desc}</div>
      </div>
    </article>
  );
};

export default SingleMenu;
