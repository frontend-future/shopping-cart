import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image?: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="product-card-placeholder">No Image</div>
        )}
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-price">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

