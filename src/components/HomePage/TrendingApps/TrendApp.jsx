import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const TrendApp = ({ data }) => {
  

    return (
        <Link href={"/appSection"}  className='group border border-gray-300 bg-base-200 p-2 rounded-3xl space-y-2  hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out hover:border-purple-600'>
            <div className='bg-linear-to-r font-bold from-[#c927c9] rounded-3xl to-[#8B5CF6] p-6'>
                <div className='flex justify-center items-center h-55  m-2 overflow-hidden'>
                    <Image
                        src={data.image}
                        alt={data.companyName}
                        width={180}
                        height={180}
                        className='rounded-3xl  object-contain transition-transform duration-500 ease-in-out group-hover:scale-110'
            
                    ></Image>
                </div>
                <div>
                    <h2 className='text-slate-50 text-2xl py-2 font-medium'>{data.title}</h2>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-1 text-slate-700 font-bold'><FiDownload /> {data.downloads}</p>
                    <p className='flex items-center gap-1 text-[#FF8811] font-bold'><MdOutlineStarPurple500 /> {data.ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default TrendApp;