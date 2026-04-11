import React from 'react';
import TrendApp from './TrendApp';

const TrendingApps = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const allData = await res.json();
    
    return (
        <div className='py-15'>
            <h1 className='text-3xl font-bold text-center'>Trending Apps</h1>
            <div className='grid grid-cols-3 gap-8 p-8'>
                {
                allData.map(data=> <TrendApp data={data} key={data.id}></TrendApp>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;