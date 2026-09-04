import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    stock: number;
    discountedPrice?: number;
    bestSeller?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = React.useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.stock === 0) {
      toast.error('Out of stock');
      return;
    }

    setIsAdding(true);
    try {
      await addToCart(product.id, 1);
    } finally {
      setIsAdding(false);
    }
  };

  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  const getStockStatus = () => {
    if (product.stock === 0) return 'out_of_stock';
    if (product.stock < 10) return 'low_stock';
    return 'in_stock';
  };

  const stockStatus = getStockStatus();
  const stockStatusColors = {
    in_stock: 'text-green-600 bg-green-100',
    low_stock: 'text-yellow-600 bg-yellow-100',
    out_of_stock: 'text-red-600 bg-red-100',
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/300'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.bestSeller && (
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              Best Seller
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${stockStatusColors[stockStatus]}`}>
            {stockStatus === 'in_stock' && 'In Stock'}
            {stockStatus === 'low_stock' && 'Low Stock'}
            {stockStatus === 'out_of_stock' && 'Out of Stock'}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <button
            onClick={handleAddToCart}
            disabled={isAdding || product.stock === 0}
            className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
          <button className="bg-white text-gray-600 p-2 rounded-full hover:text-red-500">
            <FiHeart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <div>
            {product.discountedPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary-600">
                  ₹{product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;