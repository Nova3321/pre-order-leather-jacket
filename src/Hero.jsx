import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import welcomeAnimation from './assets/welcome.json';
import scrollDownAnimation from './assets/scroll-down.json';
import Countdown from './Countdown';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <h1 className="shop-name ephesis-regular">chez melissandre</h1>
      <Navbar />
      <div className="hero-content">
        <p className="phrase">
          Soyez parmi les premiers à réserver votre veste en cuir exclusive – élégance et confort, livrés bientôt chez vous.
        </p>
        <div className="animation-container">
          <Lottie animationData={welcomeAnimation} loop={true} style={{ width: 200, height: 200 }} />
        </div>
        <Countdown />
        <div className="animation-container">
          <Lottie animationData={scrollDownAnimation} loop={true} style={{ width: 50, height: 50 }} />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;