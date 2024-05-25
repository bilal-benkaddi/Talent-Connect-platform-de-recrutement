import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";
import { Head, Link } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard({ candidat, candidatures }) {
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
                        <hr  className="m-14"></hr>
                        <div className="p-6 text-gray-900">
                           <h1> Your candidatures :</h1>
                        </div>
                        <div className="max-w-7xl mx-auto p-6 lg:p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {candidatures !== null ? (
                                candidatures.map((candidature) => (
                                    <div
                                        key={candidature.id}
                                        className="bg-white shadow-md rounded-lg p-6"
                                    >
                                        <h2 className="text-lg font-semibold">
                                            {candidature.id}
                                        </h2>
                                        <p>{candidature.statut}</p>
                                        <div>
                                            <Link
                                            className="btn btn-primary"
                                                href={route(
                                                    "candidatures.show",
                                                    candidature.id
                                                )}
                                            >
                                                Détails de la candidature 
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
