import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const liClass = inCart ? "in-cart" : ""

  const handleClick = function() {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
