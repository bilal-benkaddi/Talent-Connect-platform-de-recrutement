import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";
import { Head, Link } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard({ candidat }) {
    return (
        <AuthenticatedLayout
            candidat={candidat}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard Candidat
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            hello {candidat.nom} {candidat.prenom}!
                        </div>
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
