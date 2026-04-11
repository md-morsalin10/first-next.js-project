import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import hero from "../../assets/hero.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className=' text-center space-y-6 pt-14'>
            <h2 className='text-5xl text-slate-50 font-bold'>We Build <br /> <span className='bg-linear-to-r font-bold from-[#c927c9] to-[#8B5CF6] bg-clip-text text-transparent'>Productive</span> Apps</h2>

            <p className='max-w-[50%] mx-auto text-slate-200'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className=''>
                <button className='btn mr-6 bg-linear-to-r font-bold from-[#c927c9] to-[#8B5CF6] shadow-[0_0_20px_rgba(236,72,153,0.5)] border-none'><FaGooglePlay /> Google Play</button>
                <button className='btn  bg-linear-to-r font-bold from-[#c927c9] to-[#8B5CF6] shadow-[0_0_20px_rgba(236,72,153,0.5)] border-none'><FaAppStoreIos /> App Store</button>
            </div>
            <div className='flex justify-center'>
                <Image src={hero} alt='banner'></Image>
            </div>
        </div>
    );
};

export default Banner;