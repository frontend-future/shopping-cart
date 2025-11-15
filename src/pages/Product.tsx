import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Product.css';

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : null;
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data: ApiProduct = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);


  if (loading) {
    return (
      <>
        <Navbar />
        <div className="product-container">
          <div className="product-loading">
            <p>Loading product...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <div className="product-container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <p>{error || "The product you're looking for doesn't exist."}</p>
          </div>
        </div>
      </>
    );
  }

  // TODO: Implement add to cart functionality
  const handleAddToCart = () => {
    console.log('add to cart clicked!');

    // Add product to cart state/context
  };

  // TODO: Implement buy now functionality
  const handleBuyNow = () => {
    console.log('buy now clicked!');

    // Navigate to checkout with this product
  };

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-details">
          <div className="product-image-section">
            {product.image ? (
              <img src={product.image} alt={product.title} className="product-image" />
            ) : (
              <div className="product-image-placeholder">
                {product.title}
              </div>
            )}
          </div>
          <div className="product-info-section">
            <h1 className="product-name">{product.title}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-actions">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

