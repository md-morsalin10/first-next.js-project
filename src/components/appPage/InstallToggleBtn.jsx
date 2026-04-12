"use client"
import { InstallAppsContext } from '@/app/install/InstallAppsContext';
import React, { useContext } from 'react';

const InstallToggleBtn = ({size}) => {
    const context = useContext(InstallAppsContext)
    
      const handleInstallBtn =()=> {
        // console.log("clicked");
            console.log(context);

        
    }
    return (
        <button
            onClick={handleInstallBtn}
            className='btn bg-green-500 border-none text-white'>Install Now ({size}MB)</button>
    );
};

export default InstallToggleBtn;