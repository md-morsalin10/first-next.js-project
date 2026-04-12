"use client"
import { InstallAppsContext } from '@/components/context/InstallAppsContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const InstallToggleBtn = ({size, app}) => {
    const {installApps, setInstallApps} = useContext(InstallAppsContext);

     console.log("InstallApps", installApps);
    
      const handleInstallBtn =()=> {
           setInstallApps([...installApps, app])
           toast.success(`${app.title} is Install Successful`);
           
    }
    return (
        <button
            onClick={handleInstallBtn}
            className='btn bg-green-500 border-none text-white'>Install Now ({size}MB)
        </button>
    );
};

export default InstallToggleBtn;