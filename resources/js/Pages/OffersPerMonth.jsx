import React from 'react';
import { Head } from "@inertiajs/react";
import OffersChart from '../Components/OffersChart';

const OffersPerMonth = ({ auth, data }) => {
    return (
        
            <div className="container">
                <Head title="Offers Per Month" />
                <OffersChart data={data} width="1000px" height="600px" /> 
            </div>
    );
};

export default OffersPerMonth;
