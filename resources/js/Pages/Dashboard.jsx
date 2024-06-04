import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import OffersPerMonth from './OffersPerMonth';

export default function Dashboard({ auth, data }) { // Make sure to pass the data prop if required
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        <OffersPerMonth auth={auth} data={data} /> {/* Add this line to include the OffersPerMonth component */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
