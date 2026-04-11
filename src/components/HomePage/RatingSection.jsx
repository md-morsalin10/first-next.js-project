import React from 'react';

const RatingSection = () => {
    return (
        <div className='bg-linear-to-r  from-[#c927c9] to-[#8B5CF6]  text-slate-50 flex flex-col justify-center items-center'>
            <div className='pt-5'>
                <h2 className='text-center text-2xl font-bold'>Trusted by Millions, Built for You</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 pt-6 py-15'> 
                <div className='text-center space-y-2'>
                    <p className='font-medium text-gray-200'>Total Downloads</p>
                    <h2 className='font-bold text-6xl'>29.6M</h2>
                    <p className='font-medium text-gray-200'>21% more than last month</p>
                </div>
                <div className='text-center space-y-2'>
                    <p className='font-medium text-gray-200'>Total Reviews</p>
                    <h2 className='font-bold text-6xl'>906K</h2>
                    <p className='font-medium text-gray-200'>46% more than last month</p>
                </div>
                <div className='text-center space-y-2'>
                    <p className='font-medium text-gray-200'>Active Apps</p>
                    <h2 className='font-bold text-6xl'>132+</h2>
                    <p  className='font-medium text-gray-200'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default RatingSection;