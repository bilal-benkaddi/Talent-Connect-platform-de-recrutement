import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutEntreprises";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ entreprise }) {
    return (
        <AuthenticatedLayout
            entreprise={entreprise}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            hello {entreprise.email}!
                        </div>
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <div className="p-6 text-gray-900">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actions
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link className="dropdown-item" href={route('entreprises.profile.edit')}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href={route('entreprises.logout')} method="post">
                                            Log Out
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="{route('offres.create')}">
                                            Add New Offer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="{route('candidatures.index')}">
                                            Show Applications per Offer
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
