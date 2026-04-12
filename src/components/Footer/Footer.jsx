import React from 'react';
import logo from "../../assets/logo.png"
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#0B1120] p-6 mt-10'>
            <div className='flex justify-between items-center text-white py-2'>
                <div className='flex justify-center items-center gap-2'>
                    <Image src={logo} height={50} width={50}  className='h-10 w-10' alt="" />
                    <h2 className='font-bold'>HERO.IO</h2>
                </div>
                <div>
                    <p className='font-bold py-2'>Social Links</p>
                    <div className='flex gap-3'>
                        <FaXTwitter />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </div>

            </div>
            <hr className='text-gray-800' />
            <div className='pt-3'>
                <p className='text-white opacity-70 text-[14px] text-center'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;