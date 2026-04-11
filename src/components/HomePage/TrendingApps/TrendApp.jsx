import Image from 'next/image';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const TrendApp = ({ data }) => {
    console.log(data);

    return (
        <div className='bg-linear-to-r font-bold from-[#c927c9] rounded-3xl to-[#8B5CF6] p-6'>
            <div className='flex justify-center items-center h-55  m-2 overflow-hidden'>
                <Image 
                src={data.image} 
                alt={data.companyName}
                width={200}
                height={200}
                className='rounded-3xl'
                ></Image>
            </div>
            <div>
                <h2 className='text-[#001931] text-xl font-medium'>{data.companyName}</h2>
            </div>
            <div className='flex justify-between'>
                <p className='flex items-center gap-1 text-green-500 font-bold'><FiDownload /> {data.downloads}</p>
                <p className='flex items-center gap-1 text-[#FF8811] font-bold'><MdOutlineStarPurple500 /> {data.ratingAvg}</p>
            </div>
        </div>
    );
};

export default TrendApp;