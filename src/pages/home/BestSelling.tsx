import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { productApi } from '../../services/api/product.api';
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/common/Loader';

const BestSelling: React.FC = () => {
  const { data, isLoading, error } = useQuery(
    'bestSellers',
    () => productApi.getBestSellers(),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  if (isLoading) return <Loader />;
  if (error) return null;

  const products = data?.data || [];

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Selling Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular products loved by customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products?bestSeller=true"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition duration-300"
          >
            View All Best Sellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;