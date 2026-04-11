"use client"
import Link from 'next/link';
import React from 'react';
import logo from "../../assets/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname()

    const links = <>
        <li
            className={` mx-2 font-bold ${pathName === "/" ? "border-b-2 border-secondary text-secondary" : "text-white"}`}><Link href={"/"}>Home</Link></li>
        <li
            className={` mx-2 font-bold ${pathName === "/appSection" ? "border-b-2 border-secondary text-secondary" : "text-white"}`}><Link href={"/appSection"}>Apps</Link></li>
        <li
            className={` mx-2 font-bold ${pathName === "/install" ? "border-b-2 border-secondary text-secondary" : "text-white"}`}><Link href={"/install"}>Installation</Link></li>
    </>
    
    return (
        <div className='shadow-sm sticky top-0 z-50 bg-[#0B1120] px-4'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-slate-50">
                            {links}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2 font-bold'>
                        <Image src={logo} alt='logo image' className='h-10 w-10'></Image>
                        <h2 className='bg-linear-to-r font-bold from-[#c927c9] to-[#8B5CF6] bg-clip-text text-transparent'>Apps Hub</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-slate-50">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-to-r font-bold from-[#c927c9] to-[#8B5CF6] shadow-[0_0_20px_rgba(236,72,153,0.5)] border-none">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;