import React from 'react';
import Banner from './Banner';
import RatingSection from './RatingSection';
import TrendingApps from './TrendingApps/TrendingApps';


const HomePage = () => {
    return (
        <div>
            <Banner/>
            <RatingSection/>
            <TrendingApps from="home"/>
        </div>
    );
};

export default HomePage;