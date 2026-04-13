import React from 'react';
import TrendApp from './TrendApp';

const TrendingApps = async ({from}) => {
    const res = await fetch("https://apps-store-next-js.vercel.app/data.json" , {
        cache:"no-store"
    }) ;
    const allData = await res.json();

    
    
    return (
        <div className='py-15'>
            <h1 className='text-3xl font-bold text-center'>{from=== "home" ? "Trending Apps" : "All Apps"}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-8'>
                {
                allData.map(data=> <TrendApp data={data} key={data.id}></TrendApp>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;