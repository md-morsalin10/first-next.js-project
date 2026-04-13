"use client"
import React, { useContext } from 'react';
import { InstallAppsContext } from '@/components/context/InstallAppsContext';
import SingleInstallApp from '@/components/SingleInstallApp/SingleInstallApp';

const InstallApps = () => {
    const {installApps} = useContext(InstallAppsContext)
    // console.log(installApps);


    return (
        <div className='bg-linear-to-r font-bold from-[#c927c9]  to-[#8B5CF6] md:w-6xl mx-auto  rounded-3xl py-9 '>
            {
                installApps.length > 0 &&
                <div className='text-center p-5 py-8'>
                    <h2 className='text-4xl font-bold text-[#001931]'>Your Installed Apps</h2>
                    <p className='text-white'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            }
            {
                installApps.length === 0 && <div className='flex justify-center items-center text-center py-15'>
                    <h2 className='text-4xl font-bold text-[#001931]'>No Install Apps Available</h2>
                </div>
            }
            {
                installApps.length > 0 &&
                <div>
                    {
                        installApps.map((iApp, ind) => <SingleInstallApp iApp={iApp} key={ind}></SingleInstallApp>)
                    }
                </div>
            }
        </div>
    );
};

export default InstallApps;