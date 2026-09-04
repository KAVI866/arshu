import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';
import { productApi } from '../../services/api/product.api';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/common/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import toast from 'react-hot-toast';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);

  const { data, isLoading, error } = useQuery(
    ['product', id],
    () => productApi.getProductById(Number(id)),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading product</div>;

  const product = data?.data.product;
  const relatedProducts = data?.data.relatedProducts || [];

  if (!product) return <div>Product not found</div>;

  const allImages = [product.imageUrl, ...(product.subImages || [])].filter(Boolean);

  const handleAddToCart = async () => {
    try {
      await addToCart(product.id, quantity);
      toast.success('Added to cart successfully!');
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  const stockStatus = product.stock === 0 ? 'Out of Stock' : product.stock < 10 ? 'Low Stock' : 'In Stock';
  const stockStatusColor = product.stock === 0 ? 'text-red-600' : product.stock < 10 ? 'text-yellow-600' : 'text-green-600';

  return (
    <>
      <Helmet>
        <title>{product.name} - E-commerce Store</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-gray-600 hover:text-primary-600">Home</a>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
              <a href="/products" className="text-gray-600 hover:text-primary-600">Products</a>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-gray-800">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="product-main-swiper"
                onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
              >
                {allImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="product-thumbs-swiper"
              >
                {allImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-full h-20 object-cover rounded-lg cursor-pointer border-2 transition ${
                        index === activeImage ? 'border-primary-600' : 'border-transparent'
                      }`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {/* Price */}
            <div className="mb-4">
              {product.discountedPrice ? (
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary-600">
                    ₹{product.discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                    {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-4">
              <span className={`font-semibold ${stockStatusColor}`}>
                {stockStatus}
              </span>
              {product.stock > 0 && (
                <span className="text-gray-600 ml-2">
                  ({product.stock} units available)
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Quantity */}
            {product.stock > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 px-4 py-2 rounded-l-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                    className="w-16 text-center border-y border-gray-200 py-2 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="bg-gray-200 px-4 py-2 rounded-r-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FiShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FiHeart className="w-5 h-5" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FiShare2 className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500">Category</span>
                  <p className="font-semibold">{product.category?.name || 'Uncategorized'}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">SKU</span>
                  <p className="font-semibold">PRD-{product.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;