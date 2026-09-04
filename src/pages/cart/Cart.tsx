import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';
import Loader from '../../components/common/Loader';

const Cart: React.FC = () => {
  const { cart, loading, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (loading) return <Loader />;

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <FiShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    if (!user) {
      navigate('/login', { state: { from: '/checkout' } });
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {cart.totalItems} {cart.totalItems === 1 ? 'Item' : 'Items'}
                </span>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <FiTrash2 />
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="divide-y">
              {cart.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <CartSummary
            subtotal={cart.subtotal}
            shipping={50} // Example shipping charge
            tax={cart.subtotal * 0.18} // 18% GST
            total={cart.subtotal + 50 + (cart.subtotal * 0.18)}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;