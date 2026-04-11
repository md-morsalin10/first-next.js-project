import React from 'react';

const RatingSection = () => {
    return (
        <div className='bg-linear-to-r  from-[#c927c9] to-[#8B5CF6] py-15 text-white flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-center text-3xl font-bold'>Trusted by Millions, Built for You</h2>
            </div>
            <div className='grid grid-cols-3 gap-20 pt-6'> 
                <div className='text-center space-y-2'>
                    <p>Total Downloads</p>
                    <h2 className='font-bold text-6xl'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div className='text-center space-y-2'>
                    <p>Total Reviews</p>
                    <h2 className='font-bold text-6xl'>906K</h2>
                    <p>46% more than last month</p>
                </div>
                <div className='text-center space-y-2'>
                    <p>Active Apps</p>
                    <h2 className='font-bold text-6xl'>132+</h2>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default RatingSection;