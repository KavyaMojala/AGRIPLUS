import React from 'react';
import banner from '../Images/banner.jpg'; // Import the image file relative to the Home.jsx file
import './Home.css'; // Import your CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <img src={banner} alt='banner' className="desktop-banner" />
        </div>
    );
};

export default Home;
