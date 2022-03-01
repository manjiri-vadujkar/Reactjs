import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Carousel from '../Carousel';
import Footer from '../Footer';

function Home() {
  return (
    <div>
        <Carousel />
        <Cards />
        <Footer />
    </div>
  );
}

export default Home;
