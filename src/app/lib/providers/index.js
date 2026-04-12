import InstallAppsProvider from '@/app/install/InstallAppsProvider';
import React from 'react';

const Providers = ({children}) => {
    return (
        <InstallAppsProvider>
            {children}
        </InstallAppsProvider>
    );
};

export default Providers;