import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Frontend Future</h1>
          <p className="home-blurb">
            Discover the future of shopping with our amazing selection of products.
            We offer the best quality items at unbeatable prices. Experience modern
            ecommerce like never before!
          </p>
          <div className="home-links">
            <Link to="/browse" className="home-link">Browse Products</Link>
            <Link to="/cart" className="home-link">View Cart</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

