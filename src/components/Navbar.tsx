import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getTotalCount } = useCart();
  const cartCount = getTotalCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          FrontendFuture
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/browse" className="navbar-link">Browse</Link>
          <Link to="/cart" className="navbar-link">
            Cart{cartCount > 0 ? ` (${cartCount})` : ''}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

