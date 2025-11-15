import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './Browse.css';

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Browse = () => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products'); // making a GET request
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: ApiProduct[] = await response.json();
        // Take the first 9 items
        setProducts(data.slice(0, 9));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="browse-container">
        <h1 className="browse-title">Browse Products</h1>
        {loading && <p className="browse-loading">Loading products...</p>}
        {error && <p className="browse-error">Error: {error}</p>}
        {!loading && !error && (
          <div className="browse-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Browse;

