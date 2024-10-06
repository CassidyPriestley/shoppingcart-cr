import { useCart } from "../context/CartContex";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  const { total, cartList } = useCart();
  console.log(cartList);

  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Products: {cartList.length} | ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
