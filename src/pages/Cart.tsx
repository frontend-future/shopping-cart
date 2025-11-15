import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // TODO: Implement checkout functionality
  const handleCheckout = () => {
    // Navigate to checkout page or process checkout
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty</p>
            <Link to="/browse" className="cart-browse-link">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => {
                const subtotal = item.price * item.quantity;
                return (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      {item.image ? (
                        <img src={item.image} alt={item.title} />
                      ) : (
                        <div className="cart-item-placeholder">No Image</div>
                      )}
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">{item.title}</h3>
                      <p className="cart-item-price">${item.price.toFixed(2)} per unit</p>
                      <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                      <p className="cart-item-subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="cart-item-actions">
                      <button
                        className="btn-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
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

