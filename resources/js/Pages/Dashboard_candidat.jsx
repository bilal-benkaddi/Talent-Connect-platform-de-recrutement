import AuthenticatedLayout from "@/Layouts/AuthenticatedLayoutCandidats";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

export default function Dashboard({ candidat, candidatures }) {
    const [filter, setFilter] = useState("all");

    const filteredCandidatures = candidatures.filter((candidature) => {
        if (filter === "all") return true;
        return candidature.statut === filter;
    });

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
                            Hello {candidat.nom} {candidat.prenom}!
                        </div>
                        <hr className="m-2" />
                        <div className="p-6 text-gray-900">
                            <h1>Your candidatures:</h1>
                        </div>

                        <Nav variant="tabs" activeKey={filter} onSelect={(selectedKey) => setFilter(selectedKey)}>
                            <Nav.Item>
                                <Nav.Link eventKey="all">All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="pending">Pending</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="accepted">Accepted</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="rejected">Rejected</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="max-w-7xl mx-auto p-6 lg:p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredCandidatures.length > 0 ? (
                                filteredCandidatures.map((candidature) => (
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
                                <p>No candidatures available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
