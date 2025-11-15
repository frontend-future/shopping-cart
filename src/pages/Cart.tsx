import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Cart.css';

const Cart = () => {
  // TODO: Implement cart state management to fetch and display cart items
  // TODO: Calculate total price from cart items
  // TODO: Integrate with API to fetch cart data

  const cartItems: any[] = []; // Placeholder - replace with actual cart state
  const total = 0; // Placeholder - calculate from cart items

  // TODO: Implement checkout functionality
  const handleCheckout = () => {
    // Navigate to checkout page or process checkout
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <Link to="/browse" className="cart-browse-link">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {/* TODO: Map through cart items and display them */}
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  {/* Cart item display will go here */}
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-total">
                <h2>Total: ${total.toFixed(2)}</h2>
              </div>
              <button className="btn-checkout" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

