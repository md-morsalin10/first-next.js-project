"use client"
import { InstallAppsContext } from '@/components/context/InstallAppsContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const InstallToggleBtn = ({size, app}) => {
    const {installApps, setInstallApps} = useContext(InstallAppsContext);

     console.log("InstallApps", installApps);

     const isInstalled = installApps.find((installApp)=> installApp.id === app.id)
    
      const handleInstallBtn =()=> {
           setInstallApps([...installApps, app])
           toast.success(`${app.title} is Install Successful`);
           
    }
    return (
        <button
            onClick={handleInstallBtn}
            disabled={isInstalled ? true :false}
            className={`btn border-none text-white ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'}`}
            >{ isInstalled ? "Installed" : "Install Now"} ({size}MB)
        </button>
    );
};

export default InstallToggleBtn;