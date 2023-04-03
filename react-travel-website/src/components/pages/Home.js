import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import '../../App.css';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;