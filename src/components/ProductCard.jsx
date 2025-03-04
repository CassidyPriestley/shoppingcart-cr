import { useEffect, useState } from "react";
import { useCart } from "../context/CartContex";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsIncart] = useState(false);
  const { id, name, price, image } = product;

  useEffect(() => {
    // This will return boolean value
    // TRUE: change button text to remove
    // FALSE: default to add to cart button
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsIncart(true);
    } else {
      setIsIncart(false);
    }
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
