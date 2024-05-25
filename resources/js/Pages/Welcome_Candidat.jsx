import { Link, Head } from "@inertiajs/react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
export default function Welcome({ candidat, offers }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {candidat ? (
                        <Link
                            href={route("candidats.dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard candidat
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("candidats.login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("candidats.register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {offers.map((offer) => {
                            const offerDeadline = new Date(
                                offer.date_limite_candidature
                            );
                            const differenceInDays = Math.floor(
                                (offerDeadline - currentDate) /
                                    (1000 * 60 * 60 * 24)
                            );

                            return (
                                <div key={offer.id} className="col">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>
                                                {offer.titre}
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                Entreprise:
                                                {offer.entreprise
                                                    ? offer.entreprise
                                                          .nom_Entreprise
                                                    : "N/A"}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                <strong>Domaine:</strong>
                                                {offer.domaine}
                                                <br />
                                                <strong>Niveau d'Étude:</strong>
                                                {offer.niveau_etude}
                                                <br />
                                                <strong>Expérience:</strong>
                                                {offer.experience}
                                                <br />
                                                <strong>
                                                    Nombre de Postes:
                                                </strong>
                                                {offer.nombre_poste}
                                                <br />
                                                <strong>
                                                    Secteur d'Activité:
                                                </strong>
                                                {offer.secteur_activite}
                                                <br />
                                                <strong>Type d'Emploi:</strong>
                                                {offer.type_emploi}
                                                <br />
                                                <strong>Lieu:</strong>
                                                {offer.lieu}
                                                <br />
                                                <strong>Description:</strong>
                                                {offer.description.substring(
                                                    0,
                                                    25
                                                )}
                                                ...
                                                <br />
                                                <strong>
                                                    Date de Publication:
                                                </strong>
                                                {offer.date_Publication}
                                                <br />
                                                <strong>
                                                    Date Limite de Candidature:
                                                </strong>
                                                {offer.date_limite_candidature}
                                                <br />
                                                <strong>Salaire:</strong>
                                                {offer.salaire}
                                                <br />
                                                <strong>
                                                    Type de Contrat:
                                                </strong>
                                                {offer.type_contrat}
                                                <br />
                                            </Card.Text>
                                            {differenceInDays < 0 ? (
                                                <span className="text-danger">
                                                    Offer closed
                                                </span>
                                            ) : (
                                                <div className="d-grid gap-2">
                                                    <span className="text-success">
                                                        left {differenceInDays}
                                                        {differenceInDays == 1
                                                            ? "day"
                                                            : "days"}
                                                        to close offer .
                                                    </span>
                                                    <Link
                                                        className="btn btn-warning"
                                                        href={route(
                                                            "candidatures.create",
                                                            offer.id
                                                        )}
                                                    >
                                                        candidature create
                                                    </Link>
                                                </div>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
