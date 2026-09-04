import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Categories from './Categories';
import BestSelling from './BestSelling';
import NewArrivals from './NewArrivals';
import OfferBanner from './OfferBanner';
import Newsletter from './Newsletter';
import Features from './Features';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home - E-commerce Store</title>
        <meta name="description" content="Welcome to our e-commerce store. Shop the best products at amazing prices." />
      </Helmet>

      <div className="min-h-screen">
        <Hero />
        <Features />
        <Categories />
        <BestSelling />
        <OfferBanner />
        <NewArrivals />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;